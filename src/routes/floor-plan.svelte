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


<Seo title="Floor Plan" />
<div>
	<!-- Under navbar spacing  -->
	<div class="header_spacing"></div> 
		<div class="container">
		<h2> Ground Floor</h2>
		<img class="img_responsive" src="/img/2.png" alt="img" />

		<h2> First Floor</h2>
		<img class="img_responsive" src="/img/2.png" alt="img" />

		<h2> Second Floor</h2>
		<img class="img_responsive" src="/img/2.png" alt="img" />
		
		<h2> Last Floor</h2>
		<img class="img_responsive" src="/img/2.png" alt="img" />
		
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
