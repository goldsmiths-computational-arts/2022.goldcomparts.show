import { c as create_ssr_component, b as add_attribute, e as escape, v as validate_component } from "../../internal/immutable/chunks/index-0088c08a.js";
/* empty css                                            */import { S as Seo } from "../../internal/immutable/chunks/Seo-eec52e2c.js";
const Counter_svelte_svelte_type_style_lang = "";
const EllipseSketch_svelte_svelte_type_style_lang = "";
const css = {
  code: ".div__EllipseSketchWrapper.svelte-1vmfdsz{width:100%;height:100%;background-color:red}",
  map: null
};
const EllipseSketch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let circleWidth = 55;
  let circleHeight = 55;
  $$result.css.add(css);
  return `<div id="${"EllipseSketch"}" class="${"div__EllipseSketchWrapper svelte-1vmfdsz"}">${``}

    <label>Width
        <input type="${"range"}" min="${"100"}" max="${"1000"}" step="${"0.01"}"${add_attribute("value", circleWidth, 0)}>
        ${escape(circleWidth)}</label>
    
    <label>Height
        <input type="${"range"}" min="${"100"}" max="${"1000"}" step="${"0.01"}"${add_attribute("value", circleHeight, 0)}>
        ${escape(circleHeight)}</label>
</div>`;
});
const prerender = true;
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Seo, "Seo").$$render($$result, { title: "Home Page" }, {}, {})}

${validate_component(EllipseSketch, "EllipseSketch").$$render($$result, {}, {}, {})}`;
});
export {
  Routes as default,
  prerender
};
