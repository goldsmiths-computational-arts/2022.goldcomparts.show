import { c as create_ssr_component, a as subscribe, e as escape, b as add_attribute } from "../../../internal/immutable/chunks/index-26b76976.js";
import { p as page } from "../../../internal/immutable/chunks/stores-f833c0ae.js";
import { d as dev, b as browser } from "../../../internal/immutable/chunks/env-57855b65.js";
import "../../../internal/immutable/chunks/app-25f96378.js";
import { D as DataManager } from "../../../internal/immutable/chunks/artworks-99de2a21.js";
import "lodash-es";
import "../../../internal/immutable/chunks/paths-86ffdd15.js";
const webImg = "/internal/immutable/assets/icon-20-20-web-blackbg-a3f17882.svg";
const vimeo = "/internal/immutable/assets/icon-20-20-vimeo-blackbg-306518c0.svg";
const instagramImg = "/internal/immutable/assets/icon-20-20-instagram-blackbg-2c7ed331.svg";
const _slug__svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-iqaq1c.svelte-iqaq1c{text-align:left}p.svelte-iqaq1c.svelte-iqaq1c{margin:1rem 0}ul.svelte-iqaq1c.svelte-iqaq1c{list-style-type:none}img.svelte-iqaq1c.svelte-iqaq1c{width:100%}#icons.svelte-iqaq1c.svelte-iqaq1c{display:flex;flex-direction:row}.img--social_icons.svelte-iqaq1c.svelte-iqaq1c{background:black;margin:0.25rem}.content_container.svelte-iqaq1c.svelte-iqaq1c{width:100%;display:block}.keywords.svelte-iqaq1c a.svelte-iqaq1c{padding:5px;border:1px solid var(--black);border-radius:5px}.keywords.svelte-iqaq1c.svelte-iqaq1c{display:flex;justify-content:space-between;padding:0;margin-top:5%}.img_responsive.svelte-iqaq1c.svelte-iqaq1c{height:500px;width:100%;object-fit:cover}.img_art.svelte-iqaq1c.svelte-iqaq1c{width:100%}.artist_wrap.svelte-iqaq1c.svelte-iqaq1c{width:100%;margin:1rem;padding:0}.txt_wrap.svelte-iqaq1c.svelte-iqaq1c{width:95%;margin:1rem;padding:0}@media(min-width: 800px){.content_container.svelte-iqaq1c.svelte-iqaq1c{width:100%;display:flex;justify-content:space-between}.txt_wrap.svelte-iqaq1c.svelte-iqaq1c{width:50%}.artist_wrap.svelte-iqaq1c.svelte-iqaq1c{width:50%}.img_art.svelte-iqaq1c.svelte-iqaq1c{width:50%;margin:1rem}}",
  map: null
};
const U5Bslugu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const hydrate = dev;
  const router = browser;
  const prerender = true;
  const artist = DataManager.getArtist($page.params.slug);
  const createWebsiteUrl = (website) => {
    if (!website.includes("http")) {
      website = "https://" + website;
    }
    return website;
  };
  if ($$props.hydrate === void 0 && $$bindings.hydrate && hydrate !== void 0)
    $$bindings.hydrate(hydrate);
  if ($$props.router === void 0 && $$bindings.router && router !== void 0)
    $$bindings.router(router);
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<img class="${"img_responsive svelte-iqaq1c"}" src="${"/img/1.png"}" alt="${"img-description"}">

<div class="${"content_container svelte-iqaq1c"}"><div class="${"artist_wrap svelte-iqaq1c"}"><h1 class="${"svelte-iqaq1c"}">${escape(artist.name)}</h1>
    <h2>${escape(artist.title)}</h2></div>

  <div class="${"txt_wrap svelte-iqaq1c"}"><p class="${"svelte-iqaq1c"}">${escape(artist.bio)}</p>
    <ul class="${"keywords svelte-iqaq1c"}"><li><a href="${"/"}" class="${"svelte-iqaq1c"}">Keyword 1</a></li>
      <li><a href="${"/"}" class="${"svelte-iqaq1c"}">Keyword 2</a></li>
      <li><a href="${"/"}" class="${"svelte-iqaq1c"}">Keyword 3</a></li></ul></div></div>

<hr>

<div class="${"content_container svelte-iqaq1c"}"><div class="${"img_art svelte-iqaq1c"}"><img src="${"/img/3.png"}" alt="${"img-description"}" class="${"svelte-iqaq1c"}"></div>

  <div class="${"txt_wrap svelte-iqaq1c"}"><h2>${escape(artist.subtitle)}</h2>
    <p class="${"svelte-iqaq1c"}">${escape(artist.description)}</p>
    <div id="${"icons"}" class="${"svelte-iqaq1c"}">${artist.website ? `<a${add_attribute("href", createWebsiteUrl(artist.website), 0)} target="${"_blank"}"><img${add_attribute("src", webImg, 0)} class="${"img--social_icons svelte-iqaq1c"}" alt="${"website icon"}"></a>` : ``}
      ${artist.instagram ? `<a target="${"_blank"}" href="${"https://www.instagram.com/" + escape(artist.instagram, true) + "/"}"><img${add_attribute("src", instagramImg, 0)} class="${"img--social_icons svelte-iqaq1c"}" alt="${"instagram icon"}"></a>` : ``}

      ${artist.vimeo ? `<a${add_attribute("href", artist.vimeo, 0)} target="${"_blank"}"><img${add_attribute("src", vimeo, 0)} class="${"img--social_icons svelte-iqaq1c"}" alt="${"vimeo icon"}"></a>` : ``}

      ${artist.youtube ? `<a${add_attribute("href", artist.youtube, 0)} target="${"_blank"}"><img${add_attribute("src", vimeo, 0)} class="${"img--social_icons svelte-iqaq1c"}" alt="${"youtube icon"}"></a>` : ``}</div></div>
</div>`;
});
export {
  U5Bslugu5D as default
};
