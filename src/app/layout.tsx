import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { Toaster } from 'sonner';
import ClientLayout from '@/components/layout/ClientLayout';
import QueryProvider from '@/components/providers/QueryProvider';
import { ACCESS_TOKEN_COOKIE } from '@/lib/auth';
import '@/styles/index.css';

export const metadata: Metadata = {
  title: 'ODE CLINIC',
  description: 'Premium aesthetic clinic',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const isLoggedIn = !!cookieStore.get(ACCESS_TOKEN_COOKIE)?.value;

  return (
    <html lang="ko">
      <body className="font-sans antialiased">
        <div className="w-full min-h-screen overflow-x-hidden font-sans antialiased text-[#483C32] bg-[#f4f0ec] lg:h-screen lg:overflow-hidden lg:flex lg:items-center lg:justify-center">
          <div className="w-full h-full relative lg:flex lg:items-center lg:justify-center">
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
            <QueryProvider>
              <ClientLayout initialIsLoggedIn={isLoggedIn}>{children}</ClientLayout>
            </QueryProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
