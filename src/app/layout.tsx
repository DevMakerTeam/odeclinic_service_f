import type { Metadata } from 'next';
import { Toaster } from 'sonner';
import ClientLayout from '@/components/layout/ClientLayout';
import '@/styles/index.css';

export const metadata: Metadata = {
  title: 'ODE CLINIC',
  description: 'Premium aesthetic clinic',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased">
        <div className="w-full min-h-screen font-sans antialiased text-[#483C32] bg-[#f4f0ec] lg:h-screen lg:overflow-hidden lg:flex lg:items-center lg:justify-center">
          <div className="w-full h-full lg:flex lg:items-center lg:justify-center lg:max-w-7xl lg:gap-24 xl:gap-32">
            <Toaster
              position="bottom-right"
              toastOptions={{
                style: {
                  background: 'white',
                  color: '#483C32',
                  border: '1px solid rgba(72, 60, 50, 0.1)',
                },
                className: 'shadow-lg rounded-lg text-sm font-medium',
              }}
            />
            <ClientLayout>{children}</ClientLayout>
          </div>
        </div>
      </body>
    </html>
  );
}
