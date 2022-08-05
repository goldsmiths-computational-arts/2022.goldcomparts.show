import { c as create_ssr_component, v as validate_component } from "../../internal/immutable/chunks/index-0088c08a.js";
import { S as Seo } from "../../internal/immutable/chunks/Seo-eec52e2c.js";
import { d as dev, b as browser } from "../../internal/immutable/chunks/env-57855b65.js";
/* empty css                                                                            */const css = {
  code: ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}",
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

<div class="${"content svelte-cf77e8"}"><h1>About this app</h1>
</div>`;
});
export {
  About as default,
  hydrate,
  prerender,
  router
};
