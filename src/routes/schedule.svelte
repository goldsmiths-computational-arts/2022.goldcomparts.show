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
	<!-- <div class="header_spacing"></div>  -->

 <!-- / -->

		<!-- {#each artists as artist} -->
			<!-- <a  class="link_tile" sveltekit:prefetch href="{base}/artist/xxx">
				<div class="image_tile">
					<img class="img_responsive" src="/img/1.png" alt="img" />
					<h3 class="art_title"> Title of Art</h3>
					<p> Artist's Name</p>
				</div>
			</a> -->
		<!-- {/each} -->

			<!-- if block to filter results -->
			<!-- each block to display those results -->
		<div class="schedule">
			<div class="day">
				<div class="date-container">
					<h3 class="date">Thu 1st September</h3>
				</div>
				<div class="artists_grid">
					<!-- each -->
					<div class="content-container">
						<h3 class="time">18:00</h3>
						<div class="content">
							<div class="text">
								<h3>Title</h3>
								<p>Audiovisual interactive installation that simulates the timing of a clock. It varies in rhythm, graphics and acoustics in relation to the movement of the audience in space.</p>
								<p>Artist's Name</p>
							</div>
							<img class="img_responsive" src="/img/1.png" alt="img" />	
						</div>
					</div>
					<!-- end each -->
				</div>
			</div>
			<div class="day">
				<div class="date-container">
					<h3 class="date">Fri 2nd September</h3>
				</div>
			</div>
		</div>

	<div class="footer_spacing"></div> 

</section>



<style>
	.schedule {
		width: 90%;
		margin: 0 5%;
		padding-top: 10%;
	}
	
	.content {
		display: flex;
		flex-direction: column;
	}

	.day {
		display: flex;
		flex-direction: column;
	}

	.date-container {
		/* padding: 5px; */
	}

	.artists_grid {
		display: grid;
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
		order: 0;
	}

	.text {
		order: 1;
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

		.content {
			flex-direction: row;
		}

		.img_responsive {
			order: 1;
		}
		
		.text {
			order: 0;
		}
	
	}

	@media (min-width: 1000px) {
		.artists_grid {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			column-gap: 0.5rem;
		}

		.day {
			flex-direction: row;
		}

		.image_tile {
			padding: 0.5rem;
		}
	}
</style>
