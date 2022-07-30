<script context="module">
	export const prerender = true;
	import { base, assets } from '$app/paths';
	import Header from '$lib/header/Header.svelte';
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


<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Header />

<main>
	<section>
		<h1>
			<span class="welcome">
				<picture>
					<source srcset="{base}/svelte-welcome.webp" type="image/webp" />
					<img src="{base}/svelte-welcome.png" alt="Welcome" />
				</picture>
			</span>

			to your new<br />SvelteKit app
		</h1>

		<h2>
			try editing <strong>src/routes/index.svelte</strong>
		</h2>

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

<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>

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

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
