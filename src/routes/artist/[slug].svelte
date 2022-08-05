<script>
    import { page } from '$app/stores';
    import { browser, dev } from '$app/env';
	import '../../app.css';

    import { onMount } from 'svelte';

let Carousel; // for saving Carousel component class
let carousel; // for calling methods of the carousel instance

onMount(async () => {
  const module = await import('svelte-carousel');
  Carousel = module.default;
});


// Not used but can be used if we use custom prev and next buttons
const handleNextClick = () => {
  carousel.goToNext()
}

let images = [1,2,3,4]
	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>


<img class="img__responsive" src="/img/1.png" alt="img-description" />

<div class="div--grid-row">
    <div class="div--grid-col">
        <h3> AGA</h3>
        <p> Welsley Talbot</p>
    </div>
    <div class="div--grid-col">
        <h3> Swag celiac activated charcoal stumptown enamel pin hot chicken. VHS thundercats everyday carry, schlitz whatever pabst blue bottle you probably haven't heard of them raw denim plaid wolf ennui lyft.</h3>
        <p> Welsley Talbot</p>
    </div>
</div>

<hr class="hr--green" />

<div class="div--grid-row">
    <div class="div--grid-col">
        <img class="img__responsive" src="/img/3.png" alt="img-description">
    </div>
    <div class="div--grid-col">
        <h3> Listicle copper mug raw denim mixtape dreamcatcher, woke art party meh seitan brunch. Fashion axe slow-carb palo santo try-hard leggings, put a bird on it migas. Cardigan thundercats chartreuse, taiyaki cred drinking vinegar tattooed banh mi butcher keytar affogato knausgaard VHS.</h3>
        <h3> Art party yuccie hexagon scenester, beard williamsburg fashion axe distillery. Stumptown shabby chic poke twee seitan pickled normcore coloring book bushwick lo-fi XOXO man braid bicycle rights DIY keffiyeh.</h3>
        <p> Welsley Talbot</p>
    </div>
</div>


<style>
    .div--grid-row {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 3fr;
        margin: 2rem 0;
        gap: 3rem;
    }
    .div--grid-col {
        width: 100%;
    }

    
</style>


{$page.params.slug}