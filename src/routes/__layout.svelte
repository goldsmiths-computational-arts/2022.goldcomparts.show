<script>
	import Header from '$lib/header/Header.svelte';
</script>

<main>
	<Header />

	<slot />

    <footer> 
		<div id="address">
			<h5>St. James Hatcham Building <br>
			25 St James's Goldsmiths, University of London <br>
			New Cross London SE14 6AD</h5>
		</div>
		<div id="hours">
			<h5>
				1st - 4th
				September 2022
			</h5>
		</div>
		<div id="socials">
			<h5>
				Goldsmiths Computational Arts 
			</h5>
		</div>
	</footer>
	
</main>


<style>
	main {
		flex: 1;
		display: block;
		flex-direction: column;
		padding: 0;
		width: 100%;
		margin: 0;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 40px;
		background: black;
		color: white;
		/* position: fixed;
		bottom: 0; */
	}

	h5 {
		color: white;
	}
</style>