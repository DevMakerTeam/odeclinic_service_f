# 시술 상세 페이지 생성 가이드

이 문서는 새로운 시술 상세 페이지를 추가하는 방법을 설명합니다.

## 📁 현재 구조

```
src/
├── app/procedures/
│   ├── page.tsx                  # 시술 목록 페이지
│   ├── hilo-wave/               # 힐로웨이브 (정적 페이지)
│   │   ├── page.tsx
│   │   ├── loading.tsx
│   │   └── error.tsx
│   └── juvelook-volume/         # 쥬베룩볼륨 (정적 페이지)
│       ├── page.tsx
│       ├── loading.tsx
│       └── error.tsx
│
├── components/procedures/        # 시술 페이지 전용 컴포넌트
│   ├── HeroSection.tsx          # 최상단 이미지 영역
│   ├── ProcedureInfoSection.tsx # 시술 정보 섹션
│   ├── BeforeAfterSection.tsx   # 전후 사진 섹션
│   ├── PricingSection.tsx       # 가격표 섹션
│   ├── TargetAudienceSection.tsx # 시술 대상 섹션
│   ├── FAQSection.tsx           # FAQ 섹션
│   └── MaintenanceSection.tsx   # 유지기간 섹션
│
└── data/procedures/              # 시술 데이터 파일
    ├── common.ts                # 공통 데이터 (선택 이유)
    ├── hilo-wave.ts             # 힐로웨이브 데이터
    └── juvelook-volume.ts       # 쥬베룩볼륨 데이터
```

---

## 🎨 공통 UI 컴포넌트

모든 시술 상세 페이지는 다음 섹션으로 구성됩니다:

### 1. **HeroSection** (최상단 이미지 영역)
```typescript
<HeroSection image={data.hero.image} alt={data.hero.alt} />
```

### 2. **ProcedureInfoSection** (시술 정보)
```typescript
<ProcedureInfoSection 
  subtitle="자연스럽고 안전한 볼륨 개선"
  title="힐로웨이브"
  titleEn="HILO WAVE"
  description="시술 설명..."
  tags={['태그1', '태그2', '태그3']}
/>
```

### 3. **BeforeAfterSection** (전후 사진)
```typescript
<BeforeAfterSection 
  title="시술명 전후"
  pairs={[
    { before: img1, after: img2, id: 1 },
    { before: img3, after: img4, id: 2 },
  ]}
/>
```

### 4. **중간 컨텐츠 영역** (시술별 고유 내용)
- 효과 설명 (POINT 01, 02, 03, 04...)
- 비교표, 차트 이미지
- **디자인 패턴은 유사하지만 내용은 시술마다 다름**

### 5. **MaintenanceSection** (유지기간)
```typescript
<MaintenanceSection 
  title="유지기간, 주기"
  content={<>유지기간: <span>6개월</span></>}
/>
```

### 6. **PricingSection** (가격표)
```typescript
<PricingSection 
  title="가격, 비용"
  subtitle="가격은 다음과 같습니다"
  note="(부가세 별도)"
  items={[
    { name: '항목1', price: '60만원' },
    { name: '항목2', price: '100만원', highlight: true },
  ]}
/>
```

### 7. **TargetAudienceSection** (시술 대상)
```typescript
<TargetAudienceSection 
  title="시술 대상"
  subtitle="이런 분들께 추천"
  items={['대상1', '대상2', '대상3']}
/>
```

### 8. **FAQSection** (자주 묻는 질문)
```typescript
<FAQSection 
  title="자주 묻는 질문"
  faqs={[
    { q: '질문1?', a: '답변1' },
    { q: '질문2?', a: '답변2' },
  ]}
/>
```

### 9. **RelatedPosts** (관련 게시글) - 시술마다 다름
```typescript
<RelatedPosts posts={data.relatedPosts} />
```

### 10. **WhyChooseUs** (선택 이유) - 모든 페이지 동일
```typescript
<WhyChooseUs reasons={commonProcedureData.reasons} />
```

### 11. **ReservationCTA** (예약 CTA) - 모든 페이지 동일
```typescript
<ReservationCTA />
```

---

## 📝 새 시술 페이지 추가 방법

### Step 1: 이미지 준비

`src/assets/` 폴더에 다음 이미지를 추가:

```
[시술명]-hero.png              # 히어로 배너
[시술명]-bna-before1.png       # 전후 사진
[시술명]-bna-after1.png
[시술명]-chart1.png             # 차트/비교표
[시술명]-chart2.png
```

**네이밍 규칙:**
- 소문자 kebab-case 사용
- 시술명을 접두어로 사용
- 목적을 명확히 (hero, bna, chart, technique 등)

### Step 2: 데이터 파일 생성

`src/data/procedures/[시술명].ts` 파일 생성:

```typescript
// src/data/procedures/botox.ts
import botoxHero from '@/assets/botox-hero.png';
import botoxBefore1 from '@/assets/botox-before1.png';
import botoxAfter1 from '@/assets/botox-after1.png';

export const botoxData = {
  id: 'botox',
  
  hero: {
    image: botoxHero,
    alt: 'BOTOX Background',
  },

  info: {
    subtitle: '자연스러운 주름 개선, 보톡스',
    title: '보톡스',
    titleEn: 'BOTOX',
    description: '보톡스 시술 설명...',
    tags: ['주름개선', '안전시술', 'FDA승인'],
  },

  beforeAfter: {
    title: '보톡스 전후',
    pairs: [
      { before: botoxBefore1, after: botoxAfter1, id: 1 },
    ],
  },

  maintenance: {
    title: '보톡스 유지기간, 주기',
    duration: '3~6개월',
    schedule: '3~6개월 간격으로 재시술',
  },

  pricing: {
    title: '보톡스 가격, 비용',
    subtitle: '오드의원 보톡스 가격은 다음과 같습니다.',
    note: '(부가세 별도)',
    items: [
      { name: '보톡스 50U', price: '10만원' },
      { name: '보톡스 100U', price: '18만원', highlight: true },
    ],
  },

  targetAudience: {
    title: '보톡스 시술 대상',
    subtitle: '이런 분들께 추천해 드립니다',
    items: [
      '이마 주름, 미간 주름이 고민이신 분들',
      '안전하고 검증된 시술을 원하시는 분들',
    ],
  },

  faq: {
    title: '자주 묻는 질문',
    items: [
      { q: '보톡스는 아프나요?', a: '바늘이 매우 가늘어서...' },
      { q: '보톡스는 안전한가요?', a: 'FDA 승인을 받은...' },
    ],
  },

  relatedPosts: [
    { id: '1', image: '...', tags: [...], title: '...', description: '...', date: '...' },
  ],
};
```

### Step 3: 페이지 파일 생성

`src/app/procedures/[시술명]/page.tsx` 생성:

```typescript
'use client';

import { motion } from 'motion/react';
import { HeroSection } from '@/components/procedures/HeroSection';
import { ProcedureInfoSection } from '@/components/procedures/ProcedureInfoSection';
import { BeforeAfterSection } from '@/components/procedures/BeforeAfterSection';
import { PricingSection } from '@/components/procedures/PricingSection';
import { TargetAudienceSection } from '@/components/procedures/TargetAudienceSection';
import { FAQSection } from '@/components/procedures/FAQSection';
import { MaintenanceSection } from '@/components/procedures/MaintenanceSection';
import { RelatedPosts } from '@/components/shared/RelatedPosts';
import { WhyChooseUs } from '@/components/shared/WhyChooseUs';
import { ReservationCTA } from '@/components/shared/ReservationCTA';
import { botoxData } from '@/data/procedures/botox';
import { commonProcedureData } from '@/data/procedures/common';

export default function BotoxPage() {
  return (
    <div className="bg-background min-h-screen font-sans text-foreground w-full">
      {/* 공통 섹션들 */}
      <HeroSection {...botoxData.hero} />
      <ProcedureInfoSection {...botoxData.info} />
      <BeforeAfterSection {...botoxData.beforeAfter} />

      {/* 시술별 고유 컨텐츠 영역 */}
      <section className="py-16 md:py-32 bg-white">
        <div className="w-full max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-10 md:mb-16">
            <SectionHeading>보톡스 효과</SectionHeading>
          </div>
          
          {/* POINT 01, 02, 03... 여기에 작성 */}
          {/* 디자인은 힐로웨이브, 쥬베룩 참고 */}
        </div>
      </section>

      {/* 나머지 공통 섹션들 */}
      <MaintenanceSection {...botoxData.maintenance} />
      <PricingSection {...botoxData.pricing} />
      <TargetAudienceSection {...botoxData.targetAudience} />
      <FAQSection title={botoxData.faq.title} faqs={botoxData.faq.items} />
      
      {/* 공통 섹션 */}
      <RelatedPosts posts={botoxData.relatedPosts} />
      <WhyChooseUs reasons={commonProcedureData.reasons} />
      <ReservationCTA />
    </div>
  );
}
```

### Step 4: 시술 목록에 추가

`src/app/procedures/page.tsx`의 `PROCEDURES` 배열에 추가:

```typescript
const PROCEDURES: Procedure[] = [
  // ... 기존 시술들
  {
    id: 'botox',
    category: '주름개선',
    name: '보톡스',
    description: '자연스러운 주름 개선...',
    price: '10만원~',
    imageUrl: 'https://...',
  },
];
```

---

## 🎨 디자인 패턴 가이드

### 공통 디자인 패턴

모든 시술 페이지는 **유사한 디자인**을 공유합니다:

#### 1. **POINT 섹션 레이아웃**
```tsx
<div className="flex flex-col gap-6 md:gap-8">
  <div>
    <span className="text-[#a58d7d] font-bold text-lg md:text-xl block mb-2 md:mb-3">
      POINT 01
    </span>
    <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight break-keep">
      <motion.span 
        initial={{ backgroundSize: "0% 100%" }} 
        whileInView={{ backgroundSize: "100% 100%" }} 
        viewport={{ once: true }} 
        transition={{ duration: 1, ease: "easeOut" }} 
        className="bg-[linear-gradient(...)] ..."
      >
        강조할 부분
      </motion.span>
      나머지 제목
    </h3>
    
    {/* 이미지가 있다면 */}
    <div className="mt-6 md:mt-8 rounded-2xl overflow-hidden shadow-sm">
      <ImageWithFallback src={image} alt="..." className="w-full object-cover" />
    </div>
  </div>
  
  <div className="bg-[#f4f0ec] p-5 md:p-8 rounded-3xl">
    <p className="text-[#483C32] text-base md:text-lg leading-relaxed">
      설명 내용...
      <span className="text-white bg-[#3F342D] px-1">강조 텍스트</span>
    </p>
  </div>
</div>
```

#### 2. **비교 카드 레이아웃**
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
  <div className="bg-[#e9e5e0] p-5 md:p-6 rounded-2xl border border-[#dcd8d4]">
    <p className="font-bold text-[#483C32] text-base md:text-lg mb-2">옵션 A</p>
    <p className="text-[#483C32] text-sm md:text-base font-medium">설명...</p>
  </div>
  <div className="bg-white p-5 md:p-6 rounded-2xl border border-[#dcd8d4]">
    <p className="font-bold text-[#483C32] text-base md:text-lg mb-2">옵션 B</p>
    <p className="text-[#8a7e75] text-sm md:text-base font-medium">설명...</p>
  </div>
</div>
```

#### 3. **하이라이트 스타일**
- **밑줄 애니메이션**: `motion.span`으로 그라데이션 밑줄
- **강조 텍스트**: `<span className="text-white bg-[#3F342D] px-1">텍스트</span>`

---

## 📄 MD 파일 포맷 (향후 지원 예정)

MD 파일로 시술 데이터를 작성하면 자동으로 페이지 생성:

```markdown
---
id: botox
category: 주름개선
---

# 보톡스

## Hero
- image: botox-hero.png
- alt: BOTOX Background

## Info
- subtitle: 자연스러운 주름 개선, 보톡스
- title: 보톡스
- titleEn: BOTOX
- description: 보톡스는 근육의 수축을 일시적으로 억제하여...
- tags: [주름개선, 안전시술, FDA승인]

## BeforeAfter
- title: 보톡스 전후

### Pair 1
- before: botox-before1.png
- after: botox-after1.png

## Effects

### POINT 01
- title: 보톡스란?
- content: |
  보톡스는 보툴리눔 톡신을 이용한 시술로...
  
### POINT 02
- title: 보톡스 효과는?
- image: botox-effect-chart.png
- imageAlt: 보톡스 효과 차트
- content: |
  시술 후 3~7일부터 효과가 나타나며...

## Maintenance
- title: 보톡스 유지기간, 주기
- duration: 3~6개월
- schedule: 3~6개월 간격으로 재시술

## Pricing
- title: 보톡스 가격, 비용
- subtitle: 오드의원 보톡스 가격은 다음과 같습니다.
- note: (부가세 별도)

### Items
- name: 보톡스 50U
  price: 10만원
  
- name: 보톡스 100U
  price: 18만원
  highlight: true

## TargetAudience
- title: 보톡스 시술 대상
- subtitle: 이런 분들께 추천해 드립니다

### Items
- 이마 주름, 미간 주름이 고민이신 분들
- 턱 근육이 발달하여 사각턱이 고민이신 분들
- 안전하고 검증된 시술을 원하시는 분들

## FAQ

### Q1
- q: 보톡스는 아프나요?
- a: 바늘이 매우 가늘어서 통증이 거의 없습니다...

### Q2
- q: 보톡스는 안전한가요?
- a: FDA 승인을 받은 안전한 시술입니다...

## RelatedPosts

### Post 1
- id: 1
- image: https://...
- tags: [보톡스, 주름]
- title: 보톡스 시술 전 알아야 할 것들
- description: ...
- date: 2026.01.20
```

---

## 🚀 빠른 시작 (신규 시술 추가)

### 1. 기존 페이지 복사
```bash
# 힐로웨이브를 템플릿으로 사용
cp -r src/app/procedures/hilo-wave src/app/procedures/[새시술명]
cp src/data/procedures/hilo-wave.ts src/data/procedures/[새시술명].ts
```

### 2. 파일 내용 수정
- 데이터 파일: 시술 정보 업데이트
- 페이지 파일: import 경로만 변경

### 3. 시술 목록에 추가
`src/app/procedures/page.tsx`의 `PROCEDURES` 배열 업데이트

### 4. 빌드 테스트
```bash
npm run build
```

---

## 📊 현재 지원하는 시술

1. **힐로웨이브** (`/procedures/hilo-wave`)
   - 특징: 비교표, 4개 POINT 섹션
   
2. **쥬베룩볼륨** (`/procedures/juvelook-volume`)
   - 특징: 결절 예방 3원칙, 논문 출처

---

## 💡 개발 팁

### 시술별 고유 컨텐츠 작성 시

힐로웨이브와 쥬베룩볼륨 페이지의 **POINT 섹션 코드를 참고**하세요:
- `src/app/procedures/hilo-wave/page.tsx` (라인 50~200)
- `src/app/procedures/juvelook-volume/page.tsx` (라인 50~300)

**공통 패턴:**
- `<motion.span>`으로 제목 강조
- `bg-[#f4f0ec]` 박스로 설명 감싸기
- `text-white bg-[#3F342D]`로 중요 텍스트 강조
- 이미지는 `rounded-2xl overflow-hidden shadow-sm` 스타일

### 테이블 추가 시

힐로웨이브의 비교표 코드 참고:
```typescript
<Table className="w-full table-fixed">
  <TableHeader className="bg-[#f4f0ec]">
    <TableRow>
      <TableHead className="...">항목</TableHead>
      <TableHead className="... bg-[#e8e2dc]">시술 A</TableHead>
      <TableHead className="...">시술 B</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {data.map(([label, a, b]) => (
      <TableRow key={label}>
        <TableCell className="...">{label}</TableCell>
        <TableCell className="... bg-[#f4f0ec]">{a}</TableCell>
        <TableCell className="...">{b}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
```

---

## ✅ 체크리스트

새 시술 페이지 추가 시:

- [ ] 이미지 파일 준비 및 assets 폴더에 추가 (의미있는 이름)
- [ ] 이미지 파일 준비 및 assets 폴더에 추가 (의미있는 이름)
- [ ] 데이터 파일 생성 (`src/data/procedures/[시술명].ts`)
- [ ] 페이지 파일 생성 (`src/app/procedures/[시술명]/page.tsx`)
- [ ] procedures/page.tsx의 PROCEDURES 배열에 추가
- [ ] 빌드 테스트 (`npm run build`)
- [ ] 개발 서버에서 확인 (`npm run dev`)

---

## 🎯 참고

이 구조는 **데이터와 UI를 분리**하여:
- 데이터만 수정하면 페이지가 자동으로 업데이트됨
- 공통 컴포넌트 수정 시 모든 페이지에 반영됨
- 향후 CMS나 MD 파일로 쉽게 전환 가능

**기존 페이지를 참고하여 패턴을 따르면 됩니다!** ✨
