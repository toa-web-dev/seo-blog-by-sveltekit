---
title: "SvelteKit으로 블로그 만들기"
description: "SvelteKit과 mdsvex를 활용해 개발 블로그를 구축하는 과정을 기록합니다"
date: "2025-02-01"
category: "frontend"
tags: ["sveltekit", "mdsvex", "blog"]
related: ["what-is-canonical-url"]
prerequisite: []
deepdive: []
published: true
---

## 왜 SvelteKit인가

Next.js도 좋지만 상태관리가 직관적이고 번들 크기가 작아서 SvelteKit을 선택했어요.

```svelte
<!-- 상태관리가 이렇게 단순해요 -->
<script>
  let count = 0
</script>

<button onclick={() => count++}>{count}</button>
```

## mdsvex 설정

마크다운 안에 Svelte 컴포넌트를 쓸 수 있어요.

```ts
import { mdsvex } from 'mdsvex'

sveltekit({
  preprocess: [mdsvex({ extensions: ['.md'] })],
  extensions: ['.svelte', '.md']
})
```

## 파일 구조

```
src/
├── posts/
│   └── frontend/
│       └── sveltekit-blog.md
└── routes/
    └── blog/
        └── [category]/
            └── [slug]/
                └── +page.svelte
```

## 마치며

SvelteKit은 블로그 구축에 최적화돼 있어요. 파일 기반 라우팅 덕분에 폴더 구조만 잡으면 라우팅이 자동으로 돼요.