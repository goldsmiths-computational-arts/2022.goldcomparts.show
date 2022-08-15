import { c as create_ssr_component, v as validate_component } from "../../internal/immutable/chunks/index-26b76976.js";
import { S as Seo } from "../../internal/immutable/chunks/app-25f96378.js";
const SubsystemSketch_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".div__SketchWrapper.svelte-1nbtkwx{position:absolute;width:100%;height:100%;background-color:var(--white);z-index:-1}",
  map: null
};
const SubsystemSketch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div id="${"SubsystemSketch"}" class="${"div__SketchWrapper svelte-1nbtkwx"}">${``}
</div>`;
});
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-wn4fam{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:1024px;margin:0 auto;box-sizing:border-box;background-color:rgba(255, 255, 255, 0.5)}h1.svelte-wn4fam{font-family:NeutrafaceSlabDisplay;font-weight:300}#title-container.svelte-wn4fam{width:100%;align-items:left;padding:100px 0px 20px 10px}#main-title.svelte-wn4fam{font-size:60px;text-align:left}p.svelte-wn4fam{margin:5px;padding-top:10px}",
  map: null
};
const prerender = true;
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Seo, "Seo").$$render($$result, { title: "Home Page" }, {}, {})}

${validate_component(SubsystemSketch, "SubsystemSketch").$$render($$result, {}, {}, {})}

<main class="${"svelte-wn4fam"}"><div id="${"title-container"}" class="${"svelte-wn4fam"}"><h2>The Computational Arts MA/MFA Degree Show</h2>
		<h1 id="${"main-title"}" class="${"svelte-wn4fam"}">(SUB)<br>SYSTEMS</h1>
		<h2>Opening Night Sept 1st 6pm - 9:30pm</h2>
		<h3>Sept 2nd 11am - 8pm</h3>
		<h3>Sept 3rd 11am - 8pm</h3>
		<h3>Sept 4th 11am - 6pm</h3></div>

	${`<div class="${"footer_spacing"}"></div>`}

	
	${``}

</main>`;
});
export {
  Routes as default,
  prerender
};
