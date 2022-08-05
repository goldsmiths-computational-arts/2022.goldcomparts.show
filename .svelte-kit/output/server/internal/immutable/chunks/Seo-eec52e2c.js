import { c as create_ssr_component, e as escape, b as add_attribute } from "./index-0088c08a.js";
const Seo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { description = "This is the default SEO description" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  return `${$$result.head += `${$$result.title = `<title>Subsystems | ${escape(title)}</title>`, ""}<meta name="${"description"}"${add_attribute("content", description, 0)} data-svelte="svelte-i8yc63">`, ""}`;
});
export {
  Seo as S
};
