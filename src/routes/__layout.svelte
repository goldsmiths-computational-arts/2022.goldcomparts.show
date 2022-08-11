<script>
	import Header from '$lib/header/Header.svelte';

	let fullSite = true;
</script>

<main>
	{#if fullSite}
	<Header/>
	{/if}

	<slot/>



	{#if fullSite}
    <footer> 
		<div class="content_container">
			<div class="address_wrap">
				<h5>St. James Hatcham Building <br>
				25 St James's Goldsmiths, University of London <br>
				New Cross London SE14 6AD</h5>
			</div>	
			<div class="date_wrap">
				<h5>
					1st - 4th
					September 2022
				</h5>
			</div>
		</div>

		<div class="social_container">
			<div class="uni_wrap">
				<h5>
					Goldsmiths Computational Arts 
				</h5>
			</div>
			<div class="icons_wrap">
				<a href="https://www.gold.ac.uk/pg/mfa-computational-arts/">
					<img src="svg/icon-20-20-web-blackbg.svg"
					class="website" alt="website icon">
				</a>
				<a href="https://www.instagram.com/goldsmithscomparts/">
					<img src="svg/icon-20-20-instagram-blackbg.svg"
					class="instagram" alt="instagram icon">
				</a>
				<a href="https://vimeo.com/showcase/9464762">
					<img src="svg/icon-20-20-vimeo-blackbg.svg"
					class="vimeo" alt="vimeo icon">
				</a>
			</div>
		</div>
	</footer>
	{/if}
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
		position:absolute;
		width: 100%;
		display: grid;
		grid-template-columns: 50% 50%;
		justify-content: center;
		column-gap: 2rem;
		padding: 3rem 0 ;
		background: var(--black);
		bottom: 0;
	}

	h5 {
		color: var(--white);
	}
	img{
		padding: 5px 5px 0px 5px;
		margin: 0;

	}
	.content_container{
		width: 100%;
		display: flexbox;
		justify-content: center;
		margin: 0 3rem;
	}
	.social_container{
		display: flexbox;
		justify-content: center;
		margin: 0 3rem;
	}
	.uni_wrap{
		width: 100%;
		text-align: left;
		margin: 0;
		padding: 0;
	}

	.icons_wrap {
		display: inline-block;
		justify-content: space-between;
		margin: 0;
		padding: 0;
	}
    @media (min-width: 800px) {
		.content_container{
			display: grid;
			grid-template-columns: 50% 50%;
			justify-content: center;
		}
		.social_container{
			width: 50%;
			display: block;
			justify-content: center;
			row-gap: 0;
			margin: 0;
			padding: 0 20%;
		}
		.icons_wrap {
			width: 100%;

			justify-content: left;
		}
		.uni_wrap{
			width: 100%;
			text-align: left;
			margin: 0;
			padding: 0;
		}
	}


	
</style>