# ODE CLINIC - 프로젝트 구조 가이드

이 문서는 Next.js App Router 기반 ODE CLINIC 프로젝트의 폴더 구조와 개발 규칙을 정의합니다.

## 📁 현재 프로젝트 구조

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # 루트 레이아웃 (전역 스타일, Toaster)
│   ├── page.tsx                 # 홈페이지 (/)
│   ├── loading.tsx              # 전역 로딩 UI
│   ├── error.tsx                # 전역 에러 UI
│   ├── not-found.tsx            # 404 페이지
│   │
│   ├── events/                  # 이벤트&가격 (/events)
│   │   ├── page.tsx
│   │   └── loading.tsx
│   │
│   ├── procedures/              # 시술안내 (/procedures)
│   │   ├── page.tsx            # 시술 목록
│   │   ├── loading.tsx
│   │   ├── error.tsx
│   │   ├── hilo-wave/          # 힐로웨이브 상세 (/procedures/hilo-wave)
│   │   │   └── page.tsx
│   │   └── juvelook-volume/    # 쥬베룩볼륨 상세 (/procedures/juvelook-volume)
│   │       └── page.tsx
│   │
│   ├── mypage/                  # 마이페이지 (/mypage)
│   │   ├── page.tsx
│   │   ├── loading.tsx
│   │   └── error.tsx
│   │
│   ├── cart/                    # 장바구니 (/cart)
│   │   └── page.tsx
│   │
│   ├── login/                   # 로그인 (/login)
│   │   ├── page.tsx
│   │   └── loading.tsx
│   │
│   ├── column/                  # 오드칼럼 (/column)
│   │   └── page.tsx
│   │
│   └── about/                   # 오드소개 (/about)
│       └── page.tsx
│
├── components/                   # 재사용 컴포넌트
│   ├── layout/                  # 레이아웃 컴포넌트
│   │   └── ClientLayout.tsx    # 클라이언트 레이아웃 (헤더, 사이드바)
│   ├── common/                  # 공통 유틸리티 컴포넌트
│   │   └── ImageWithFallback.tsx
│   ├── LanguageSelector.tsx    # 언어 선택기
│   ├── ui/                      # shadcn/ui 컴포넌트
│   └── shared/                  # 공유 비즈니스 컴포넌트
│       ├── RelatedPosts.tsx
│       ├── ReservationCTA.tsx
│       └── WhyChooseUs.tsx
│
├── lib/                         # 유틸리티 함수
│   └── utils.ts                 # cn() 함수
│
├── styles/                      # 전역 스타일
│   ├── index.css               # 메인 스타일 엔트리
│   ├── fonts.css               # 폰트 정의
│   ├── tailwind.css            # Tailwind 설정
│   └── theme.css               # 테마 변수
│
└── assets/                      # 정적 에셋 (의미있는 이름으로 정리됨)
    ├── logo.png                # 로고
    ├── social-*.png            # 소셜 미디어 아이콘
    ├── flag-*.png              # 국기 아이콘
    ├── hilowave-*.png          # 힐로웨이브 시술 이미지
    ├── juvelook-*.png          # 쥬베룩 시술 이미지
    ├── reason-*.png            # 선택 이유 이미지
    └── *.png                   # 기타 이미지
```

---

## 📝 새로운 기능 추가 시 폴더 위치 가이드

### 1. 새 페이지 추가

#### 📍 일반 페이지

```
src/app/[페이지명]/
├── page.tsx          # 필수: 페이지 UI
├── loading.tsx       # 권장: 로딩 UI
└── error.tsx         # 권장: 에러 UI
```

**예시:**

- 리뷰 페이지: `src/app/reviews/page.tsx` → URL: `/reviews`
- FAQ 페이지: `src/app/faq/page.tsx` → URL: `/faq`

#### 📍 중첩 라우팅 페이지

```
src/app/blog/
├── page.tsx          # /blog
├── [slug]/
│   ├── page.tsx      # /blog/[slug]
│   ├── loading.tsx
│   └── error.tsx
└── category/
    └── [id]/
        └── page.tsx  # /blog/category/[id]
```

#### 📍 Route Groups (URL에 영향 없음)

인증이 필요한 페이지들을 그룹화:

```
src/app/(auth)/
├── layout.tsx        # 인증 페이지 공통 레이아웃
├── login/
│   └── page.tsx      # URL: /login
└── signup/
    └── page.tsx      # URL: /signup
```

### 2. API 엔드포인트 추가

#### 📍 API Routes

```
src/app/api/
├── reservations/
│   └── route.ts      # POST /api/reservations
├── procedures/
│   ├── route.ts      # GET /api/procedures
│   └── [id]/
│       └── route.ts  # GET /api/procedures/[id]
└── auth/
    └── verify/
        └── route.ts  # POST /api/auth/verify
```

**예시 코드:**

```typescript
// src/app/api/procedures/route.ts
export async function GET() {
  const procedures = await fetchProcedures();
  return Response.json(procedures);
}

export async function POST(request: Request) {
  const body = await request.json();
  // 처리 로직
  return Response.json({ success: true });
}
```

### 3. 재사용 컴포넌트 추가

#### 📍 UI 컴포넌트 (shadcn/ui)

```
src/components/ui/
└── [컴포넌트명].tsx
```

#### 📍 비즈니스 로직 컴포넌트

```
src/components/
├── [기능명]/
│   ├── [컴포넌트명].tsx
│   └── index.ts
└── shared/              # 여러 곳에서 사용되는 컴포넌트
    └── [컴포넌트명].tsx
```

**예시:**

- 예약 폼: `src/components/reservation/ReservationForm.tsx`
- 시술 카드: `src/components/procedures/ProcedureCard.tsx`

### 4. 유틸리티 함수 추가

```
src/lib/
├── utils.ts          # 일반 유틸리티
├── api.ts           # API 호출 함수
├── constants.ts     # 상수 정의
└── types.ts         # 공통 타입 정의
```

### 5. 훅(Hooks) 추가

```
src/hooks/
├── useAuth.ts
├── useCart.ts
└── useProcedures.ts
```

---

## 🎯 개발 규칙

### 1. Server Component vs Client Component

#### ✅ Server Component (기본값)

- 데이터 페칭
- 백엔드 리소스 직접 접근
- 민감한 정보 처리 (API 키 등)
- SEO 중요한 컨텐츠

```typescript
// src/app/procedures/page.tsx
// 'use client' 없음 = Server Component
export default async function ProceduresPage() {
  const procedures = await fetchProcedures(); // 서버에서 직접 데이터 페칭
  return <div>{/* ... */}</div>;
}
```

#### ✅ Client Component (`'use client'` 필요)

- 상태 관리 (`useState`, `useReducer`)
- 생명주기 (`useEffect`)
- 이벤트 리스너 (`onClick`, `onChange`)
- Browser API (`localStorage`, `window`)
- 외부 라이브러리 (react-slick 등)

```typescript
'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

### 2. 로딩 및 에러 처리

#### 📋 필수 파일

모든 데이터 페칭이 있는 페이지에는 반드시 추가:

- `loading.tsx` - Suspense 경계에서 자동으로 사용
- `error.tsx` - Error Boundary 역할

#### 🎨 로딩 UI 패턴

```typescript
// loading.tsx
export default function Loading() {
  return (
    <div className="animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-1/2 mb-4" />
      <div className="h-4 bg-gray-200 rounded w-full mb-2" />
      <div className="h-4 bg-gray-200 rounded w-3/4" />
    </div>
  );
}
```

#### 🚨 에러 UI 패턴

```typescript
// error.tsx
'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="text-center p-8">
      <h2>오류가 발생했습니다</h2>
      <Button onClick={reset}>다시 시도</Button>
    </div>
  );
}
```

### 3. Metadata 설정

#### 정적 Metadata

```typescript
// src/app/procedures/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '시술안내 - ODE CLINIC',
  description: '오드클리닉의 다양한 시술 정보를 확인하세요',
};
```

#### 동적 Metadata

```typescript
// src/app/procedures/detail/[id]/page.tsx
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const procedure = await getProcedure(params.id);

  return {
    title: `${procedure.name} - ODE CLINIC`,
    description: procedure.description,
  };
}
```

---

## 🚀 추천 개선 사항

### 1. Route Groups 활용 (선택사항)

인증이 필요한 페이지들을 그룹화:

```
src/app/
├── (public)/         # 인증 불필요
│   ├── page.tsx      # /
│   ├── events/
│   └── procedures/
│
└── (protected)/      # 인증 필요
    ├── layout.tsx    # 인증 체크 로직
    ├── mypage/
    └── cart/
```

### 2. API Routes 추가 (향후)

```
src/app/api/
├── auth/
│   └── verify/
│       └── route.ts
├── reservations/
│   └── route.ts
└── procedures/
    ├── route.ts
    └── [id]/
        └── route.ts
```

### 3. Middleware 추가 (인증 체크)

```typescript
// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.get('isLoggedIn');

  if (!isLoggedIn && request.nextUrl.pathname.startsWith('/mypage')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/mypage/:path*', '/cart/:path*'],
};
```

### 4. 환경변수 설정

```
# .env.local
NEXT_PUBLIC_API_URL=https://api.odeclinic.com
NEXT_PUBLIC_GOOGLE_MAPS_KEY=your_key_here
API_SECRET_KEY=your_secret_key
```

---

## 📌 체크리스트

새로운 기능 추가 시:

- [ ] `page.tsx` 생성 (필수)
- [ ] `loading.tsx` 추가 (데이터 페칭이 있는 경우)
- [ ] `error.tsx` 추가 (오류 처리가 필요한 경우)
- [ ] `metadata` 설정 (SEO 최적화)
- [ ] 'use client' 지시문 (클라이언트 기능이 필요한 경우만)
- [ ] 컴포넌트 경로가 `@/components/...`로 올바른지 확인
- [ ] 이미지는 `next/image` 사용 권장
- [ ] 빌드 테스트 (`npm run build`)

---

## 🎨 컴포넌트 작성 가이드

### Server Component (기본)

```typescript
// src/app/procedures/page.tsx
import { ProcedureCard } from '@/components/procedures/ProcedureCard';

export default async function ProceduresPage() {
  // 서버에서 데이터 페칭
  const procedures = await fetchProcedures();

  return (
    <div>
      {procedures.map((proc) => (
        <ProcedureCard key={proc.id} data={proc} />
      ))}
    </div>
  );
}
```

### Client Component

```typescript
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function InteractiveComponent() {
  const [state, setState] = useState(false);
  const router = useRouter();

  return (
    <button onClick={() => {
      setState(!state);
      router.push('/somewhere');
    }}>
      Click me
    </button>
  );
}
```

---

## 🔧 유지보수 가이드

### 파일 명명 규칙

- 페이지: `page.tsx` (소문자)
- 레이아웃: `layout.tsx` (소문자)
- 컴포넌트: `PascalCase.tsx` (예: `ProcedureCard.tsx`)
- 유틸리티: `camelCase.ts` (예: `formatDate.ts`)

### Import 경로

```typescript
// ✅ 좋은 예
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// ❌ 나쁜 예
import { Button } from '../../../components/ui/button';
```

### 스타일링

```typescript
import { cn } from '@/lib/utils';

// 조건부 스타일링
<div className={cn(
  'base-class',
  isActive && 'active-class',
  variant === 'primary' && 'primary-class'
)} />
```

---

## 📚 참고 자료

- [Next.js App Router 문서](https://nextjs.org/docs/app)
- [folder-rules.md](./folder-rules.md) - 상세 라우팅 규칙
- [prompt-guide.md](./prompt-guide.md) - 코드 작성 가이드
