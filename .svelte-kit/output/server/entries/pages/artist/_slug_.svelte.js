import { c as create_ssr_component, a as subscribe, e as escape } from "../../../internal/immutable/chunks/index-93124d4c.js";
import { p as page } from "../../../internal/immutable/chunks/stores-f15f0229.js";
import { d as dev, b as browser } from "../../../internal/immutable/chunks/env-57855b65.js";
/* empty css                                               */import { D as DataManager } from "../../../internal/immutable/chunks/data-manager-5c72f515.js";
import "lodash-es";
const _slug__svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-1a141io.svelte-1a141io{text-align:left}p.svelte-1a141io.svelte-1a141io{margin:1rem 0}ul.svelte-1a141io.svelte-1a141io{list-style-type:none}img.svelte-1a141io.svelte-1a141io{width:100%}.content_container.svelte-1a141io.svelte-1a141io{width:100%;display:block}.keywords.svelte-1a141io a.svelte-1a141io{padding:5px;border:1px solid var(--black);border-radius:5px}.keywords.svelte-1a141io.svelte-1a141io{display:flex;justify-content:space-between;padding:0;margin-top:5%}.img_responsive.svelte-1a141io.svelte-1a141io{height:500px;width:100%;object-fit:cover}.img_art.svelte-1a141io.svelte-1a141io{width:100%}.artist_wrap.svelte-1a141io.svelte-1a141io{width:100%;margin:1rem;padding:0}.txt_wrap.svelte-1a141io.svelte-1a141io{width:95%;margin:1rem;padding:0}@media(min-width: 800px){.content_container.svelte-1a141io.svelte-1a141io{width:100%;display:flex;justify-content:space-between}.txt_wrap.svelte-1a141io.svelte-1a141io{width:50%}.artist_wrap.svelte-1a141io.svelte-1a141io{width:50%}.img_art.svelte-1a141io.svelte-1a141io{width:50%;margin:1rem}}",
  map: null
};
const U5Bslugu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  console.log("oi", $page.params);
  const hydrate = dev;
  const router = browser;
  const prerender = true;
  const artist = DataManager.getArtistList()[0];
  console.log("ART", artist);
  if ($$props.hydrate === void 0 && $$bindings.hydrate && hydrate !== void 0)
    $$bindings.hydrate(hydrate);
  if ($$props.router === void 0 && $$bindings.router && router !== void 0)
    $$bindings.router(router);
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<img class="${"img_responsive svelte-1a141io"}" src="${"/img/1.png"}" alt="${"img-description"}">

<div class="${"content_container svelte-1a141io"}"><div class="${"artist_wrap svelte-1a141io"}"><h1 class="${"svelte-1a141io"}">${escape(artist.name)}</h1>
        <h2>${escape(artist.title)}</h2></div>

    <div class="${"txt_wrap svelte-1a141io"}"><p class="${"svelte-1a141io"}">${escape(artist.bio)}</p>
        <ul class="${"keywords svelte-1a141io"}"><li><a href="${"/"}" class="${"svelte-1a141io"}">Your Moma</a></li>
            <li><a href="${"/"}" class="${"svelte-1a141io"}">Digital bitch</a></li>
            <li><a href="${"/"}" class="${"svelte-1a141io"}">AI hard bicepts</a></li></ul></div></div>

<hr>


<div class="${"content_container svelte-1a141io"}"><div class="${"img_art svelte-1a141io"}"><img src="${"/img/3.png"}" alt="${"img-description"}" class="${"svelte-1a141io"}"></div>

        <div class="${"txt_wrap svelte-1a141io"}"><h2>${escape(artist.subtitle)}</h2>
            <p class="${"svelte-1a141io"}">${escape(artist.description)}</p>
            <div id="${"icons"}"><a href="${"https://www.gold.ac.uk/pg/mfa-computational-arts/"}"><img src="${"svg/icon-20-20-web-blackbg.svg"}" class="${"icon-2020vimeo_blackbg svelte-1a141io"}" alt="${"website icon"}"></a>
                <a href="${"https://www.instagram.com/goldsmithscomparts/"}"><img src="${"svg/icon-20-20-instagram-blackbg.svg"}" class="${"icon-2020vimeo_blackbg svelte-1a141io"}" alt="${"instagram icon"}"></a>
                <a href="${"https://vimeo.com/showcase/9464762"}"><img src="${"svg/icon-20-20-vimeo-blackbg.svg"}" class="${"icon-2020vimeo_blackbg svelte-1a141io"}" alt="${"vimeo icon"}"></a>
                <a href="${"https://vimeo.com/showcase/9464762"}"><img src="${"svg/icon-20-20-vimeo-blackbg.svg"}" class="${"icon-2020vimeo_blackbg svelte-1a141io"}" alt="${"youtuve icon"}"></a></div></div>

</div>`;
});
export {
  U5Bslugu5D as default
};
