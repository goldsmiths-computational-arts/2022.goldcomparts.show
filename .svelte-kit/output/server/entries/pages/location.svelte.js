import { c as create_ssr_component, v as validate_component } from "../../internal/immutable/chunks/index-26b76976.js";
import { d as dev, b as browser } from "../../internal/immutable/chunks/env-57855b65.js";
import { S as Seo } from "../../internal/immutable/chunks/app-3aae6c7f.js";
const hydrate = dev;
const router = browser;
const prerender = true;
const Location = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Seo, "Seo").$$render($$result, { title: "Location" }, {}, {})}
<div><p>Location</p>
</div>`;
});
export {
  Location as default,
  hydrate,
  prerender,
  router
};
