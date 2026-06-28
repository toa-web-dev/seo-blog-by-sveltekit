// src/routes/blog/[category]/[slug]/+page.ts
import type { PageLoad } from './$types'

export const prerender = true

export const load: PageLoad = async ({ params }) => {
	const { category, slug } = params

	// 마크다운 파일 동적 import
	const post = await import(`../../../../posts/${category}/${slug}.md`)

	return {
		content: post.default,
		metadata: post.metadata
	}
}