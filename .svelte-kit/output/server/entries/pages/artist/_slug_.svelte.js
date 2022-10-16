import { c as create_ssr_component, a as subscribe, e as escape, b as add_attribute } from "../../../internal/immutable/chunks/index-26b76976.js";
import { p as page } from "../../../internal/immutable/chunks/stores-f833c0ae.js";
import { d as dev, b as browser } from "../../../internal/immutable/chunks/env-57855b65.js";
import "../../../internal/immutable/chunks/app-25f96378.js";
import { D as DataManager } from "../../../internal/immutable/chunks/artworks-d38384ee.js";
import "lodash-es";
import "../../../internal/immutable/chunks/paths-86ffdd15.js";
const webImg = "/internal/immutable/assets/icon-20-20-web-blackbg-a3f17882.svg";
const vimeo = "/internal/immutable/assets/icon-20-20-vimeo-blackbg-306518c0.svg";
const instagramImg = "/internal/immutable/assets/icon-20-20-instagram-blackbg-2c7ed331.svg";
const _slug__svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-qib0bo{text-align:left}p.svelte-qib0bo{margin:1rem 0}img.svelte-qib0bo{width:100%}#icons.svelte-qib0bo{display:flex;flex-direction:row}.img--social_icons.svelte-qib0bo{background:black;margin:0.25rem}.content_container.svelte-qib0bo{width:100%;display:block}.page-container.svelte-qib0bo{padding-bottom:250px}.img_responsive.svelte-qib0bo{height:500px;width:100%;object-fit:cover}.img_art.svelte-qib0bo{width:100%}.artist_wrap.svelte-qib0bo{width:100%;margin:1rem;padding:0}.txt_wrap.svelte-qib0bo{width:95%;margin:1rem;padding:0}@media(min-width: 800px){.content_container.svelte-qib0bo{width:100%;display:flex;justify-content:space-between}.txt_wrap.svelte-qib0bo{width:50%}.artist_wrap.svelte-qib0bo{width:50%}.img_art.svelte-qib0bo{width:50%;margin:1rem}}",
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
  return `<img class="${"img_responsive svelte-qib0bo"}" src="${"/img/artworks/img1_" + escape(
    artist.pref_name ? artist.pref_name.toLowerCase() : artist.name.toLowerCase(),
    true
  ) + ".jpg"}"${add_attribute("alt", artist.img1_txt, 0)}>
<div class="${"page-container svelte-qib0bo"}"><div class="${"content_container svelte-qib0bo"}"><div class="${"artist_wrap svelte-qib0bo"}"><h1 class="${"svelte-qib0bo"}">${escape(artist.name)}</h1>
      <h2>${escape(artist.title)}</h2></div>
  
    <div class="${"txt_wrap svelte-qib0bo"}"><h2>${escape(artist.subtitle)}</h2>
      <p class="${"svelte-qib0bo"}">${escape(artist.description)}</p></div></div>
  
  <hr>
  
  <div class="${"content_container svelte-qib0bo"}"><div class="${"img_art svelte-qib0bo"}"><img src="${"/img/headshot/img1_" + escape(
    artist.pref_name ? artist.pref_name.toLowerCase() : artist.name.toLowerCase(),
    true
  ) + ".jpg"}"${add_attribute("alt", artist.headshot_txt, 0)} class="${"svelte-qib0bo"}"></div>
  
    <div class="${"txt_wrap svelte-qib0bo"}"><p class="${"svelte-qib0bo"}">${escape(artist.bio)}</p>
      <div id="${"icons"}" class="${"svelte-qib0bo"}">${artist.website ? `<a${add_attribute("href", createWebsiteUrl(artist.website), 0)} target="${"_blank"}"><img${add_attribute("src", webImg, 0)} class="${"img--social_icons svelte-qib0bo"}" alt="${"website icon"}"></a>` : ``}
        ${artist.instagram ? `<a target="${"_blank"}" href="${"https://www.instagram.com/" + escape(artist.instagram, true) + "/"}"><img${add_attribute("src", instagramImg, 0)} class="${"img--social_icons svelte-qib0bo"}" alt="${"instagram icon"}"></a>` : ``}
  
        ${artist.vimeo ? `<a${add_attribute("href", artist.vimeo, 0)} target="${"_blank"}"><img${add_attribute("src", vimeo, 0)} class="${"img--social_icons svelte-qib0bo"}" alt="${"vimeo icon"}"></a>` : ``}
  
        ${artist.youtube ? `<a${add_attribute("href", artist.youtube, 0)} target="${"_blank"}"><img${add_attribute("src", vimeo, 0)} class="${"img--social_icons svelte-qib0bo"}" alt="${"youtube icon"}"></a>` : ``}</div></div></div>
</div>`;
});
export {
  U5Bslugu5D as default
};
