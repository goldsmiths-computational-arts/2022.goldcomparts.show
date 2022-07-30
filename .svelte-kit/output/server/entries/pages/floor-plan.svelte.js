import { c as create_ssr_component, v as validate_component } from "../../internal/immutable/chunks/index-0a18f046.js";
import { d as dev, b as browser } from "../../internal/immutable/chunks/env-57855b65.js";
import "../../internal/immutable/chunks/Header.svelte_svelte_type_style_lang-13fb8c6a.js";
import { H as Header } from "../../internal/immutable/chunks/Header-6864b164.js";
import "../../internal/immutable/chunks/paths-86ffdd15.js";
const floorPlan_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1izrdc8.svelte-1izrdc8{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:1024px;margin:0 auto;box-sizing:border-box}footer.svelte-1izrdc8.svelte-1izrdc8{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:40px}footer.svelte-1izrdc8 a.svelte-1izrdc8{font-weight:bold}@media(min-width: 480px){footer.svelte-1izrdc8.svelte-1izrdc8{padding:40px 0}}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const Floor_plan = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Subsystems | Art</title>`, ""}<meta name="${"description"}" content="${"this is all the artwork and artists"}" data-svelte="svelte-wfevi5">`, ""}






<main class="${"svelte-1izrdc8"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
	<div>art
	</div></main>

<footer class="${"svelte-1izrdc8"}"><p>visit <a href="${"https://kit.svelte.dev"}" class="${"svelte-1izrdc8"}">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>`;
});
export {
  Floor_plan as default,
  hydrate,
  prerender,
  router
};
