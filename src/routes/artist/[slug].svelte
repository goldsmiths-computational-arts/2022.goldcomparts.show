<script>
  import { page } from "$app/stores";
  import { browser, dev } from "$app/env";
  import "../../app.css";

 import {DataManager } from '../../lib/util/data-manager'


  console.log('oi', $page.params)

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

  const artist = DataManager.getArtist($page.params.slug)
  console.log('ART', artist)
</script>


<img class="img_responsive" src="/img/1.png" alt="img-description" />

<div class="content_container">

    <div class="artist_wrap">
        <h1> {artist.name}</h1>
        <h2> {artist.title}</h2>
    </div>

    <div class="txt_wrap">
        <p>{artist.bio}</p>
        <ul class="keywords">
            <li>
                <a href="/">Your Moma</a>
            </li>
            <li>
                <a href="/">Digital bitch</a>
            </li>
            <li>
                <a href="/">AI hard bicepts</a>
            </li>
        </ul>
    </div>
</div>

<hr/>


<div class="content_container">

        <div class="img_art">
            <img  src="/img/3.png" alt="img-description">
        </div>

        <div class="txt_wrap">
            <h2> {artist.subtitle}</h2>
            <p> {artist.description}</p>
            <div id="icons">
                <a href="https://www.gold.ac.uk/pg/mfa-computational-arts/">
                    <img src="svg/icon-20-20-web-blackbg.svg"
                    class="icon-2020vimeo_blackbg" alt="website icon">
                </a>
                <a href="https://www.instagram.com/goldsmithscomparts/">
                    <img src="svg/icon-20-20-instagram-blackbg.svg"
                    class="icon-2020vimeo_blackbg" alt="instagram icon">
                </a>
                <a href="https://vimeo.com/showcase/9464762">
                    <img src="svg/icon-20-20-vimeo-blackbg.svg"
                    class="icon-2020vimeo_blackbg" alt="vimeo icon">
                </a>
                <a href="https://vimeo.com/showcase/9464762">
                    <img src="svg/icon-20-20-vimeo-blackbg.svg"
                    class="icon-2020vimeo_blackbg" alt="youtuve icon">
                </a>
            </div>
        </div>

</div>

<style>


    h1 {
        text-align: left;
    }
    p{
        margin: 1rem 0;
    }
    ul {
        list-style-type: none;
    }
    img{
        width: 100%;
    }
    
    .content_container{
        width: 100%;
        display: block;
    }
    
    .keywords a {
        padding: 5px;
        border: 1px solid var(--black);
        border-radius: 5px;
    }

    .keywords{
        display: flex;
        justify-content: space-between;
        padding: 0;
        margin-top: 5%;
    }

    .img_responsive{
        height: 500px;
        width: 100%;
        object-fit: cover;
    }

    .img_art{
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
        .content_container{
            width: 100%;
            display:flex;
            justify-content: space-between;
            /* justify-content: center; */
        }

        .txt_wrap {
            width: 50%;
        }
        .artist_wrap {
            width: 50%;
        }
        .img_art{
            width: 50%;
            margin: 1rem;        

        }
    }
</style>
