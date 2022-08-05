<script context="module">
	export const prerender = true;
	import { base, assets } from '$app/paths';
	import Seo from '$lib/seo/Seo.svelte';
	import EllipseSketch from '$lib/sketches/EllipseSketch.svelte';

	import '../app.css';
	import P5 from 'p5-svelte';
	import Counter from '$lib/Counter.svelte';

	let width = 55;
	let height = 55;

	const sketch = (p5) => {
		p5.setup = () => {
			p5.createCanvas(400, 400);
		};

		p5.draw = () => {
			p5.ellipse(p5.width / 2, p5.height / 2, width, height);
		};
	};
</script>


<Seo title="Home Page" />

<EllipseSketch />

<!-- spacer -->
<div id="spacer"></div>

<h2>The Computational Arts MA/MFA Degree Show</h2>

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

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	#spacer {
		width: 100%;
		height: 20%;
	}
</style>
