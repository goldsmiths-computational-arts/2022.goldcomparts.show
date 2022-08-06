<script>
	
	export let title;
	export let description = "This is the default SEO description";
	export let image = 'img/1.png';
</script>

<svelte:head>
	<title>Subsystems | {title}</title>
	<meta name="description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://2022.goldcomparts.show/" />
	<meta property="og:title" content={title} />
	<meta property="og:locale" content="en_GB" />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://2022.goldcomparts.show/" />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={image} />
</svelte:head>