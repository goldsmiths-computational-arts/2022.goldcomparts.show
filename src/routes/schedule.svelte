<script context="module">
	import Seo from '$lib/seo/Seo.svelte';
	import { base, assets } from '$app/paths';

	import '../app.css';

	import { browser, dev } from '$app/env';

	import Schedule from '$lib/data/schedule.tsv';

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

	let schedule = Schedule;

</script>

<Seo title="Schedule" />

<section>
			<!-- if block to filter results -->
			<!-- each block to display those results -->
		<div class="schedule">
			<div class="day">
				<div class="date-container">
					<h3 class="date">Thu 1st September</h3>
				</div>
				<div class="artists_grid">
					{#each schedule as performance}
					{#if performance.Day == 1}
					<div class="content-container">
						<h3 class="time">{performance.Time}</h3>
						<div class="content">
							<div class="text">
								<h3>{performance.Title}</h3>
								<p>{performance.Description}</p>
								<p>{performance.Name}</p>
							</div>
							<img class="img_responsive" src="/img/1.png" alt="img" />	
						</div>
					</div>
					{/if}
					{/each}
				</div>
			</div>
			<div class="day">
				<div class="date-container">
					<h3 class="date">Fri 2nd September</h3>
				</div>
				<div class="artists_grid">
					{#each schedule as performance}
					{#if performance.Day == 2}
					<div class="content-container">
						<h3 class="time">{performance.Time}</h3>
						<div class="content">
							<div class="text">
								<h3>{performance.Title}</h3>
								<p>{performance.Description}</p>
								<p>{performance.Name}</p>
							</div>
							<img class="img_responsive" src="/img/1.png" alt="img" />	
						</div>
					</div>
					{/if}
					{/each}
				</div>
			</div>
			<div class="day">
				<div class="date-container">
					<h3 class="date">Sat, 3rd September</h3>
				</div>
				<div class="artists_grid">
					{#each schedule as performance}
					{#if performance.Day == 3}
					<div class="content-container">
						<h3 class="time">{performance.Time}</h3>
						<div class="content">
							<div class="text">
								<h3>{performance.Title}</h3>
								<p>{performance.Description}</p>
								<p>{performance.Name}</p>
							</div>
							<img class="img_responsive" src="/img/1.png" alt="img" />	
						</div>
					</div>
					{/if}
					{/each}
				</div>
			</div>
			<div class="day">
				<div class="date-container">
					<h3 class="date">Sunday, 4th September</h3>
				</div>
				<div class="artists_grid">
					{#each schedule as performance}
					{#if performance.Day == 4}
					<div class="content-container">
						<h3 class="time">{performance.Time}</h3>
						<div class="content">
							<div class="text">
								<h3>{performance.Title}</h3>
								<p>{performance.Description}</p>
								<p>{performance.Name}</p>
							</div>
							<img class="img_responsive" src="/img/1.png" alt="img" />	
						</div>
					</div>
					{/if}
					{/each}
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

	.artists_grid {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		row-gap: 2rem;	
		padding-top: 5%;
	}

	.link_tile {
		text-decoration: none;
	}

	.img_responsive{
		width: 100%;
		height: 200px;
		object-fit: cover;
		order: 0;
		padding-top: 2%;
	}

	.text {
		order: 1;
	}

	.text h3, p {
		padding-top: 2%;
	}

	@media (min-width: 800px) {
		.artists_grid {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			column-gap: 0.5rem;
		}

		.content {
			flex-direction: row;
		}

		.date-container {
			flex-basis: 50%;
		}

		.img_responsive {
			order: 1;
		}
		
		.text {
			order: 0;
			flex-basis: 100%;
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
