import { c as create_ssr_component, v as validate_component } from "../../internal/immutable/chunks/index-67574ba7.js";
import { d as dev, b as browser } from "../../internal/immutable/chunks/env-57855b65.js";
/* empty css                                            */import { S as Seo } from "../../internal/immutable/chunks/Seo-6b61412b.js";
const floorPlan_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1lqmhmr{display:block;width:80%;margin:0 10%}.img_responsive.svelte-1lqmhmr{width:100%;margin:2rem 0}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const Floor_plan = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Seo, "Seo").$$render($$result, { title: "Floor Plan" }, {}, {})}
<div>
	<div class="${"header_spacing"}"></div> 
		<div class="${"container svelte-1lqmhmr"}"><h2>Ground Floor</h2>
		<img class="${"img_responsive svelte-1lqmhmr"}" src="${"/img/2.png"}" alt="${"img"}">

		<h2>First Floor</h2>
		<img class="${"img_responsive svelte-1lqmhmr"}" src="${"/img/2.png"}" alt="${"img"}">

		<h2>Second Floor</h2>
		<img class="${"img_responsive svelte-1lqmhmr"}" src="${"/img/2.png"}" alt="${"img"}">
		
		<h2>Last Floor</h2>
		<img class="${"img_responsive svelte-1lqmhmr"}" src="${"/img/2.png"}" alt="${"img"}">
		
		<div class="${"footer_spacing"}"></div></div>


</div>`;
});
export {
  Floor_plan as default,
  hydrate,
  prerender,
  router
};
