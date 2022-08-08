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
	<!-- Under navbar spacing  -->
	<div class="header_spacing"></div> 
	<div class="drop_down_menu">
		<p> Page about art</p>
	</div>
	<div class="artists_grid">

		{#each artists as artist}
			<a  class="link_tile" sveltekit:prefetch href="{base}/artist/xxx">
				<div class="image_tile">
					<img class="img_responsive" src="/img/1.png" alt="img" />
					<h3 class="art_title"> Title of Art</h3>
					<p> Artist's Name</p>
				</div>
			</a>
		{/each}

	</div>	
	<div class="footer_spacing"></div> 

</section>


<style>
	.drop_down_menu{
		width: 25%;
		text-align: center;
		border: 1px solid black;
		border-radius: 5px;
		margin: 1rem;
	}
	.artists_grid {
		display: grid;
		width: 100%;
		grid-template-columns: repeat(1, 1fr);
		row-gap: 2rem;
	}

	.link_tile {
		text-decoration: none;
	}

	.img_responsive{
		width: 100%;
		height: 200px;
		object-fit: cover;
	}

	@media (min-width: 800px) {
		.artists_grid {
			display: grid;
			width: 100%;
			grid-template-columns: repeat(2, 1fr);
			margin: 0 1rem;
			column-gap: 0.5rem;
		}
		.image_tile {
		padding: 0.5rem;
		}
	
	}

	@media (min-width: 1000px) {
		.artists_grid {
			display: grid;
			width: 100%;
			grid-template-columns: repeat(3, 1fr);
			margin: 0 1rem;
			column-gap: 0.5rem;
		}
		.image_tile {
			padding: 0.5rem;
		}
	}
</style>
