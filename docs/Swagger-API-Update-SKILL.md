# Swagger API 변경 자동 반영 스킬

Swagger JSON이 수정되었을 때 `generated.ts` → Service → Hook → 컴포넌트 순서로 연쇄 업데이트를 자동으로 수행한다.

---

## 사용법 (팀원 공유용)

AI에게 아래 문장 중 하나를 그대로 입력하면 된다:

```
swagger api 반영해줘
```

그게 전부다. AI가 알아서 `https://api.presso.site/docs-json` 를 읽고
현재 코드와 비교해서 바뀐 부분을 찾아 자동으로 수정한다.

> **참고**: 이 파일(`docs/Swagger-API-Update-SKILL.md`)을 먼저 읽으라고 AI에게 알려주면 더 정확하게 동작한다.  
> 예: "docs/Swagger-API-Update-SKILL.md 보고 swagger api 반영해줘"

## Swagger JSON URL

**https://api.presso.site/docs-json**

이 스킬을 실행할 때는 위 URL을 직접 fetch하여 최신 Swagger JSON을 가져온다.  
사용자가 별도로 JSON을 붙여주지 않아도 된다.

## 사용 트리거

다음과 같은 명령이 들어오면 즉시 이 스킬을 실행한다:
- "swagger 바뀌었어 / swagger api 바뀌었어"
- "api 수정됐어 / api 변경됐어"
- "generated.ts 업데이트해줘"
- "swagger 반영해줘 / api 변경사항 반영해줘"

---

## 중요: 연동 범위

이 프로젝트는 **서비스(사용자) 전용 프론트엔드**다.  
스웨거에 있는 API 중 **`/admin`이 포함되지 않은 엔드포인트만** 연동한다.  
관리자용 API (`/api/v1/admin/` 하위 경로)는 **무시**한다.

**연동 대상 엔드포인트 목록**:

| 도메인 | 엔드포인트 | 메서드 | 설명 |
|---|---|---|---|
| auth | `/api/v1/auth/sms/send` | POST | SMS 인증번호 발송 |
| auth | `/api/v1/auth/sms/verify` | POST | SMS 인증 및 로그인/회원가입 |
| auth | `/api/v1/auth/refresh` | POST | 토큰 갱신 |
| auth | `/api/v1/auth/logout` | DELETE | 로그아웃 |
| event | `/api/v1/event` | GET | 이벤트 목록 조회 (ACTIVE, 노출 기간 내) |
| event | `/api/v1/event/{id}` | GET | 이벤트 상세 조회 (상품 포함) |
| doctor | `/api/v1/doctor` | GET | 의료진 목록 조회 (ACTIVE 상태만) |
| unavailable-slot | `/api/v1/unavailable-slot` | GET | 예약 불가 시간대 조회 |
| schedule | `/api/v1/schedules/doctors/by-date` | GET | 날짜별 근무 의료진 목록 조회 |
| reservation | `/api/v1/reservation` | POST | 예약 신청 (MEMBER) |
| reservation | `/api/v1/reservation` | GET | 내 예약 목록 조회 (MEMBER) |
| blog | `/api/v1/blog` | GET | 블로그 전체 목록 조회 |
| blog | `/api/v1/blog/main` | GET | 메인 노출 블로그 목록 조회 |
| blog | `/api/v1/blog/{slug}` | GET | 블로그 상세 조회 |
| popup | `/api/v1/popup` | GET | 활성 팝업 목록 조회 |

---

## 프로젝트 구조

```
src/
  api/
    generated.ts          ← swagger-typescript-api 자동 생성 타입 파일
    client.ts             ← Axios 인스턴스
    services/
      authService.ts
      eventService.ts
      blogService.ts
      doctorService.ts
      reservationService.ts
      unavailableSlotService.ts
      scheduleService.ts
      popupService.ts
  hooks/
    useAuth.ts
    useEvents.ts
    useBlogs.ts
    useDoctors.ts
    useReservations.ts
    useUnavailableSlots.ts
    useSchedules.ts
    usePopups.ts
  app/
    page.tsx              ← 홈 (팝업)
    login/page.tsx        ← 로그인 (SMS 인증)
    events/page.tsx       ← 이벤트 목록
    events/[id]/page.tsx  ← 이벤트 상세
    column/page.tsx       ← 칼럼/블로그 목록
    mypage/page.tsx       ← 마이페이지 (내 예약 목록)
    cart/page.tsx         ← 장바구니/예약 신청
    about/page.tsx        ← 의원 소개 (의료진)
    procedures/           ← 시술 정보 (정적 데이터)
```

**도메인 ↔ 파일 매핑**:
| 도메인 키워드 | Service | Hook | 주요 페이지/컴포넌트 |
|---|---|---|---|
| auth / 인증 | authService.ts | useAuth.ts | `login/page.tsx` |
| event / 이벤트 | eventService.ts | useEvents.ts | `events/page.tsx`, `events/[id]/page.tsx`, `EventsPageContent.tsx` |
| blog / 칼럼 | blogService.ts | useBlogs.ts | `column/page.tsx` |
| doctor / 의료진 | doctorService.ts | useDoctors.ts | `about/page.tsx` |
| reservation / 예약 | reservationService.ts | useReservations.ts | `mypage/page.tsx`, `cart/page.tsx` |
| unavailable-slot / 예약불가 | unavailableSlotService.ts | useUnavailableSlots.ts | `cart/page.tsx` (예약 달력) |
| schedule / 스케줄 | scheduleService.ts | useSchedules.ts | `cart/page.tsx` (의료진 선택) |
| popup / 팝업 | popupService.ts | usePopups.ts | `app/page.tsx` (홈 팝업) |

---

## 실행 절차

사용자가 Swagger 변경 사항을 알려주면 아래 순서를 **반드시 모두** 완료한다.

### Phase 0: 변경 사항 파악

1. `https://api.presso.site/docs-json` 를 WebFetch 툴로 가져온다
2. `src/api/generated.ts` 를 읽어서 현재 상태와 비교한다
3. 다음을 식별한다:
   - 추가/수정/삭제된 DTO 인터페이스 (필드명, 타입, optional 여부)
   - 추가/수정/삭제된 엔드포인트 (URL, HTTP 메서드, 요청/응답 타입)
   - **`/admin` 포함 경로는 모두 무시**
   - 영향받는 도메인 목록
4. TodoWrite 툴로 작업 목록을 구성한다

### Phase 1: `generated.ts` 수정

`src/api/generated.ts` 파일을 읽고 변경 사항을 반영한다:
- 수정된 DTO: 필드 추가/삭제/타입 변경
- 새 DTO: 인터페이스 블록 추가 (파일 내 알파벳 순서 또는 도메인 그룹에 맞춰 위치)
- 삭제된 DTO: 인터페이스 블록 제거

**주의**: `generated.ts` 상단의 `/* eslint-disable */`, `// @ts-nocheck` 주석은 유지한다.

### Phase 2: Service 파일 수정

영향받는 도메인의 Service 파일을 읽고 수정한다:

```typescript
// import 업데이트 패턴
import type {
  ApiXxxResponseDto,    // 응답 타입
  ApiXxxCreateDto,      // 생성 요청 타입
  ApiXxxUpdateDto,      // 수정 요청 타입
} from "@/api/generated";
```

- 파라미터 타입 변경 시: 함수 시그니처 수정
- URL 변경 시: apiClient.get/post/patch/delete 첫 번째 인자 수정
- 새 엔드포인트: 기존 패턴을 따라 함수 추가
- 삭제된 엔드포인트: 함수 제거

### Phase 3: Hook 파일 수정

영향받는 도메인의 Hook 파일을 읽고 수정한다:

```typescript
// import 업데이트 패턴
import type {
  ApiXxxCreateDto,
  ApiXxxUpdateDto,
} from "@/api/generated";
```

- `useMutation`의 `mutationFn` 파라미터 타입 수정
- 새 API에 대응하는 훅 함수 추가 (KEYS 상수도 함께 추가)
- 삭제된 API에 대응하는 훅 함수 제거

### Phase 4: 컴포넌트/페이지 수정

영향받는 페이지/컴포넌트 파일을 찾아 수정한다:

컴포넌트 탐색 방법:
1. 변경된 훅 함수명으로 Grep 검색
2. 변경된 DTO 타입명으로 Grep 검색
3. 변경된 필드명으로 Grep 검색

수정 항목:
- 폼 필드: 추가된 필드는 input 추가, 삭제된 필드는 input 제거
- validation: optional/required 변경 반영
- 리스트/카드 렌더링: 응답 필드 변경 반영
- 타입 매핑 헬퍼 함수: 필드 변경 반영

### Phase 5: 검증

ReadLints 툴로 수정한 파일들의 린트 에러를 확인하고 해결한다.

---

## 코딩 컨벤션

- Service 파일: `apiClient.get<{ data: ReturnType }>()` 후 `.data.data` 반환
- Hook 파일: `useQuery`는 조회, `useMutation`은 CUD
- `useMutation` 성공 시 반드시 `queryClient.invalidateQueries` 호출
- DTO 타입명 패턴: `Api[Domain][Action]Dto` (예: `ApiEventListItemResponseDto`, `ApiReservationCreateDto`)
- 인증이 필요한 API는 `apiClient` 인터셉터에서 자동으로 Bearer 토큰 주입

---

## 실행 시 보고 형식

작업 완료 후 다음 형식으로 요약한다:

```
## Swagger API 변경 반영 완료

### 변경 요약
- 수정된 DTO: [목록]
- 추가된 DTO: [목록]
- 삭제된 DTO: [목록]

### 수정된 파일
1. `src/api/generated.ts` - [변경 내용 요약]
2. `src/api/services/xxxService.ts` - [변경 내용 요약]
3. `src/hooks/useXxx.ts` - [변경 내용 요약]
4. `페이지/컴포넌트 파일들` - [변경 내용 요약]

### 주의사항 (있는 경우)
- [추가 확인이 필요한 사항]
```
