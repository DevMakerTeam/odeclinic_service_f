# 프로젝트 아키텍처 요약

## 🎯 현재 상태

✅ **Vite → Next.js 15 완전 전환 완료**  
✅ **컴포넌트 구조 최적화 완료**  
✅ **에셋 파일명 정리 완료**  
✅ **시술 페이지 데이터/UI 분리 완료**  
✅ **빌드 오류 0개**

---

## 📁 최종 프로젝트 구조

```
src/
├── app/                                # Next.js App Router
│   ├── layout.tsx                     # 루트 레이아웃
│   ├── page.tsx                       # 홈페이지 (/)
│   ├── loading.tsx, error.tsx         # 전역 UI
│   ├── not-found.tsx                  # 404
│   │
│   ├── procedures/                    # 시술
│   │   ├── page.tsx                  # 시술 목록
│   │   ├── loading.tsx, error.tsx    # 목록 페이지용
│   │   ├── hilo-wave/                # ✨ 정적 페이지
│   │   │   └── page.tsx              # page.tsx만 필요
│   │   └── juvelook-volume/          # ✨ 정적 페이지
│   │       └── page.tsx              # page.tsx만 필요
│   │
│   ├── mypage/, cart/, login/         # 기타 페이지
│   ├── events/, column/, about/
│   └── ...
│
├── components/                         # 컴포넌트
│   ├── layout/                        # ✨ 레이아웃
│   │   └── ClientLayout.tsx
│   ├── common/                        # ✨ 공통 유틸
│   │   └── ImageWithFallback.tsx
│   ├── procedures/                    # ✨ 시술 페이지 전용
│   │   ├── HeroSection.tsx           # 최상단 이미지
│   │   ├── ProcedureInfoSection.tsx  # 시술 정보
│   │   ├── BeforeAfterSection.tsx    # 전후 사진
│   │   ├── PricingSection.tsx        # 가격표
│   │   ├── TargetAudienceSection.tsx # 시술 대상
│   │   ├── FAQSection.tsx            # FAQ
│   │   └── MaintenanceSection.tsx    # 유지기간
│   ├── shared/                        # 공유 비즈니스 컴포넌트
│   │   ├── RelatedPosts.tsx          # 관련 게시글
│   │   ├── WhyChooseUs.tsx           # 선택 이유 (공통)
│   │   └── ReservationCTA.tsx        # 예약 CTA (공통)
│   ├── ui/                            # shadcn/ui
│   └── LanguageSelector.tsx
│
├── data/                               # ✨ 데이터 레이어
│   └── procedures/
│       ├── common.ts                  # 공통 데이터
│       ├── hilo-wave.ts               # 힐로웨이브 데이터
│       └── juvelook-volume.ts         # 쥬베룩 데이터
│
├── lib/
│   └── utils.ts                       # cn() 함수
│
├── styles/
│   ├── index.css, fonts.css
│   ├── tailwind.css, theme.css
│   └── ...
│
└── assets/                             # ✨ 의미있는 이름으로 정리
    ├── logo.png
    ├── social-*.png                   # 소셜 아이콘
    ├── flag-*.png                     # 국기
    ├── hilowave-*.png                 # 힐로웨이브 이미지
    ├── juvelook-*.png                 # 쥬베룩 이미지
    ├── reason-*.png                   # 선택 이유
    └── ...
```

---

## 🎨 시술 페이지 구성

### 섹션 구조 (공통)

모든 시술 상세 페이지는 동일한 구조를 따릅니다:

```
1. HeroSection              ← 최상단 이미지 영역 (공통 컴포넌트)
2. ProcedureInfoSection     ← 시술 정보 (공통 컴포넌트)
3. BeforeAfterSection       ← 전후 사진 (공통 컴포넌트)
4. [시술별 고유 컨텐츠]      ← 효과 설명 (POINT 01, 02, 03...)
                              ※ 디자인 패턴 유사, 내용만 다름
5. MaintenanceSection       ← 유지기간 (공통 컴포넌트)
6. PricingSection           ← 가격표 (공통 컴포넌트)
7. TargetAudienceSection    ← 시술 대상 (공통 컴포넌트)
8. FAQSection               ← FAQ (공통 컴포넌트)
9. RelatedPosts             ← 관련 게시글 (시술마다 다름)
10. WhyChooseUs             ← 선택 이유 (모든 페이지 동일)
11. ReservationCTA          ← 예약 CTA (모든 페이지 동일)
```

### 데이터 흐름

```
MD 파일 (향후)
    ↓
data/procedures/[시술명].ts  ← 데이터 정의
    ↓
app/procedures/[시술명]/page.tsx  ← 페이지 조립
    ↓
components/procedures/*  ← 공통 UI 렌더링
```

---

## 🔧 주요 특징

### 1. **데이터/UI 분리**
- 데이터: `src/data/procedures/`
- UI: `src/components/procedures/`
- 페이지: `src/app/procedures/`

### 2. **재사용 가능한 컴포넌트**
- 7개의 공통 시술 컴포넌트
- 3개의 전역 공유 컴포넌트

### 3. **확장 가능한 구조**
- 새 시술 추가: 데이터 파일 + 페이지 파일만 생성
- 기존 페이지를 템플릿으로 복사하여 빠르게 생성 가능

### 4. **타입 안전성**
- TypeScript로 prop 타입 정의
- 잘못된 데이터 구조 시 빌드 타임에 오류 발견

---

## 📊 빌드 결과

```
✓ Compiled successfully
✓ Generating static pages (13/13)

Route (app)                         Size    First Load JS
├── /                              21.1 kB  129 kB
├── /procedures                    2.14 kB  155 kB
├── /procedures/hilo-wave          6.84 kB  170 kB  ← 정적 페이지
├── /procedures/juvelook-volume    7.88 kB  171 kB  ← 정적 페이지
├── /mypage                        1.57 kB  104 kB
├── /login                         2.8 kB   122 kB
└── ... (11개 페이지 총 13개)

○ (Static) - 모두 정적 사전 렌더링
```

---

## 🚀 다음 단계 (사용자 요청사항)

### ✅ 완료된 사항
1. ✅ 폴더 구조 변경: `procedures/detail/[id]` → `procedures/[id]`
2. ✅ 페이지 분리: 힐로웨이브, 쥬베룩볼륨 별도 파일
3. ✅ 공통 UI 컴포넌트 추출
4. ✅ 데이터 파일 분리

### 🔜 향후 지원 (준비 완료)
- **MD 파일 기반 페이지 생성**: 데이터 구조가 준비되어 있어 MD 파싱 후 자동 생성 가능
- **컨텐츠 작성자**: MD 파일만 작성하면 됨
- **개발자**: 파싱 로직만 추가하면 자동화 가능

---

## 📚 관련 문서

1. **[PROCEDURE_PAGE_GUIDE.md](./PROCEDURE_PAGE_GUIDE.md)** - 새 시술 페이지 추가 방법
2. **[REFACTORING_SUMMARY.md](./REFACTORING_SUMMARY.md)** - 리팩토링 상세 내역
3. **[PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)** - 전체 프로젝트 구조
4. **[README.md](./README.md)** - 시작 가이드

---

## 💬 사용자 피드백 반영

> "상세페이지 구성중에 공통 ui가 있어... 나머지 섹션들은 다 디자인이 비슷비슷해 살짝씩 다르단말야?"

✅ **이해하고 반영함**:
- 공통 UI는 컴포넌트로 추출 (Hero, Info, Pricing 등)
- 시술별 고유 컨텐츠는 페이지 내에 작성
- 디자인 패턴은 동일하게 유지 (motion, 색상, 레이아웃)
- 내용만 데이터 파일에서 주입

> "나중에 내가 데이터를 md파일로 주면... 너가 페이지를 디자인하면 돼 ㅇㅋ?"

✅ **준비 완료**:
- 데이터 구조 설계 완료 (`src/data/procedures/`)
- 기존 페이지를 참고 패턴으로 활용 가능
- MD 파일 포맷 정의 완료 (PROCEDURE_PAGE_GUIDE.md 참조)
- MD → 데이터 파싱 → 자동 페이지 생성 준비됨

**MD 파일만 주시면 자동으로 페이지 생성 가능합니다!** 🎉
