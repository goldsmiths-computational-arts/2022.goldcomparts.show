import { c as create_ssr_component, v as validate_component } from "../../internal/immutable/chunks/index-26b76976.js";
import { d as dev, b as browser } from "../../internal/immutable/chunks/env-57855b65.js";
import { S as Seo } from "../../internal/immutable/chunks/app-25f96378.js";
const schedule_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media(min-width: 800px){}@media(min-width: 1000px){}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
Array(5).fill(0);
const Schedule = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Seo, "Seo").$$render($$result, { title: "Schedule" }, {}, {})}

<section>
	<div class="${"header_spacing"}"></div> 

	<div class="${"footer_spacing"}"></div> 

</section>`;
});
export {
  Schedule as default,
  hydrate,
  prerender,
  router
};
