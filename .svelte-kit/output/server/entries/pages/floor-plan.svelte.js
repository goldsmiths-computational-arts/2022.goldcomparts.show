import { c as create_ssr_component, v as validate_component } from "../../internal/immutable/chunks/index-0088c08a.js";
import { d as dev, b as browser } from "../../internal/immutable/chunks/env-57855b65.js";
/* empty css                                            */import { S as Seo } from "../../internal/immutable/chunks/Seo-eec52e2c.js";
const hydrate = dev;
const router = browser;
const prerender = true;
const Floor_plan = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Seo, "Seo").$$render($$result, { title: "Floor Plan" }, {}, {})}
<div><p>Floor Plan Page</p>
</div>`;
});
export {
  Floor_plan as default,
  hydrate,
  prerender,
  router
};
