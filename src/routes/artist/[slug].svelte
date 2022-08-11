<script>
  import { page } from "$app/stores";
  import { browser, dev } from "$app/env";
  import "../../app.css";
  import { DataManager } from "../../lib/util/data-manager";

  //   const artwork =  DataManager.getArtwork($page.params.slug);
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

  const artist = DataManager.getArtist($page.params.slug);
  
</script>

<img class="img_responsive" src="/img/1.png" alt="img-description" />

<div class="content_container">
  <div class="artist_wrap">
    <h1>{artist.name}</h1>
    <h2>{artist.title}</h2>
  </div>

  <div class="txt_wrap">
    <p>{artist.bio}</p>
    <ul class="keywords">
      <li>
        <a href="/">Keyword 1</a>
      </li>
      <li>
        <a href="/">Keyword 2</a>
      </li>
      <li>
        <a href="/">Keyword 3</a>
      </li>
    </ul>
  </div>
</div>

<hr />

<div class="content_container">
  <div class="img_art">
    <img src="/img/3.png" alt="img-description" />
  </div>

  <div class="txt_wrap">
    <h2>{artist.subtitle}</h2>
    <p>{artist.description}</p>
    <div id="icons">
      {#if artist.website}
      <a href={artist.website} target="_blank" >
        <img
          src="/svg/icon-20-20-web-blackbg.svg"
          class="img--social_icons"
          alt="website icon"
        />
      </a>
      {/if}
      {#if artist.instagram}

      <a target="_blank" href="https://www.instagram.com/{artist.instagram}/">
        <img
          src="/svg/icon-20-20-instagram-blackbg.svg"
          class="img--social_icons"
          alt="instagram icon"
        />
      </a>
      {/if}

      {#if artist.vimeo}

      <a href={artist.vimeo} target="_blank" >
        <img
          src="/svg/icon-20-20-vimeo-blackbg.svg"
          class="img--social_icons"
          alt="vimeo icon"
        />
      </a>
      {/if}

      {#if artist.youtube}
      <a href={artist.youtube} target="_blank" >
        <img
          src="/svg/icon-20-20-vimeo-blackbg.svg"
          class="img--social_icons"
          alt="youtube icon"
        />
      </a>
      {/if}

    </div>
  </div>
</div>

<style>
  h1 {
    text-align: left;
  }
  p {
    margin: 1rem 0;
  }
  ul {
    list-style-type: none;
  }
  img {
    width: 100%;
  }

  #icons {
    display: flex;
    flex-direction: row;
  }
  .img--social_icons {
    background: black;
    margin: 0.25rem;
  }

  .content_container {
    width: 100%;
    display: block;
  }

  .keywords a {
    padding: 5px;
    border: 1px solid var(--black);
    border-radius: 5px;
  }

  .keywords {
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin-top: 5%;
  }

  .img_responsive {
    height: 500px;
    width: 100%;
    object-fit: cover;
  }

  .img_art {
    width: 100%;
  }

  .artist_wrap {
    width: 100%;
    margin: 1rem;
    padding: 0;
  }
  .txt_wrap {
    width: 95%;
    margin: 1rem;
    padding: 0;
  }

  @media (min-width: 800px) {
    .content_container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      /* justify-content: center; */
    }

    .txt_wrap {
      width: 50%;
    }
    .artist_wrap {
      width: 50%;
    }
    .img_art {
      width: 50%;
      margin: 1rem;
    }
  }
</style>
