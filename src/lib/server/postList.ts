// src/lib/server/postList.ts

export type Post = {
	slug: string
	category: string
	title: string
	description: string
	date: string
	tags: string[]
	published: boolean
}

// 전체 포스트 목록
export async function getPosts(): Promise<Post[]> {
	const files = import.meta.glob('../../posts/**/*.md', { eager: true })

	const posts = Object.entries(files)
		.map(([path, file]: [string, any]) => {
			const parts = path.split('/')
			const slug = parts[parts.length - 1].replace('.md', '')
			const category = parts[parts.length - 2]

			return {
				slug,
				category,
				...file.metadata
			} as Post
		})
		.filter((post) => post.published)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

	return posts
}

// 카테고리 목록 (중복 제거)
export async function getCategories(): Promise<string[]> {
	const posts = await getPosts()
	return [...new Set(posts.map((p) => p.category))]
}

// 카테고리별 포스트 목록
export async function getPostsByCategory(category: string): Promise<Post[]> {
	const posts = await getPosts()
	return posts.filter((p) => p.category === category)
}

// 태그별 포스트 목록
export async function getPostsByTag(tag: string): Promise<Post[]> {
	const posts = await getPosts()
	return posts.filter((p) => p.tags.includes(tag))
}