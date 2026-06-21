<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<style>
		.main-wrapper {
			display: flex;
			border: 1px solid steelblue;
		}
		.main-wrapper>aside{width: 10%; padding: 20px 30px;}
	</style>
</svelte:head>

<div class="main-wrapper">
	<aside>
		이렇게 /blog/ 이하 경로의 페이지만에 스타일과 레이아웃을 다른페이지와는 독립적으로 설정가능
	</aside>
	<main>
		{@render children()}
	</main>
</div>
