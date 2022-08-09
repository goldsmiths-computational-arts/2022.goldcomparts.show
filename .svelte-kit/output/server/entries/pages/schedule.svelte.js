import { c as create_ssr_component, v as validate_component, d as each, e as escape } from "../../internal/immutable/chunks/index-93124d4c.js";
import { d as dev, b as browser } from "../../internal/immutable/chunks/env-57855b65.js";
/* empty css                                            */import { b as base } from "../../internal/immutable/chunks/paths-86ffdd15.js";
import { S as Seo } from "../../internal/immutable/chunks/Seo-9d6c2f37.js";
const schedule_svelte_svelte_type_style_lang = "";
const css = {
  code: ".artists_grid.svelte-15td68f{display:grid;width:90%;grid-template-columns:repeat(1, 1fr);row-gap:2rem;margin:0 5%}.link_tile.svelte-15td68f{text-decoration:none}.img_responsive.svelte-15td68f{width:100%;height:200px;object-fit:cover}@media(min-width: 800px){.artists_grid.svelte-15td68f{display:grid;grid-template-columns:repeat(2, 1fr);column-gap:0.5rem}.image_tile.svelte-15td68f{padding:0.5rem}}@media(min-width: 1000px){.artists_grid.svelte-15td68f{display:grid;grid-template-columns:repeat(3, 1fr);column-gap:0.5rem}.image_tile.svelte-15td68f{padding:0.5rem}}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
let artists = Array(5).fill(0);
const Schedule = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Seo, "Seo").$$render($$result, { title: "Schedule" }, {}, {})}

<section>
	<div class="${"header_spacing"}"></div> 

	<div class="${"artists_grid svelte-15td68f"}">${each(artists, (artist) => {
    return `<a class="${"link_tile svelte-15td68f"}" sveltekit:prefetch href="${escape(base, true) + "/artist/xxx"}"><div class="${"image_tile svelte-15td68f"}"><img class="${"img_responsive svelte-15td68f"}" src="${"/img/1.png"}" alt="${"img"}">
					<h3 class="${"art_title"}">Title of Art</h3>
					<p>Artist&#39;s Name</p></div>
			</a>`;
  })}</div>	
	<div class="${"footer_spacing"}"></div> 

</section>`;
});
export {
  Schedule as default,
  hydrate,
  prerender,
  router
};
