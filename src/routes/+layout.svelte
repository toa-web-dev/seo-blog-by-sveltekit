<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<nav>
		<a href="/">홈</a>
		<a href="/blog">블로그</a>
		<a href="/about">소개</a>
	</nav>
</header>

<main>
	{@render children()}
</main>

<footer>
	<p>© 2025 lifecrawling</p>
</footer>
