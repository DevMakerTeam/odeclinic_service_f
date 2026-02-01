# Next.js App Router 폴더 및 라우팅 규칙 가이드

이 문서는 Next.js App Router 아키텍처 내에서 폴더 구조와 라우팅 컨벤션을 정의합니다. Cursor AI는 모든 페이지와 API 경로를 생성할 때 이 규칙을 엄격히 준수해야 합니다.

## 1. 디렉토리 구조 (App Directory)

모든 라우팅 관련 파일은 `src/app/` 내부에 위치합니다.

- **URL 경로**: 폴더 구조가 곧 URL 경로가 됩니다. (예: `app/dashboard/settings/page.tsx` -> `/dashboard/settings`)
- **Route Groups**: URL 경로에 영향을 주지 않고 폴더를 구조화할 때는 소괄호를 사용합니다. (예: `app/(auth)/login/page.tsx` -> `/login`)
- **Private Folders**: 라우팅에서 제외하고 싶은 폴더는 언더바를 접두어로 사용합니다. (예: `app/_components/`)

## 2. 특수 파일 규칙 (Special Files)

각 라우트 세그먼트 내에서 다음 파일명은 예약된 용도로만 사용합니다.

- `page.tsx`: 해당 경로의 고유 UI (공개됨)
- `layout.tsx`: 해당 세그먼트와 하위 세그먼트에 공통으로 적용되는 레이아웃 (상태 유지)
- `template.tsx`: 레이아웃과 유사하나 페이지 전환 시마다 새 인스턴스를 생성 (필요한 경우에만 사용)
- `loading.tsx`: 해당 세그먼트를 로딩하는 동안 보여줄 Suspense fallback UI
- `error.tsx`: 해당 세그먼트와 하위 세그먼트의 Runtime Error를 캐치하는 클라이언트 UI
- `not-found.tsx`: 404 에러 발생 시 보여주는 UI

## 3. 라우팅 상세 규칙

### 3.1 동적 라우팅 (Dynamic Routes)

- **Dynamic Segment**: `[id]`, `[slug]`와 같이 대괄호를 사용하여 동적 경로를 생성합니다.
- **Catch-all**: `[[...slug]]`를 사용하여 가변적인 경로 뎁스를 처리합니다.

### 3.2 서버/클라이언트 컴포넌트 분리

- **기본값**: 모든 컴포넌트는 기본적으로 **Server Component**로 작성합니다.
- **'use client'**: `useState`, `useEffect`, 이벤트 리스너(onClick 등), Browser API를 사용하는 경우에만 파일 최상단에 명시합니다.
- **최적화**: 데이터 페칭은 가능한 Server Component(page.tsx 또는 layout.tsx)에서 수행하고 결과값만 하위로 전달합니다.

### 3.3 Metadata API

- SEO를 위해 각 `page.tsx` 또는 `layout.tsx`에서 `metadata` 객체 혹은 `generateMetadata` 함수를 정의합니다.
- 정적 메타데이터: `export const metadata: Metadata = { ... }`

## 4. API Routes (Route Handlers)

- API 경로는 `route.ts` 파일명을 사용합니다.
- `page.tsx`와 동일한 폴더 레벨에 `route.ts`가 존재할 수 없습니다. 별도의 폴더로 분리하세요.
- (예: `app/api/users/route.ts`)

---
