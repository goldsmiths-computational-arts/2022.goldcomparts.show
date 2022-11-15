import { c as create_ssr_component, v as validate_component } from "../../internal/immutable/chunks/index-26b76976.js";
import { d as dev, b as browser } from "../../internal/immutable/chunks/env-57855b65.js";
import { S as Seo } from "../../internal/immutable/chunks/app-3aae6c7f.js";
const schedule_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1lqmhmr{display:block;width:80%;margin:0 10%}.img_responsive.svelte-1lqmhmr{width:100%;margin:2rem 0}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const Schedule = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Seo, "Seo").$$render($$result, { title: "schedule" }, {}, {})}
<div>
	<div class="${"header_spacing"}"></div> 
		<div class="${"container svelte-1lqmhmr"}"><h2>Schedule Page 1</h2>
		<img class="${"img_responsive svelte-1lqmhmr"}" src="${"/img/schedule/Performances_schedule-01.png"}" alt="${"schedule and timings of performance pieces for the computational arts exhibit"}">

		<h2>Schedule Page 2</h2>
		<img class="${"img_responsive svelte-1lqmhmr"}" src="${"/img/schedule/Performances_schedule-02.png"}" alt="${"schedule and timings of performance pieces for the computational arts exhibit"}">

		<h2>Schedule Page 3</h2>
		<img class="${"img_responsive svelte-1lqmhmr"}" src="${"/img/schedule/Performances_schedule-03.png"}" alt="${"schedule and timings of performance pieces for the computational arts exhibit"}">
		
		<div class="${"footer_spacing"}"></div></div>


</div>`;
});
export {
  Schedule as default,
  hydrate,
  prerender,
  router
};
