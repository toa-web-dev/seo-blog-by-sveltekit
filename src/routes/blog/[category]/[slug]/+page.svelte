<!-- src/routes/blog/[category]/[slug]/+page.svelte -->
<script lang="ts">
	import type { PageData } from './$types'

	let { data }: { data: PageData } = $props()

	const { content: PostContent, metadata } = data
</script>

<svelte:head>
	<title>{metadata.title}</title>
	<meta name="description" content={metadata.description} />
</svelte:head>

<article>
	<header>
		<span class="category">{metadata.category}</span>
		<h1>{metadata.title}</h1>
		<time datetime={metadata.date}>{metadata.date}</time>
		<ul class="tags">
			{#each metadata.tags as tag}
				<li><a href="/blog/tag/{tag}">{tag}</a></li>
			{/each}
		</ul>
	</header>

	<div class="content">
		<PostContent />
	</div>

	{#if metadata.related?.length}
		<section class="related">
			<h2>연관 포스트</h2>
			<ul>
				{#each metadata.related as slug}
					<li><a href="/blog/{metadata.category}/{slug}">{slug}</a></li>
				{/each}
			</ul>
		</section>
	{/if}
</article>