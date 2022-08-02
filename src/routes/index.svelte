<script context="module">
	export const prerender = true;
	import { base, assets } from '$app/paths';
	import Seo from '$lib/seo/Seo.svelte';

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

<main>
	<section>

		<Counter />
		<P5 {sketch} />
		<label>
			Width
			<input type="range" bind:value={width} min="100" max="1000" step="0.01" />
			{width}
		</label>
		
		<label>
			Height
			<input type="range" bind:value={height} min="100" max="1000" step="0.01" />
			{height}
		</label>
	</section>
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

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
</style>
