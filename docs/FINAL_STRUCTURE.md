# 최종 프로젝트 구조

## ✅ 완료된 시술 페이지 구조

```
src/app/procedures/
├── page.tsx              # 시술 목록 페이지
├── loading.tsx           # 목록 로딩 UI
├── error.tsx             # 목록 에러 UI (모든 하위 페이지 에러도 처리)
│
├── hilo-wave/            # 힐로웨이브 (정적 페이지)
│   └── page.tsx          # ✅ page.tsx만 필요
│
└── juvelook-volume/      # 쥬베룩볼륨 (정적 페이지)
    └── page.tsx          # ✅ page.tsx만 필요
```

## 🎯 왜 개별 loading/error가 불필요한가?

### ❌ loading.tsx 불필요
```typescript
// 시술 페이지는 정적 사전 렌더링
export default function HiloWavePage() {
  // ❌ 런타임 데이터 페칭 없음
  // ❌ async가 아님
  // ❌ Suspense가 필요 없음
  
  return <div>...</div>;
}
```
→ **loading.tsx가 표시될 상황이 없음**

### ❌ error.tsx 중복
```
/procedures/error.tsx          ← 이미 존재 (부모 레벨)
/procedures/hilo-wave/error.tsx    ← 중복, 불필요
/procedures/juvelook-volume/error.tsx  ← 중복, 불필요
```
→ **부모 레벨 error.tsx가 모든 하위 페이지 에러 처리**

---

## 📊 최종 라우팅 구조

| URL | 파일 | 타입 | Loading | Error |
|-----|------|------|---------|-------|
| `/procedures` | `procedures/page.tsx` | Static | ✅ 필요 | ✅ 필요 |
| `/procedures/hilo-wave` | `procedures/hilo-wave/page.tsx` | Static | ❌ 불필요 | ❌ 부모가 처리 |
| `/procedures/juvelook-volume` | `procedures/juvelook-volume/page.tsx` | Static | ❌ 불필요 | ❌ 부모가 처리 |

---

## 🎨 시술 페이지 아키텍처

### 계층 구조

```
Data Layer (데이터)
    ↓
src/data/procedures/
├── common.ts              # 공통 (선택 이유)
├── hilo-wave.ts           # 힐로웨이브 데이터
└── juvelook-volume.ts     # 쥬베룩 데이터

    ↓
Component Layer (UI 컴포넌트)
    ↓
src/components/procedures/
├── HeroSection.tsx              # 1️⃣ 최상단 이미지 (공통)
├── ProcedureInfoSection.tsx     # 2️⃣ 시술 정보 (공통)
├── BeforeAfterSection.tsx       # 3️⃣ 전후 사진 (공통)
├── MaintenanceSection.tsx       # 유지기간 (공통)
├── PricingSection.tsx           # 가격표 (공통)
├── TargetAudienceSection.tsx    # 시술 대상 (공통)
└── FAQSection.tsx               # FAQ (공통)

    ↓
Page Layer (페이지 조립)
    ↓
src/app/procedures/[시술명]/page.tsx

// 공통 섹션
<HeroSection />
<ProcedureInfoSection />
<BeforeAfterSection />

// 시술별 고유 컨텐츠 (디자인 패턴 유사, 내용만 다름)
<section>POINT 01, 02, 03...</section>

// 공통 섹션
<MaintenanceSection />
<PricingSection />
<TargetAudienceSection />
<FAQSection />

// 전역 공통 섹션
<RelatedPosts />        # 시술마다 다름
<WhyChooseUs />         # 모든 페이지 동일
<ReservationCTA />      # 모든 페이지 동일
```

---

## 🚀 신규 시술 추가 플로우

### 1. 이미지 준비
```bash
src/assets/
└── [시술명]-hero.png
    [시술명]-before1.png
    [시술명]-after1.png
    [시술명]-chart1.png
```

### 2. 데이터 파일 작성
```typescript
// src/data/procedures/[시술명].ts
export const [시술명]Data = {
  hero: { image, alt },
  info: { subtitle, title, titleEn, description, tags },
  beforeAfter: { title, pairs },
  maintenance: { title, duration, schedule },
  pricing: { title, subtitle, note, items },
  targetAudience: { title, subtitle, items },
  faq: { title, items },
  relatedPosts: [...],
};
```

### 3. 페이지 파일 생성
```bash
# 기존 페이지 복사
cp -r src/app/procedures/hilo-wave src/app/procedures/[시술명]

# 페이지 내용 수정 (import만 변경)
# src/app/procedures/[시술명]/page.tsx
```

### 4. 시술 목록에 추가
```typescript
// src/app/procedures/page.tsx
const PROCEDURES = [
  ...
  { id: '[시술명]', ... }
];
```

### 5. 빌드
```bash
npm run build
```

**끝!** 🎉

---

## 💡 핵심 설계 원칙

### 1. **데이터/UI 완전 분리**
- 데이터만 수정 → UI 자동 반영
- UI 수정 → 모든 페이지 일괄 적용

### 2. **공통화 최대화**
- 7개 시술 전용 공통 컴포넌트
- 3개 전역 공유 컴포넌트
- 1개 공통 데이터 파일

### 3. **확장성**
- 새 시술 추가: 데이터 파일 + 페이지 파일
- 기존 파일을 템플릿으로 복사
- 10분 안에 새 시술 페이지 생성 가능

### 4. **MD 파일 준비**
- 데이터 구조 설계 완료
- MD → TypeScript 변환 가능
- 향후 자동화 가능

---

## 📈 성능

```
Route                           Size    First Load JS
/procedures/hilo-wave          6.84 kB  170 kB
/procedures/juvelook-volume    7.88 kB  171 kB
```

- ✅ 정적 사전 렌더링 (SSG)
- ✅ 빠른 초기 로딩
- ✅ SEO 최적화
- ✅ 캐시 활용 가능

---

## 🎯 요약

| 항목 | 상태 | 비고 |
|------|------|------|
| 폴더 구조 | ✅ | `procedures/[id]` 형식 |
| 페이지 분리 | ✅ | 힐로웨이브, 쥬베룩 별도 파일 |
| 공통 UI | ✅ | 7개 컴포넌트 추출 |
| 데이터 분리 | ✅ | `src/data/procedures/` |
| 불필요한 파일 | ✅ | loading/error 삭제 |
| 빌드 | ✅ | 13개 페이지, 0 에러 |
| MD 준비 | ✅ | 데이터 구조 완성 |

**MD 파일 주시면 바로 페이지 생성 가능합니다!** 🚀
