<script context="module">
	


	import { browser, dev } from '$app/env';
	import { base, assets } from '$app/paths';
	import '../app.css';

	import Seo from '$lib/seo/Seo.svelte';
	import {DataManager} from '../lib/util/data-manager'
	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;

	const artists = DataManager.getArtistList();
	console.log('artists', artists)
</script>


<Seo title="Art" description={"this is all the artwork and artists"} />

<section>
	<div class="div__artists-grid">

		{#each artists as artist}
			<a  class="a--link-tile" sveltekit:prefetch href="{base}/artist/{artist.slug}">
				<div class="div--image-tile">
					<img class="img__responsive" src="/img/1.png" alt="img" />
					<h3 class="p--art-title">  {artist.title}</h3>
					<p> {artist.pref_name ? artist.pref_name : artist.name}</p>
				</div>
			</a>
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

	.a--link-tile {
		text-decoration: none;
	}
</style>
