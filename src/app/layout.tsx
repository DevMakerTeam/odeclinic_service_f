import type { ReactNode } from 'react';

// [locale] 레이아웃이 html/body를 제공하므로 최소 passthrough 레이아웃
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
