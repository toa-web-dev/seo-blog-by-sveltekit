# seo-blog-by-sveltekit

SEO 마케터 관점에서 개발을 기록하는 커리어 블로그입니다.
SEO × 개발 교차 콘텐츠를 중심으로, 개념형·실무형 포스트를 함께 다룹니다.

---

## 기술 스택

| 항목 | 결정 | 비고 |
|---|---|---|
| 프레임워크 | SvelteKit | SSG 기본, 필요 시 SSR 혼용 |
| 언어 | TypeScript | 점진적 적용 |
| CSS | CSS Modules | 컴포넌트 단위 스코프 |
| 콘텐츠 | mdsvex | 마크다운 + Svelte 컴포넌트 |
| 저장소 | GitHub | 코드 + 이미지 관리 |
| 배포 | Cloudflare Pages | 대역폭 무제한, R2 연동 예정 |
| 이미지 | static/ 폴더 | 추후 Cloudflare R2로 이전 예정 |
| 도메인 | workers.dev | 추후 커스텀 도메인 연결 예정 |

---

# 사이트맵

## 페이지 트랙 (계층형, 고정)

```
/                                    ← 홈 (블로그 허브)
/about                               ← 저자 소개 + E-E-A-T

/blog                                ← 블로그 메인 허브
├── /blog/category/seo               ← SEO 카테고리 허브
├── /blog/category/frontend          ← 프론트엔드 카테고리 허브
├── /blog/category/devlog            ← 데브로그 카테고리 허브
├── /blog/tag/[name]                 ← 태그 허브
└── /blog/series/[name]              ← 시리즈 허브
```

## 포스트 트랙 (슬러그)

```
/blog/seo/[slug]                     ← SEO 카테고리 포스트
/blog/frontend/[slug]                ← 프론트엔드 카테고리 포스트
/blog/devlog/[slug]                  ← 데브로그 카테고리 포스트
```

## sitemap

```
/sitemap.xml
├── sitemap-pages.xml                ← 페이지 트랙 (변경 빈도 낮음)
└── sitemap-posts.xml                ← 포스트 트랙 (변경 빈도 높음)
```

---

## 색인 규칙

```
/                        항상 색인
/about                   항상 색인
/blog                    항상 색인
/blog/category/[name]    항상 색인, 설명 텍스트 필수
/blog/tag/[name]         포스트 3개 미만 noindex
/blog/series/[name]      항상 색인, 순서 + 소개 필수
/blog/[category]/[slug]  항상 색인
```


---

## 브랜치 전략

```
main        운영 배포 (Cloudflare Pages Production)
develop     개발 통합 (Cloudflare Pages Preview)
feature/*   기능별 작업 브랜치
```

**머지 규칙**

- `feature/*` → `develop` : Squash merge
- `develop` → `main` : Merge commit

---

## 콘텐츠 전략

### 독자

- 채용 담당자
- 동료 개발자
- SEO 마케터

### 포스트 유형

| 유형 | 역할 | 주력 여부 |
|---|---|---|
| SEO × 개발 교차형 | 블로그 차별점, 두 분야가 만나는 글 | ✅ 주력 |
| 개념 이해형 | 원리 설명, 검색 유입 | 보조 |
| 실무형 | 삽질 기록, 튜토리얼 | 보조 |

### 카테고리

| 카테고리 | 설명 |
|---|---|
| `seo` | SEO 개념, 기법, 실험 |
| `frontend` | HTML, CSS, JS, 프레임워크 |
| `devlog` | 삽질 기록, 프로젝트 후기 |

### 태그 규칙

- 형식: 소문자 + 하이픈 (`canonical-url`)
- 언어: 영어만
- 중복 방지: 유사 태그는 대표 태그 하나로 통일, 나머지 canonical 처리
- noindex 기준: 포스트 3개 미만 태그

### 포스트 간 관계 유형

| 유형 | 의미 |
|---|---|
| `related` | 같은 맥락, 병렬 관계 |
| `prerequisite` | 이 글 먼저 읽어야 함 |
| `deepdive` | 이 글의 심화 버전 |

---

## URL 설계 원칙

- 포스트 URL에 카테고리 포함: `/blog/[category]/[slug]`
- 분류 정보는 URL 외에 내부링크 + 구조화 데이터 + Breadcrumb으로 전달
- 카테고리 변경 시 경로 redirect로 일괄 대응

---

## SEO 설계

- 구조화 데이터: `Article`, `BreadcrumbList`, `TechArticle`
- 메타태그: 포스트별 title, description, OG, Twitter Card
- sitemap 분리: `sitemap-pages.xml` / `sitemap-posts.xml`
- 태그 허브 페이지: 독립 랜딩 페이지로 운영 (설명 텍스트 + 연관 태그 링크)
- 허브앤스포크 모델 적용

---

## 이미지 경로 설정

이미지 스토리지를 나중에 교체할 수 있도록 환경변수로 추상화합니다.

```env
# .env
PUBLIC_IMAGE_BASE_URL=
# 추후 R2 이전 시
# PUBLIC_IMAGE_BASE_URL=https://cdn.yourdomain.com
```