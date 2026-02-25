# Swagger API 변경 대응 체크리스트

Swagger JSON이 수정되었을 때, `generated.ts` → Service → Hook → 컴포넌트 순서로 연쇄 업데이트하는 절차.

**Swagger JSON URL**: `https://api.presso.site/docs-json`  
**생성 타입 파일**: `src/api/generated.ts`  
**스크립트**: `pnpm run generate:api`

> **범위**: 이 프로젝트는 서비스(사용자) 전용 프론트엔드로, `/admin`이 포함되지 않은 엔드포인트만 연동한다.  
> 관리자용 API (`/api/v1/admin/` 하위 경로)가 스웨거에 있어도 **무시**한다.

---

## Step 1: Swagger JSON 분석

- [ ] **1.1** 변경된 Swagger JSON을 확인하거나 제공받는다
- [ ] **1.2** 이전 버전 대비 변경 사항을 파악한다
  - 추가된 인터페이스/DTO
  - 수정된 인터페이스/DTO (필드 추가·삭제·타입 변경·필수→선택 등)
  - 삭제된 인터페이스/DTO
  - 추가·수정·삭제된 엔드포인트
  - **`/admin` 포함 경로는 모두 무시**
- [ ] **1.3** 영향받는 도메인 목록 정리
  - `auth` / `event` / `blog` / `doctor` / `reservation` / `unavailable-slot` / `schedule` / `popup`

---

## Step 2: `generated.ts` 업데이트

- [ ] **2.1** 변경된 Swagger JSON 내용을 바탕으로 `src/api/generated.ts`의 인터페이스를 수정한다
  - 필드 추가/삭제/타입 변경 반영
  - 새 DTO 인터페이스 추가
  - 삭제된 DTO 인터페이스 제거
- [ ] **2.2** `generated.ts` 내 타입 참조(다른 타입을 import해 사용하는 경우) 일관성 확인

---

## Step 3: Service 파일 업데이트

영향받는 도메인의 `src/api/services/*.ts`를 수정한다.

- [ ] **3.1** 변경된 DTO를 import 목록에 반영 (추가·교체·삭제)
- [ ] **3.2** 함수 시그니처 수정
  - 파라미터 타입 변경 (예: `dto: ApiXxxCreateDto` → `dto: ApiXxxCreateDtoV2`)
  - 반환 타입 변경 (예: `Promise<ApiXxxResponseDto>` → `Promise<ApiXxxDetailResponseDto>`)
- [ ] **3.3** 엔드포인트 경로 변경 반영 (URL 변경 시)
- [ ] **3.4** HTTP 메서드 변경 반영 (GET→POST 등)
- [ ] **3.5** 새 API 엔드포인트 함수 추가
- [ ] **3.6** 삭제된 API 엔드포인트 함수 제거

**대상 파일**:
| 도메인 | 파일 |
|---|---|
| 인증 | `src/api/services/authService.ts` |
| 이벤트 | `src/api/services/eventService.ts` |
| 블로그/칼럼 | `src/api/services/blogService.ts` |
| 의료진 | `src/api/services/doctorService.ts` |
| 예약 | `src/api/services/reservationService.ts` |
| 예약 불가 시간대 | `src/api/services/unavailableSlotService.ts` |
| 스케줄 | `src/api/services/scheduleService.ts` |
| 팝업 | `src/api/services/popupService.ts` |

---

## Step 4: Hook 파일 업데이트

영향받는 도메인의 `src/hooks/use*.ts`를 수정한다.

- [ ] **4.1** import 타입 목록 업데이트 (`from "@/api/generated"`)
- [ ] **4.2** `useMutation` 함수의 `mutationFn` 파라미터 타입 수정
  - `dto: ApiXxxCreateDto` → 변경된 DTO 타입
- [ ] **4.3** `useQuery` 반환 데이터 타입이 변경된 경우 queryFn 수정
- [ ] **4.4** 새 API에 대응하는 훅 함수 추가
- [ ] **4.5** 삭제된 API에 대응하는 훅 함수 제거
- [ ] **4.6** `invalidateQueries` / `setQueryData` 로직 유지 여부 확인

**대상 파일**:
| 도메인 | 파일 |
|---|---|
| 인증 | `src/hooks/useAuth.ts` |
| 이벤트 | `src/hooks/useEvents.ts` |
| 블로그/칼럼 | `src/hooks/useBlogs.ts` |
| 의료진 | `src/hooks/useDoctors.ts` |
| 예약 | `src/hooks/useReservations.ts` |
| 예약 불가 시간대 | `src/hooks/useUnavailableSlots.ts` |
| 스케줄 | `src/hooks/useSchedules.ts` |
| 팝업 | `src/hooks/usePopups.ts` |

---

## Step 5: 컴포넌트/페이지 업데이트

훅과 연동된 페이지·컴포넌트를 수정한다.

- [ ] **5.1** 삭제되거나 이름이 바뀐 훅 호출 수정
- [ ] **5.2** 폼 필드 변경
  - 추가된 필드 → 폼에 input/select 추가
  - 삭제된 필드 → 폼에서 해당 input 제거
  - 필수→선택(optional) 변경 → validation 완화
  - 선택→필수 변경 → validation 강화
- [ ] **5.3** 리스트/카드 렌더링 변경 (응답 필드 추가·삭제 시)
- [ ] **5.4** 타입 매핑 헬퍼 함수 수정
- [ ] **5.5** TypeScript 타입 에러 전수 해결

**주요 페이지/컴포넌트**:
| 도메인 | 파일 |
|---|---|
| 인증 | `src/app/login/page.tsx` |
| 이벤트 | `src/app/events/page.tsx`, `src/app/events/[id]/page.tsx`, `EventsPageContent.tsx` |
| 블로그/칼럼 | `src/app/column/page.tsx` |
| 의료진 | `src/app/about/page.tsx` |
| 예약 신청 | `src/app/cart/page.tsx` |
| 내 예약 목록 | `src/app/mypage/page.tsx` |
| 팝업 | `src/app/page.tsx` (홈) |

---

## Step 6: 검증

- [ ] **6.1** TypeScript 컴파일 에러 없음 (`pnpm tsc --noEmit`)
- [ ] **6.2** 린트 에러 없음 (`pnpm lint`)
- [ ] **6.3** 개발 서버 정상 기동 (`pnpm dev`)
- [ ] **6.4** 변경된 API 화면에서 실제 동작 확인

---

## 변경 유형별 빠른 참조

| 변경 유형 | 수정 대상 |
|---|---|
| DTO 필드 추가 | `generated.ts` → Service → Hook → 페이지/컴포넌트 폼/카드 |
| DTO 필드 삭제 | `generated.ts` → Service → Hook → 페이지/컴포넌트 폼/카드 |
| DTO 필드 타입 변경 | `generated.ts` → Service → Hook → 페이지/컴포넌트 validation |
| 새 엔드포인트 추가 | `generated.ts` → Service → Hook(새 함수) → 페이지/컴포넌트 연결 |
| 엔드포인트 삭제 | Service → Hook → 페이지/컴포넌트에서 호출 제거 |
| URL/메서드 변경 | Service 함수 수정 (Hook·페이지 영향 없는 경우 많음) |
| 응답 구조 변경 | `generated.ts` → Service 반환 타입 → Hook → 페이지/컴포넌트 렌더링 |
