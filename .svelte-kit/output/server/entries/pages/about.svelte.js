import { c as create_ssr_component, v as validate_component } from "../../internal/immutable/chunks/index-26b76976.js";
import { S as Seo } from "../../internal/immutable/chunks/app-25f96378.js";
import { d as dev, b as browser } from "../../internal/immutable/chunks/env-57855b65.js";
const about_svelte_svelte_type_style_lang = "";
const css = {
  code: "h3.svelte-zr6nvb.svelte-zr6nvb{margin:1rem 0}.opening_wrap.svelte-zr6nvb.svelte-zr6nvb{width:50%;margin:2rem}.opening_wrap.svelte-zr6nvb hr.svelte-zr6nvb{margin:0.5rem 0;padding:0}.content_wrap.svelte-zr6nvb.svelte-zr6nvb{width:100%;margin:2rem}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "About",
      description: "About this app"
    },
    {},
    {}
  )}
	
<div class="${"header_spacing"}"></div> 

<div class="${"content_wrap svelte-zr6nvb"}"><p>The Computational Arts MA/MFA</p>
	<p>Shabby chic before they sold out humblebrag master cleanse try-hard vinyl salvia, etsy wayfarers distillery actually taiyaki. Hell of ennui small batch iceland asymmetrical affogato quinoa selvage. Vinyl pork belly ethical, hell of chambray bitters trust fund poutine cardigan everyday carry migas fanny pack. Helvetica polaroid master cleanse chillwave taxidermy raclette migas adaptogen woke put a bird on it. Cray you probably haven&#39;t heard of them hammock XOXO chartreuse.
	</p></div>

<hr>

<div class="${"opening_wrap svelte-zr6nvb"}"><h3 class="${"svelte-zr6nvb"}">Opening Hours</h3>
	<p>1st - 4th September 2020</p></div>
<div class="${"opening_wrap svelte-zr6nvb"}"><p>1st Thus (Opening Night)</p>
	<hr class="${"svelte-zr6nvb"}">
	<p>2nd Fri - 3rd Sat</p>
	<hr class="${"svelte-zr6nvb"}">
	<p>4th Sun</p></div>
<div class="${"footer_spacing"}"></div>`;
});
export {
  About as default,
  hydrate,
  prerender,
  router
};
