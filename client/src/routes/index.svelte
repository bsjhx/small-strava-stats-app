<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Linkable from '$lib/Linkable.svelte';
</script>

<svelte:head>
	<title>Strava stats</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<Linkable link = 'http://www.strava.com/oauth/authorize?client_id=72239&response_type=code&redirect_uri=http://localhost/exchange_token&approval_prompt=force&scope=activity:read_all'>
		Authorize strava!
	</Linkable>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
