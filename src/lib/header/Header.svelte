<script>
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
	import { base, assets } from '$app/paths';

  // Show mobile icon and display menu
  let showMobileMenu = false;
</script>

<header>
<<<<<<< HEAD
	<div id="logo">
		<a sveltekit:prefetch href="{base}/">
			SUB (Systems)
		</a>
	</div>
=======
>>>>>>> 4968c68 (css work, home, about, artist, and artists page)

	<nav>
		<!-- <div id="logo">
			<a sveltekit:prefetch href="{base}/">
				(SUB)SYSTEMS
			</a>
		</div> -->
	

		<ul>
			<li id = "logo" class:active={$page.url.pathname === '/home'}>
				<a sveltekit:prefetch href="{base}/">(SUB)SYSTEMS</a>
			</li> 
			<li class:active={$page.url.pathname === '/floor-plan'}>
				<a sveltekit:prefetch href="{base}/floor-plan">Floor Plan</a>
			</li>
			<li class:active={$page.url.pathname === '/schedule'}>
				<a sveltekit:prefetch href="{base}/schedule">Schedule</a>
			</li>
			<li class:active={$page.url.pathname === '/artworks'}>
				<a sveltekit:prefetch href="{base}/artworks">Artworks</a>
			</li>
			<li class:active={$page.url.pathname === '/about'}>
				<a sveltekit:prefetch href="{base}/about">About</a>
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
		float:left;
	}

	#logo a {
<<<<<<< HEAD
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		text-decoration: none;
	}

	#logo img {
		width: 2em;
		height: 2em;
		object-fit: contain;
=======
		font-family: "Neutraface Slab Display TT Light";
		font-weight: lighter;
		font-size: larger;
>>>>>>> 4968c68 (css work, home, about, artist, and artists page)
	}

	nav {
		position: fixed;
		background: var(--white);
		opacity: 0.7;
		width: 100%;
	}


	ul {
		/* position: relative; */
		/* display: flex; */
		margin: 0;
 		padding: 0;
		height: 3em;
		overflow: hidden;
		/* justify-content: left; */
		list-style: none;
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
		float: right;

	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
	}

	li a {
		display: block;
		color: white;
		text-align: center;
		padding: 14px 16px;
		text-decoration: none;
	}

	li.active{
		text-decoration: underline overline;

	}
	
	li a:hover:not(.active) {
		background-color:  var(--matrix_green);
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
		transition: color 0.2s linear;
	}


</style>
