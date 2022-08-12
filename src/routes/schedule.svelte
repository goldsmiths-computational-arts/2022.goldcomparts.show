<script context="module">
	import Seo from '$lib/seo/Seo.svelte';
	import { base, assets } from '$app/paths';

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
	let artists = Array(5).fill(0);

</script>

<Seo title="Schedule" />

<section>
	<!-- Under navbar spacing  -->
	<div class="header_spacing"></div> 
<!-- 
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

	</div>	 -->
	<div class="footer_spacing"></div> 

</section>



<style>

	.artists_grid {
		display: grid;
		width: 90%;
		grid-template-columns: repeat(1, 1fr);
		row-gap: 2rem;	
		margin: 0 5%;
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
			grid-template-columns: repeat(2, 1fr);
			column-gap: 0.5rem;
		}
		.image_tile {
			padding: 0.5rem;
		}
	
	}

	@media (min-width: 1000px) {
		.artists_grid {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			column-gap: 0.5rem;
		}
		.image_tile {
			padding: 0.5rem;
		}
	}
</style>
