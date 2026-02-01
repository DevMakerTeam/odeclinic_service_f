'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function MyPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'reservations' | 'visits'>('reservations');

  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    window.dispatchEvent(new Event('login-status-changed'));
    router.push('/login');
  };

  const reservations = [
    {
      id: 1,
      status: '예약 대기',
      date: '2023.11.05',
      title: '피부 상담 예약',
      doctor: '상담실장',
    },
    {
      id: 2,
      status: '예약 확정',
      date: '2023.11.01',
      title: '피코토닝 5회차',
      doctor: '김원장',
    },
    {
      id: 3,
      status: '완료',
      date: '2023.10.15',
      title: '힐로웨이브 시술 1회',
      doctor: '김원장',
    },
    {
      id: 4,
      status: '취소',
      date: '2023.09.20',
      title: '인모드 리프팅',
      doctor: '이원장',
    },
  ];

  const getStatusBadgeStyle = (status: string) => {
    switch (status) {
      case '예약 대기':
        return 'bg-amber-100 text-amber-800';
      case '예약 확정':
        return 'bg-blue-50 text-blue-700';
      case '완료':
        return 'bg-[#483C32]/10 text-[#483C32]';
      case '취소':
        return 'bg-gray-100 text-gray-400';
      default:
        return 'bg-gray-100 text-gray-400';
    }
  };

  // Filter lists based on user request
  // Reservation History: Cancel, Wait, Confirm
  const reservationList = reservations.filter(item => ['예약 대기', '예약 확정', '취소'].includes(item.status));
  // Visit History: Completed
  const visitList = reservations.filter(item => item.status === '완료');

  const ReservationItem = ({ item }: { item: typeof reservations[0] }) => (
    <div 
      className={`p-4 bg-white rounded-lg border border-[#483C32]/10 hover:border-[#483C32]/30 transition-colors cursor-pointer ${item.status === '취소' ? 'opacity-60' : ''}`}
    >
      <div className="flex justify-between items-start mb-2">
        <span className={`text-[10px] px-2 py-1 rounded-full font-bold ${getStatusBadgeStyle(item.status)}`}>
          {item.status}
        </span>
        <span className="text-xs text-[#8a7e75]">{item.date}</span>
      </div>
      <h4 className={`font-bold text-[#483C32] mb-1 ${item.status === '취소' ? 'line-through decoration-[#483C32]/30' : ''}`}>
        {item.title}
      </h4>
      <p className="text-sm text-[#8a7e75]">담당 원장: {item.doctor}</p>
    </div>
  );

  return (
    <div className="w-full min-h-[60vh] pb-20">
      <div className="px-6 py-8">
        
        {/* User Info Card */}
        <div className="bg-white p-6 rounded-xl border border-[#483C32]/10 mb-8 shadow-sm">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold text-[#483C32] mb-1">김오드 님</h3>
              <p className="text-sm text-[#8a7e75]">010-1234-5678</p>
            </div>
            <button 
              onClick={handleLogout}
              className="text-xs text-[#8a7e75] border border-[#8a7e75]/30 px-3 py-1.5 rounded hover:bg-[#483C32] hover:text-white hover:border-[#483C32] transition-colors"
            >
              로그아웃
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#483C32]/10 mb-6">
          <button
            onClick={() => setActiveTab('reservations')}
            className={`flex-1 pb-3 text-sm font-bold transition-colors relative ${
              activeTab === 'reservations' 
                ? 'text-[#483C32]' 
                : 'text-[#8a7e75]/60 hover:text-[#8a7e75]'
            }`}
          >
            예약 내역
            {activeTab === 'reservations' && (
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#483C32]" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('visits')}
            className={`flex-1 pb-3 text-sm font-bold transition-colors relative ${
              activeTab === 'visits' 
                ? 'text-[#483C32]' 
                : 'text-[#8a7e75]/60 hover:text-[#8a7e75]'
            }`}
          >
            방문 내역
            {activeTab === 'visits' && (
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#483C32]" />
            )}
          </button>
        </div>

        {/* Tab Content */}
        <div className="min-h-[300px]">
          {activeTab === 'reservations' ? (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              {reservationList.length > 0 ? (
                reservationList.map(item => <ReservationItem key={item.id} item={item} />)
              ) : (
                <div className="py-12 text-center border border-dashed border-[#483C32]/10 rounded-lg">
                  <p className="text-[#8a7e75] text-sm">예약 내역이 없습니다.</p>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              {visitList.length > 0 ? (
                visitList.map(item => <ReservationItem key={item.id} item={item} />)
              ) : (
                <div className="py-12 text-center border border-dashed border-[#483C32]/10 rounded-lg">
                  <p className="text-[#8a7e75] text-sm">방문 내역이 없습니다.</p>
                </div>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
