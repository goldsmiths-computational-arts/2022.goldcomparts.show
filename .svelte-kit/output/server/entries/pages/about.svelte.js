import { c as create_ssr_component, v as validate_component } from "../../internal/immutable/chunks/index-26b76976.js";
import { S as Seo } from "../../internal/immutable/chunks/app-3aae6c7f.js";
import { d as dev, b as browser } from "../../internal/immutable/chunks/env-57855b65.js";
const about_svelte_svelte_type_style_lang = "";
const css = {
  code: "h3.svelte-1m5n8lu.svelte-1m5n8lu{margin:1rem 0}.opening_wrap.svelte-1m5n8lu.svelte-1m5n8lu{width:80%;margin:1rem}.opening_wrap.svelte-1m5n8lu hr.svelte-1m5n8lu{margin:0.5rem 0;padding:0}.flex-date.svelte-1m5n8lu.svelte-1m5n8lu{display:flex;justify-content:space-between}.content_wrap.svelte-1m5n8lu.svelte-1m5n8lu{margin:0rem;padding:1rem}@media(min-width:720px){.content_wrap.svelte-1m5n8lu.svelte-1m5n8lu{padding:2rem}.opening_wrap.svelte-1m5n8lu.svelte-1m5n8lu{width:40%}}",
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
	
<div class="${"header_spacing"}"></div> 

<div class="${"content_wrap svelte-1m5n8lu"}"><h4>The Computational Arts MA/MFA Degree Show</h4>
	<h2><br>How can divergent and alien sub-systems be assembled into coherent structures? This theme tackles the heterogeneity of work within the show head-on (treating them like linked organs forming an organism). It traces the patterns in the way digital worlds emerge from disparate functions and classes, the way diverse programs can be connected into elegant pipelines, the way machine components and sculptural elements can coherently terraform a space, the way user and computer can be linked into a high-functioning cyborg. <br><br>Zooming out, it addresses how the cohort\u2019s varied practices are synthesised to produce the show. Possible References: Lialina on digital worlds produced by discordant users, Haraway on cyborgs and symbiotic systems, D&amp;G ATP and Anti-Oedipus for machine systems + rhizomatics, Prigogine + Stengers on order out of chaos
	</h2></div>

<hr>

<div class="${"opening_wrap svelte-1m5n8lu"}"><h3 class="${"svelte-1m5n8lu"}">Opening Hours</h3>
	<p>1st - 4th September 2022</p></div>
<div class="${"opening_wrap svelte-1m5n8lu"}"><div class="${"flex-date svelte-1m5n8lu"}"><span>1st Thu (Opening Night)</span>
		<span>6 pm - 9.30 pm</span></div>
	<hr class="${"svelte-1m5n8lu"}">
	<div class="${"flex-date svelte-1m5n8lu"}"><span>2nd Fri - 3rd Sat</span>
		<span>11 am - 8 pm</span></div>
	<hr class="${"svelte-1m5n8lu"}">
	<div class="${"flex-date svelte-1m5n8lu"}"><span>4th Sun</span>
		<span>11 am - 6 pm</span></div></div>
<div class="${"footer_spacing"}"></div>`;
});
export {
  About as default,
  hydrate,
  prerender,
  router
};
