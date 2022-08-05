<script context="module">
	import { browser, dev } from '$app/env';
	import '../app.css';

	import Seo from '$lib/seo/Seo.svelte';


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


<Seo title="About" description="About this app" />

<div class="content">
	<p>The Computational Arts MA/MFA</p>
	<p>
		Shabby chic before they sold out humblebrag master cleanse try-hard vinyl salvia, etsy wayfarers distillery actually taiyaki. Hell of ennui small batch iceland asymmetrical affogato quinoa selvage. Vinyl pork belly ethical, hell of chambray bitters trust fund poutine cardigan everyday carry migas fanny pack. Helvetica polaroid master cleanse chillwave taxidermy raclette migas adaptogen woke put a bird on it. Cray you probably haven't heard of them hammock XOXO chartreuse.
	</p>
	<hr class="hr--green" />
	<h3> Time</h3>
	<p> 1st - 4th September</p>

	<h3> Opening Night</h3>
	<p> 1st September</p>
</div>

<style>

	
	/* .content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	} */
</style>
