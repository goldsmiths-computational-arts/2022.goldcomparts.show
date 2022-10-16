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
</script>


<Seo title="schedule" />
<div>
	<!-- Under navbar spacing  -->
	<div class="header_spacing"></div> 
		<div class="container">
		<h2> Schedule Page 1</h2>
		<img class="img_responsive" src="/img/schedule/Performances_schedule-01.png" alt="schedule and timings of performance pieces for the computational arts exhibit" />

		<h2> Schedule Page 2</h2>
		<img class="img_responsive" src="/img/schedule/Performances_schedule-02.png" alt="schedule and timings of performance pieces for the computational arts exhibit" />

		<h2> Schedule Page 3</h2>
		<img class="img_responsive" src="/img/schedule/Performances_schedule-03.png" alt="schedule and timings of performance pieces for the computational arts exhibit" />
		
		<div class="footer_spacing"></div> 
	</div>


</div>


<style>
	.container{
		display: block;
		width: 80%;
		margin: 0 10%;
	}
	.img_responsive{
		width: 100%;
		margin: 2rem 0;
	}
</style>
