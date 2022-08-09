<script context="module">
	export const prerender = true;
	import { base, assets } from '$app/paths';
	import Seo from '$lib/seo/Seo.svelte';
	import SubsystemSketch from '$lib/sketches/SubsystemSketch.svelte';
  import { onMount } from 'svelte'

	import '../app.css';
</script>

<Seo title="Home Page" />

<SubsystemSketch />
<main>
	<div id="title-container">
		<h2>The Computational Arts MA/MFA Degree Show</h2>
		<h1 id="main-title">(SUB)<br>SYSTEMS</h1>
		<h2>1st-4th September 2022</h2>
	</div>
	<div class="footer_spacing"></div> 
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
		box-sizing: border-box;
	}

	h1{
		font-family: "Neutraface Slab Display TT Light";
		font-weight: lighter;
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
		padding: 500px 0px 50px 100px;
	}

	#main-title {
		/* placeholder */
		/* font: "NeutrafaceSlabDisplay-Light"; */

		font-size: 60px;
		text-align: left;

	}
</style>
