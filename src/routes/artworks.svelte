<script context="module">
	import Seo from '$lib/seo/Seo.svelte';

	import '../app.css';

	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;

	let artists = Array(9).fill(0);
</script>


<Seo title="Art" description={"this is all the artwork and artists"} />

<section>
	<p> Page about art</p>
	<div class="div__artists-grid">


		{#each artists as artist}
			<div class="div--image-tile">
				<img class="img__responsive" src="/img/1.png" alt="img" />
				<h3 class="p--art-title"> Title of Art</h3>
				<p> Artist's Name</p>
			</div>

		{/each}

	</div>	

</section>


<style>
	.div__artists-grid {
		display: grid;
		width: 100%;
		grid-template-columns: repeat(3, 1fr);
	}

	.div--image-tile {
		padding: 0.5rem;
	}

	.p--art-title {

	}
</style>
