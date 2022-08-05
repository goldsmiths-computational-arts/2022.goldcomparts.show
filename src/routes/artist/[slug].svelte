<script>
  import { page } from "$app/stores";
  import { browser, dev } from "$app/env";
  import "../../app.css";

  import { onMount } from "svelte";
 import {DataManager } from '../../lib/util/data-manager'
  let Carousel; // for saving Carousel component class
  let carousel; // for calling methods of the carousel instance

  onMount(async () => {
    const module = await import("svelte-carousel");
    Carousel = module.default;
  });

  // Not used but can be used if we use custom prev and next buttons
  const handleNextClick = () => {
    carousel.goToNext();
  };
  console.log('oi', $page.params)

  const artwork =  DataManager.getArtwork($page.params.slug);
//   const artist =  DataManager.getArtist($page.params.slug);
//   console.log(artwork)
//   console.log(artist)

  let images = [1, 2, 3, 4];
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

<svelte:component this={Carousel} bind:this={carousel}>
  {#each images as image}
    <img class="img__responsive" src="/img/{image}.png" alt="img-description" />
  {/each}
</svelte:component>


<div class="div--grid-row">
  <div class="div--grid-col">
    <h3>{artwork.title}</h3>
  </div>
  <div class="div--grid-col">
    <h3>
      <!-- {artist.artistBio} -->
    </h3>
  </div>
</div>

<hr class="hr--green" />

<div class="div--grid-row">
  <div class="div--grid-col">
    <img class="img__responsive" src="/img/3.png" alt="img-description" />
  </div>
  <div class="div--grid-col">
    <h3>
        {artwork.artwork}
    </h3>
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
