<!-- src/routes/blog/+page.svelte -->

<section class="blog-hero">
	<h1>블로그</h1>
	<p>SEO와 개발이 교차하는 지점을 기록합니다.</p>
</section>

<section class="category-filter">
	<ul>
		<li><a href="/blog">전체</a></li>
		<li><a href="/blog/category/seo">SEO</a></li>
		<li><a href="/blog/category/frontend">Frontend</a></li>
		<li><a href="/blog/category/devlog">Devlog</a></li>
	</ul>
</section>

<section class="post-list">
	<article>
		<a href="/blog/seo/lorem-ipsum-post-1">
			<span class="category">SEO</span>
			<h2>Lorem ipsum dolor sit amet consectetur</h2>
			<p>
				Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam quis nostrud exercitation.
			</p>
			<ul class="tags">
				<li>canonical</li>
				<li>structured-data</li>
			</ul>
			<time datetime="2025-01-15">2025-01-15</time>
		</a>
	</article>

	<article>
		<a href="/blog/frontend/lorem-ipsum-post-2">
			<span class="category">Frontend</span>
			<h2>Adipiscing elit sed do eiusmod tempor</h2>
			<p>
				Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud
				exercitation ullamco laboris.
			</p>
			<ul class="tags">
				<li>sveltekit</li>
				<li>performance</li>
			</ul>
			<time datetime="2025-01-10">2025-01-10</time>
		</a>
	</article>

	<article>
		<a href="/blog/devlog/lorem-ipsum-post-3">
			<span class="category">Devlog</span>
			<h2>Incididunt ut labore et dolore magna</h2>
			<p>
				Aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip
				ex ea commodo.
			</p>
			<ul class="tags">
				<li>troubleshooting</li>
				<li>til</li>
			</ul>
			<time datetime="2025-01-05">2025-01-05</time>
		</a>
	</article>
</section>