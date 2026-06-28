<!-- src/routes/blog/+page.svelte -->
<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<section class="blog-hero">
	<h1>블로그</h1>
	<p>SEO와 개발이 교차하는 지점을 기록합니다.</p>
</section>

<section class="categories">
	<h2>카테고리</h2>
	<ul>
		{#each data.categories as category}
			<li>
				<a href="/blog/category/{category}">{category}</a>
			</li>
		{/each}
	</ul>
</section>

<section class="post-list">
	<h2>전체 포스트</h2>
	<ul>
		{#each data.posts as post}
			<li>
				<article>
					<a href="/blog/{post.category}/{post.slug}" rel="noopener noreferrer">
						<h3>{post.title}</h3>
					</a>
					<a href="/blog/{post.category}" rel="noopener noreferrer">
						카테고리: {post.category}
					</a>
					<p>요약: {post.description}</p>
					<p>날짜:<time datetime={post.date}>{post.date}</time></p>

					<!-- 태그는 a태그 밖으로 -->
					tags:
					<ul class="tags">
						{#each post.tags as tag}
							<li><a href="/blog/tag/{tag}">{tag}</a></li>
						{/each}
					</ul>
				</article>
			</li>
		{/each}
	</ul>
</section>
