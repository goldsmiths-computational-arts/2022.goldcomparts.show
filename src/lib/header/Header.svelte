<script>
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
	import { base, assets } from '$app/paths';

  // Show mobile icon and display menu
//   let showMobileMenu = false;

let showMenu = false;

let width;

let menuItems = [
  { label: "Floor Plan", href: "/floor-plan" },
  { label: "Schedule", href: "/schedule" },
  { label: "Artworks", href: "/artworks" },
  { label: "About", href: "/about" }
];

function toggleMenu() {
  showMenu = !showMenu;
}

function hideMenu() {
  showMenu = false;
}

function menuImg() {

}
</script>

<svelte:window bind:innerWidth={width}/>

<header>
	<nav aria-label="main navigation"
	class={showMenu ? "menu-expanded": ""}>
		<div class="container">
			<ul>
				<li id = "logo" class:active={$page.url.pathname === '/home'}>
					<a sveltekit:prefetch href="{base}/">(SUB)SYSTEMS</a>
				</li> 
				<!-- hamburger menu -->
				{#if width < 600}
					<img id="hamburger-menu"
					src="/img/{showMenu ? "close" : "hamburger"}.webp"
					class:is-active={showMenu}
					on:click={toggleMenu}
					alt="menu icon">
				{/if}

				{#if width > 600}
					{#each menuItems as item}
					<li
					class:active={$page.url.pathname === item.href}
					on:click={hideMenu}>
						<a sveltekit:prefetch href="{base + item.href}">{item.label}</a>
					</li>
					{/each}
				{/if}

				{#if showMenu }
					<div id="overlay"
					class={showMenu ? "menu-expanded" : "menu-minimized"}>
						{#each menuItems as item}
						<li
						class:active={$page.url.pathname === item.href}
						on:click={hideMenu}>
							<a sveltekit:prefetch href="{base + item.href}">{item.label}</a>
						</li>
						{/each}
					</div>
				{/if}
			</ul>
		</div>
	</nav>
</header>

<style>
	header {

	}

	#logo {
		float:left;
	}

	#logo a {
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
	}

	nav {
		background: var(--white);
		opacity: 0.7;
		width: 100%;
	}

	nav .menu-minimized {
		position: absolute;
	}

	nav .menu-expanded {
		position: relative;
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

	ul .menu-expanded {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}

	ul .menu-minimized {

	}

	#overlay {
		margin-top: 3em;
		position: absolute;
		width: 100%;
		height: 80%;
		z-index: 1;
		background-color: white;
		
	}

	/* #overlay .menu-minimized {
		display: flex;
		justify-content: space-between;
		flex-direction: row;
	} */

	#overlay .menu-expanded {
		display: flex;
		justify-content: space-around;
		flex-direction: row;
	}

	li {
		position: relative;
		/* height: 100%; */
		float: right;
	}

	#hamburger-menu {
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
