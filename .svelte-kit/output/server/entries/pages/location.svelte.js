import { c as create_ssr_component, v as validate_component } from "../../internal/immutable/chunks/index-67574ba7.js";
import { d as dev, b as browser } from "../../internal/immutable/chunks/env-57855b65.js";
/* empty css                                            */import { S as Seo } from "../../internal/immutable/chunks/Seo-6b61412b.js";
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
