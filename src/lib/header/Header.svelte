<script>
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
	import { base, assets } from '$app/paths';
</script>

<header>
	<div id="logo">
		<a sveltekit:prefetch href="{base}/">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav>

		<ul>
			<li class:active={$page.url.pathname === '/about'}>
				<a sveltekit:prefetch href="{base}/about">About</a>
			</li> 
			<li class:active={$page.url.pathname === '/artworks'}>
				<a sveltekit:prefetch href="{base}/artworks">Artworks</a>
			</li>
			<li class:active={$page.url.pathname === '/schedule'}>
				<a sveltekit:prefetch href="{base}/schedule">Schedule</a>
			</li>
			<li class:active={$page.url.pathname === '/floor-plan'}>
				<a sveltekit:prefetch href="{base}/floor-plan">Floor Plan</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	#logo {
		width: 3em;
		height: 3em;
	}

	#logo a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	#logo img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}


	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: transparent;
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		/* border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color); */
	}

	li.active {
		text-decoration: underline;

	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		/* text-decoration: none; */
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
