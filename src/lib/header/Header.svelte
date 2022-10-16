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
		padding: 7px 4px 4px 4px;
		display: flex;
		align-items: center;
		justify-content: left;
		width: 100%;
		height: 100%;
		text-decoration: none;
		font-family: NeutrafaceSlabDisplay;
		font-weight: 300;
		font-size: 30px;
	}

	nav {
		background: var(--white);
		opacity: 0.9;
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
 		padding: 0em;
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

	#overlay {
		margin-top: 3em;
		padding-top: 8em;
		padding-bottom: 15em;

		position: absolute;
		width: 100%;
		height: 35%;
		z-index: 1;
		background-color: white;
		
	}

	/* #overlay .menu-expanded {
		display: flex;
		justify-content: space-around;
		flex-direction: row;
	} */

	li {
		position: relative;
		/* height: 100%; */
		float: right;

	}

	#hamburger-menu {
		position: relative;
		height: 36px;
		object-fit: contain;
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
		padding: 0px;
		text-decoration: none;
		font-size: 30px;
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
		font-size: 24px;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		transition: color 0.2s linear;
	}

	@media (min-width: 720px) {
		nav a {
			font-size: 16px;
		}

		ul {
			padding: 1em;
		}

		#logo a {
			padding: 0px;
		}
	}


</style>
