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
	<!-- Under navbar spacing  -->
<div class="header_spacing"></div> 

<div class="content_wrap">

	<p>The Computational Arts MA/MFA</p>
	<p>
		Shabby chic before they sold out humblebrag master cleanse try-hard vinyl salvia, etsy wayfarers distillery actually taiyaki. Hell of ennui small batch iceland asymmetrical affogato quinoa selvage. Vinyl pork belly ethical, hell of chambray bitters trust fund poutine cardigan everyday carry migas fanny pack. Helvetica polaroid master cleanse chillwave taxidermy raclette migas adaptogen woke put a bird on it. Cray you probably haven't heard of them hammock XOXO chartreuse.
	</p>
</div>

<hr/>

<div class="opening_wrap">
	<h3> Opening Hours</h3>
	<p> 1st - 4th September 2020</p>
</div>
<div class="opening_wrap">
	<p> 1st Thus (Opening Night)</p>
	<hr/>
	<p> 2nd Fri - 3rd Sat</p>
	<hr/>
	<p> 4th Sun</p>

</div>
<div class="footer_spacing"></div> 

<style>

	h3{
		margin: 1rem 0;
	}
	.opening_wrap{
		width: 50%;
		margin: 2rem;
	}
	.opening_wrap hr{
		margin: 0.5rem 0;
		padding: 0;
	}
	
	.content_wrap {
		width: 100%;
		margin: 2rem;
	}
</style>
