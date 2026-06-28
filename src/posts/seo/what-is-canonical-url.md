---
title: "canonical URL이란"
description: "중복 콘텐츠 문제를 해결하는 canonical 태그의 원리와 구현 방법"
date: "2025-01-15"
category: "seo"
tags: ["canonical", "technical-seo", "duplicate-content"]
related: ["what-is-structured-data"]
prerequisite: []
deepdive: ["canonical-implementation-sveltekit"]
published: true
---

## 왜 canonical이 필요한가

같은 내용의 페이지가 여러 URL로 접근 가능하면 구글은 어느 페이지를 색인해야 할지 모릅니다.

```
https://example.com/blog/seo/canonical
https://example.com/blog/seo/canonical?utm_source=twitter
https://example.com/blog/seo/canonical/
```

이 세 URL은 같은 페이지지만 구글 입장에서는 다른 페이지예요.

## canonical 태그란

```html
<link rel="canonical" href="https://example.com/blog/seo/canonical" />
```

구글에게 "이 페이지의 원본은 여기야"라고 알려주는 태그예요.

## SvelteKit에서 구현

```svelte
<svelte:head>
  <link rel="canonical" href="https://example.com/blog/seo/canonical" />
</svelte:head>
```

## 마치며

canonical 태그는 SEO의 기본이에요. 특히 UTM 파라미터가 붙은 URL이 많은 블로그에서 필수입니다.