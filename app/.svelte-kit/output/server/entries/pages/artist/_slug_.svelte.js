import { c as create_ssr_component, a as subscribe, e as escape } from "../../../internal/immutable/chunks/index-f45e0676.js";
/* empty css                                                                               */import { p as page } from "../../../internal/immutable/chunks/Header.svelte_svelte_type_style_lang-49885344.js";
const _slug__svelte_svelte_type_style_lang = "";
const css = {
  code: ".header-img.svelte-6rqv74{width:100%;height:auto;display:block;position:relative}",
  map: null
};
const U5Bslugu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="${"header-img svelte-6rqv74"}"><img src="${"/img/1.png"}" alt="${"img-description"}"></div>




${escape($page.params.slug)}`;
});
export {
  U5Bslugu5D as default
};
