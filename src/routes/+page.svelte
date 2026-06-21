<!-- src/routes/+page.svelte -->

<section class="hero">
	<h1>SEO와 개발이 만나는 곳</h1>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua.
	</p>
	<a href="/blog">블로그 보기</a>
</section>

<section class="categories">
	<h2>카테고리</h2>
	<ul>
		<li>
			<a href="/blog/category/seo">
				<h3>SEO</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			</a>
		</li>
		<li>
			<a href="/blog/category/frontend">
				<h3>Frontend</h3>
				<p>Sed do eiusmod tempor incididunt ut labore et dolore.</p>
			</a>
		</li>
		<li>
			<a href="/blog/category/devlog">
				<h3>Devlog</h3>
				<p>Ut enim ad minim veniam, quis nostrud exercitation.</p>
			</a>
		</li>
	</ul>
</section>

<section class="recent-posts">
	<h2>최근 포스트</h2>
	<ul>
		<li>
			<a href="/blog/seo/lorem-ipsum-post-1">
				<span class="category">SEO</span>
				<h3>Lorem ipsum dolor sit amet</h3>
				<p>2025-01-15</p>
			</a>
		</li>
		<li>
			<a href="/blog/frontend/lorem-ipsum-post-2">
				<span class="category">Frontend</span>
				<h3>Consectetur adipiscing elit sed do</h3>
				<p>2025-01-10</p>
			</a>
		</li>
		<li>
			<a href="/blog/devlog/lorem-ipsum-post-3">
				<span class="category">Devlog</span>
				<h3>Eiusmod tempor incididunt ut labore</h3>
				<p>2025-01-05</p>
			</a>
		</li>
	</ul>
</section>