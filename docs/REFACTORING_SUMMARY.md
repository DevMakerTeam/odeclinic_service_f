# 리팩토링 요약

프로젝트 구조와 파일명을 정리하여 가독성과 유지보수성을 향상시켰습니다.

## 📁 컴포넌트 구조 변경

### Before

```
src/components/
├── ClientLayout.tsx
├── figma/
│   └── ImageWithFallback.tsx
├── LanguageSelector.tsx
├── shared/
└── ui/
```

### After

```
src/components/
├── layout/                  # 레이아웃 컴포넌트
│   └── ClientLayout.tsx
├── common/                  # 공통 유틸리티 컴포넌트
│   └── ImageWithFallback.tsx
├── LanguageSelector.tsx     # 언어 선택기
├── shared/                  # 공유 비즈니스 컴포넌트
│   ├── RelatedPosts.tsx
│   ├── ReservationCTA.tsx
│   └── WhyChooseUs.tsx
└── ui/                      # shadcn/ui 컴포넌트
    └── ...
```

### 변경 사유

- `figma/` 폴더명이 의미가 불분명함
- `ImageWithFallback`은 Figma와 무관한 공통 유틸리티 컴포넌트
- `ClientLayout`은 레이아웃 관련 컴포넌트로 별도 분류

---

## 🖼️ 에셋 파일명 변경

### 소셜 아이콘 & 로고

| Before (해시명)    | After (의미있는 이름)    | 용도             |
| ------------------ | ------------------------ | ---------------- |
| 4974275f...8b5.png | **logo.png**             | ODE CLINIC 로고  |
| 1b02bbd5...e81.png | **social-instagram.png** | Instagram 아이콘 |
| f1290178...fa7.png | **social-youtube.png**   | YouTube 아이콘   |
| 67964a52...ff6.png | **social-naver.png**     | Naver 아이콘     |
| b551b51b...d91.png | **social-kakao.png**     | Kakao 아이콘     |

### 국기 아이콘

| Before             | After              | 용도      |
| ------------------ | ------------------ | --------- |
| bd7c1983...566.png | **flag-hk.png**    | 홍콩 국기 |
| b5b2c8d9...11b.png | **flag-korea.png** | 한국 국기 |
| e369d370...d5e.png | **flag-china.png** | 중국 국기 |

### 시술 페이지 - Hero 이미지

| Before             | After                 | 용도                   |
| ------------------ | --------------------- | ---------------------- |
| 62ef512f...76a.png | **hilowave-hero.png** | 힐로웨이브 히어로 배너 |
| ebe200b4...a69.png | **juvelook-hero.png** | 쥬베룩볼륨 히어로 배너 |

### 시술 페이지 - Before/After 이미지

| Before             | After                        | 용도            |
| ------------------ | ---------------------------- | --------------- |
| 70c60886...21a.png | **hilowave-bna-before1.png** | 힐로웨이브 전 1 |
| 4e60aa3d...976.png | **hilowave-bna-after1.png**  | 힐로웨이브 후 1 |
| 687807bd...647.png | **hilowave-bna-before2.png** | 힐로웨이브 전 2 |
| ef68deb2...acd.png | **hilowave-bna-after2.png**  | 힐로웨이브 후 2 |
| 7c7ee876...156.png | **juvelook-before1.png**     | 쥬베룩 전 1     |
| 5e9d539c...6f6.png | **juvelook-after1.png**      | 쥬베룩 후 1     |
| c20136bb...3cb.png | **juvelook-before2.png**     | 쥬베룩 전 2     |
| 8f776aaf...e45.png | **juvelook-after2.png**      | 쥬베룩 후 2     |
| 74316996...d78.png | **juvelook-before3.png**     | 쥬베룩 전 3     |
| 15de8bce...f3a.png | **juvelook-after3.png**      | 쥬베룩 후 3     |

### 시술 페이지 - 차트 & 정보 이미지

| Before             | After                            | 용도                      |
| ------------------ | -------------------------------- | ------------------------- |
| 458d453a...75c.png | **hilowave-vs-filler-chart.png** | 힐로웨이브 vs 필러 비교표 |
| 79e4b669...275.png | **treatment-areas.png**          | 시술 가능 부위 안내       |
| b2ab6a84...ebb.png | **product-comparison-chart.png** | 제품 비교 차트            |
| fce21f87...2e3.png | **juvelook-effect-chart.png**    | 쥬베룩 효과 차트          |
| 88da8355...b41.png | **juvelook-collagen-chart.png**  | 쥬베룩 콜라겐 차트        |

### 시술 페이지 - 기법 & 장비 이미지

| Before             | After                       | 용도                 |
| ------------------ | --------------------------- | -------------------- |
| 2f8614f6...652.png | **vortex-mixer.png**        | 볼텍스믹서 수화 과정 |
| 80f1a9bc...db9.png | **one-bottle-usage.png**    | 한 병 단위 사용      |
| 8c723bfb...3f7.png | **injection-technique.png** | 주입 테크닉          |

### 선택 이유 이미지

| Before             | After                       | 용도                   |
| ------------------ | --------------------------- | ---------------------- |
| 0a72e601...96e.png | **reason-consultation.png** | 이유 1 - 상담 시스템   |
| 3681f2c6...649.png | **reason-comparison.png**   | 이유 2 - 비교 시스템   |
| 6bb234a6...d51.png | **reason-experience.png**   | 이유 3 - 경험과 케이스 |

---

## 🔄 Import 경로 업데이트

### 컴포넌트 Import 변경

```typescript
// Before
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import ClientLayout from '@/components/ClientLayout';

// After
import { ImageWithFallback } from '@/components/common/ImageWithFallback';
import ClientLayout from '@/components/layout/ClientLayout';
```

### 에셋 Import 변경 예시

```typescript
// Before
import logo from '@/assets/4974275f4d0d055a2540995037f5efc4d0e158b5.png';
import instagramIcon from '@/assets/1b02bbd5303e04559d8335b252aa7364d19e0e81.png';
import heroBg from '@/assets/62ef512f6e6978d80bd4d50135e932454c10a76a.png';

// After
import logo from '@/assets/logo.png';
import instagramIcon from '@/assets/social-instagram.png';
import hiloWaveHero from '@/assets/hilowave-hero.png';
```

---

## 📊 영향받은 파일

### 수정된 파일 (7개)

1. `src/app/layout.tsx` - ClientLayout import 경로
2. `src/components/layout/ClientLayout.tsx` - 소셜/로고 이미지 경로
3. `src/components/LanguageSelector.tsx` - 국기 이미지 경로
4. `src/components/common/ImageWithFallback.tsx` - StaticImageData 타입 지원 추가
5. `src/components/shared/RelatedPosts.tsx` - ImageWithFallback import 경로
6. `src/components/shared/WhyChooseUs.tsx` - ImageWithFallback import 경로 + 타입
7. `src/app/procedures/detail/[id]/page.tsx` - 모든 시술 이미지 경로

### 이동/삭제된 폴더

- ✅ `src/components/figma/` → 삭제됨
- ✅ `src/components/common/` → 생성됨 (공통 컴포넌트)
- ✅ `src/components/layout/` → 생성됨 (레이아웃 컴포넌트)

---

## 🎯 장점

### 1. **가독성 향상**

- 이미지 이름만 봐도 용도를 즉시 파악 가능
- 예: `logo.png`, `social-instagram.png`, `hilowave-hero.png`

### 2. **유지보수 개선**

- 컴포넌트가 목적별로 분류됨
- `common/`, `layout/`, `shared/`, `ui/` 폴더로 명확한 역할 구분

### 3. **협업 효율**

- 새 팀원이 프로젝트 구조를 빠르게 이해 가능
- 이미지 수정/교체 시 파일을 쉽게 찾을 수 있음

### 4. **네이밍 컨벤션**

- **소셜 아이콘**: `social-{platform}.png`
- **국기 아이콘**: `flag-{country}.png`
- **히어로 이미지**: `{procedure}-hero.png`
- **전후 사진**: `{procedure}-before{n}.png`, `{procedure}-after{n}.png`
- **차트**: `{procedure}-{type}-chart.png`
- **기법**: `{technique-name}.png`
- **이유**: `reason-{category}.png`

---

## ✅ 빌드 검증

```bash
✓ Compiled successfully
✓ Generating static pages (11/11)
✓ Build completed - 0 errors

Route (app)                         Size    First Load JS
└── /procedures/detail/[id]        19.7 kB  173 kB
```

모든 이미지가 정상적으로 로드되고 빌드 오류가 없음을 확인했습니다.

---

## 📝 추가 개선 제안

### 1. 이미지 폴더 세분화 (선택사항)

현재는 모든 이미지가 `src/assets/`에 있지만, 더 세분화할 수 있습니다:

```
src/assets/
├── icons/          # 아이콘 (소셜, 국기 등)
│   ├── social/
│   └── flags/
├── procedures/     # 시술 관련 이미지
│   ├── hilowave/
│   └── juvelook/
├── charts/         # 차트/표
└── logos/          # 로고
```

### 2. 이미지 최적화

- WebP 형식 변환 (용량 감소)
- Next.js Image 컴포넌트 적극 활용
- Lazy loading 적용

---

## 🔍 변경 내역 요약

| 항목          | Before      | After            | 개수          |
| ------------- | ----------- | ---------------- | ------------- |
| 컴포넌트 폴더 | figma/      | common/, layout/ | 2개 추가      |
| 에셋 파일명   | 해시명      | 의미있는 이름    | 31개 변경     |
| Import 문     | 해시명 참조 | 명확한 이름 참조 | 7개 파일 수정 |
| 빌드 오류     | 0개         | 0개              | ✅            |

---

## 💡 네이밍 가이드라인

앞으로 새 이미지를 추가할 때는 다음 규칙을 따라주세요:

1. **소문자 사용** (kebab-case)
2. **목적을 명확히** (예: `procedure-name-hero.png`)
3. **카테고리 접두어** (예: `social-`, `flag-`, `reason-`)
4. **숫자 suffix** (예: `before1.png`, `before2.png`)

예시:

- ✅ `botox-hero.png`
- ✅ `lifting-before1.png`
- ✅ `social-facebook.png`
- ❌ `img123.png`
- ❌ `temp.png`
- ❌ `a1b2c3d4.png`
