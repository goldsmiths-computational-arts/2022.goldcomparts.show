<script>
	import Header from '$lib/header/Header.svelte';
</script>

<main>
	<Header />

	<slot />

    <footer> Comparts show </footer>
	
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
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
		background: black;
		color: white;
		/* position: fixed;
		bottom: 0; */
	}
</style>