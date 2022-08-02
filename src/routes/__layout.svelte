<script>
	import Header from '$lib/header/Header.svelte';
</script>

<main>
	<Header />
	<main>
		<slot />
	</main>
    <footer> Comparts show </footer>
	
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

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
		position: fixed;
		bottom: 0;
	}
</style>