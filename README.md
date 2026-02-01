# ODE CLINIC - Next.js Client

오드클리닉 웹사이트 프론트엔드 프로젝트입니다.

## 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI, shadcn/ui
- **Animation**: Framer Motion
- **State Management**: React Hooks

## 시작하기

### 설치

```bash
# 의존성 설치
npm install
# 또는
pnpm install
# 또는
yarn install
```

### 개발 서버 실행

```bash
npm run dev
# 또는
pnpm dev
# 또는
yarn dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 빌드

```bash
npm run build
npm run start
```

## 프로젝트 구조

```
src/
├── app/                    # Next.js App Router 페이지
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx           # 홈페이지
│   ├── loading.tsx        # 전역 로딩 UI
│   ├── error.tsx          # 전역 에러 UI
│   ├── not-found.tsx      # 404 페이지
│   ├── events/            # 이벤트&가격
│   │   ├── page.tsx
│   │   └── loading.tsx
│   ├── procedures/        # 시술안내
│   │   ├── page.tsx      # 시술 목록
│   │   ├── loading.tsx
│   │   ├── error.tsx
│   │   ├── hilo-wave/    # 힐로웨이브 상세 (정적)
│   │   │   └── page.tsx
│   │   └── juvelook-volume/  # 쥬베룩볼륨 상세 (정적)
│   │       └── page.tsx
│   ├── mypage/            # 마이페이지
│   │   ├── page.tsx
│   │   ├── loading.tsx
│   │   └── error.tsx
│   ├── cart/              # 장바구니
│   ├── login/             # 로그인
│   │   ├── page.tsx
│   │   └── loading.tsx
│   ├── column/            # 오드칼럼
│   └── about/             # 오드소개
├── components/            # 재사용 가능한 컴포넌트
│   ├── layout/           # 레이아웃 컴포넌트
│   │   └── ClientLayout.tsx
│   ├── common/           # 공통 유틸리티 컴포넌트
│   │   └── ImageWithFallback.tsx
│   ├── LanguageSelector.tsx
│   ├── ui/               # UI 컴포넌트 (shadcn/ui)
│   └── shared/           # 공유 비즈니스 컴포넌트
├── lib/                  # 유틸리티 함수
│   └── utils.ts          # cn 함수 등
├── styles/               # 전역 스타일
│   ├── index.css        # 메인 스타일
│   ├── fonts.css        # 폰트
│   ├── tailwind.css     # Tailwind 설정
│   └── theme.css        # 테마 변수
└── assets/               # 정적 에셋

```

자세한 구조 설명은 [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)를 참조하세요.

## 주요 기능

- ✨ 반응형 디자인 (모바일 우선)
- 🎨 프리미엄 UI/UX
- 🔐 휴대폰 인증 로그인
- 📅 예약 및 방문 내역 관리
- 🛒 장바구니 기능
- 🌐 다국어 지원 (예정)

## 환경 변수

`.env.local` 파일을 생성하고 필요한 환경 변수를 설정하세요:

```env
NEXT_PUBLIC_API_URL=your_api_url
```

## 개발 가이드

### 코드 스타일

- TypeScript를 사용합니다
- Tailwind CSS의 유틸리티 클래스를 사용합니다
- `cn()` 함수를 사용하여 조건부 클래스를 적용합니다

### 컴포넌트 작성

```typescript
"use client"; // 클라이언트 컴포넌트인 경우

import { cn } from "@/lib/utils";

export function Component() {
  return (
    <div className={cn("base-class", "conditional-class")}>{/* content */}</div>
  );
}
```

## 라이선스

Copyright © 2024 ODE CLINIC. All rights reserved.
