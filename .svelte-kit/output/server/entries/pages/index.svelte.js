import { c as create_ssr_component, v as validate_component } from "../../internal/immutable/chunks/index-93124d4c.js";
/* empty css                                            */import { S as Seo } from "../../internal/immutable/chunks/Seo-9d6c2f37.js";
const SubsystemSketch_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".div__SketchWrapper.svelte-1gaf7vy{position:absolute;width:100%;height:100%;background-color:var(--white);z-index:-1}",
  map: null
};
const SubsystemSketch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div id="${"SubsystemSketch"}" class="${"div__SketchWrapper svelte-1gaf7vy"}">${``}
</div>`;
});
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: 'main.svelte-1phep9q{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:1024px;margin:0 auto;box-sizing:border-box}h1.svelte-1phep9q{font-family:"Neutraface Slab Display TT Light";font-weight:lighter}#title-container.svelte-1phep9q{width:100%;align-items:left;padding:500px 0px 50px 100px}#main-title.svelte-1phep9q{font-size:60px;text-align:left}',
  map: null
};
const prerender = true;
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Seo, "Seo").$$render($$result, { title: "Home Page" }, {}, {})}

${validate_component(SubsystemSketch, "SubsystemSketch").$$render($$result, {}, {}, {})}
<main class="${"svelte-1phep9q"}"><div id="${"title-container"}" class="${"svelte-1phep9q"}"><h2>The Computational Arts MA/MFA Degree Show</h2>
		<h1 id="${"main-title"}" class="${"svelte-1phep9q"}">(SUB)<br>SYSTEMS</h1>
		<h2>1st-4th September 2022</h2></div>
	<div class="${"footer_spacing"}"></div> 
</main>`;
});
export {
  Routes as default,
  prerender
};
