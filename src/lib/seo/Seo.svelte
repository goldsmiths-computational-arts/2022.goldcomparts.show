<script>
	export let title;
	export let description = "This is the default SEO description";
</script>

<svelte:head>
	<title>Subsystems | {title}</title>
	<meta name="description" content={description} />
</svelte:head>