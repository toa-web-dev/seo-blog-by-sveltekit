// src/routes/blog/+page.ts
import { getPosts, getCategories } from '$lib/server/postList'
import type { PageServerLoad } from './$types'

export const prerender = true

export const load: PageServerLoad = async () => {
	const [posts, categories] = await Promise.all([
		getPosts(),
		getCategories()
	])

	return {
		posts,
		categories
	}
}