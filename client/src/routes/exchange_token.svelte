<script lang="ts">
	import { page } from '$app/stores';
	const code = $page.url.searchParams.get('code');
</script>

<svelte:head>
	<title>Strava stats</title>
	<meta name="description" content="Strava authorized" />
</svelte:head>

<div class="content">
	{#if code}
		<h1>You did it! Strava is authorized. Now just let us sync all your activities:</h1>
		Code: {code}
		<button>Start sync</button>
	{:else}
		<h1>App is not authorized... Sorry about that</h1>
	{/if}
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
