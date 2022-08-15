<script context="module">
	export const prerender = true;
	import { base, assets } from '$app/paths';
	import Seo from '$lib/seo/Seo.svelte';
	import SubsystemSketch from '$lib/sketches/SubsystemSketch.svelte';
  	import { onMount } from 'svelte'
	import '../app.css';

	let fullSite =true;
</script>

<Seo title="Home Page" />

<SubsystemSketch />

<main>
	<div id="title-container">
		<h2>The Computational Arts MA/MFA Degree Show</h2>
		<h1 id="main-title">(SUB)<br>SYSTEMS</h1>
		<h2>Opening Night Sept 1st 6pm - 9:30pm</h2>
		<h3>Sept 2nd 11am - 8pm</h3>
		<h3>Sept 3rd 11am - 8pm</h3>
		<h3>Sept 4th 11am - 6pm</h3>
	</div>

	{#if fullSite}
	<div class="footer_spacing"></div> 
	{/if}

	<!-- for the promo page -->
	{#if !fullSite}
	<div id="press-release">
		<p>
			As a storm moves past, it leaves in its wake droplets of water that can nourish, carve and bury the ground below. While its chemical undergoings sustain life as we know it, species morph and symbiosis automates again within renewed landscapes. This interplay of systems, geological, atmospheric and biological, gets iterated and entangled in technology. 
		</p>
		<p>
			The 2022 Goldsmiths MA/MFA Computational Arts programme invites you to SubSystems, an exhibition that highlights and explores the nuanced relationships that artists have with technology and new media in contemporary times. Artists in this exhibition trace the ways in which environments are remoulded as arrays of components, the remembering and anticipation time is reshaped by speculative computation, identities are formed in the linkage of users and digital devices, and power structures and biases are reproduced in the sedimentation of datasets. Operating as both discrete modules but also a chorus of interconnected components, their works exist as systems within systems, subsystems of information, matter and behaviour.
		</p>
		<p>
			Featuring more than 70 ground-breaking immersive performances, interactive installations, virtual and augmented realities and experimental narratives, the interdisciplinary nature of SubSystems begin to suggest how physical and creative computation has shaped the world we live in, and offers a glimpse into the future of the ever-evolving state of computational arts.
		</p>
	</div>
	{/if}

</main>


<style>
	

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		/* margin-top: 100px; */
		box-sizing: border-box;
		background-color: rgba(255, 255, 255, 0.5);
	}

	h1{
		font-family: NeutrafaceSlabDisplay;
		font-weight: 300;
		
	}
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	#title-container{
		width: 100%;
		align-items: left;
		padding: 100px 0px 20px 10px;
	}

	#main-title {
		/* placeholder */
		/* font: "NeutrafaceSlabDisplay-Light"; */

		font-size: 60px;
		text-align: left;

	}

	p {
		margin: 5px;
		padding-top: 10px;
	}
</style>
