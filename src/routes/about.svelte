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

	<h4>The Computational Arts MA/MFA Degree Show</h4>
	<h2>
		<br>How can divergent and alien sub-systems be assembled into coherent structures? This theme tackles the heterogeneity of work within the show head-on (treating them like linked organs forming an organism). It traces the patterns in the way digital worlds emerge from disparate functions and classes, the way diverse programs can be connected into elegant pipelines, the way machine components and sculptural elements can coherently terraform a space, the way user and computer can be linked into a high-functioning cyborg. <br><br>Zooming out, it addresses how the cohort’s varied practices are synthesised to produce the show. Possible References: Lialina on digital worlds produced by discordant users, Haraway on cyborgs and symbiotic systems, D&G ATP and Anti-Oedipus for machine systems + rhizomatics, Prigogine + Stengers on order out of chaos
	</h2>
</div>

<hr/>

<div class="opening_wrap">
	<h3> Opening Hours</h3>
	<p> 1st - 4th September 2020</p>
</div>
<div class="opening_wrap">
	<span> 1st Thu (Opening Night)</span>
	<span>6 pm - 9.30 pm</span>
	<hr/>
	<span> 2nd Fri - 3rd Sat</span>
	<span> 11 am - 8 pm</span>
	<hr/>
	<span> 4th Sun</span>
	<span> 11 am - 6 pm</span>

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
		/* width: 100%; */
		margin: 0rem;
		padding: 1rem;
	}

	@media (min-width:720px) {
		.content_wrap {
			padding: 2rem;
		}
	}
</style>
