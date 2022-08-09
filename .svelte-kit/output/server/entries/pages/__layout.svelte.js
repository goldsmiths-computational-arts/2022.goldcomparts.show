import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component } from "../../internal/immutable/chunks/index-93124d4c.js";
import { p as page } from "../../internal/immutable/chunks/stores-f15f0229.js";
import { b as base } from "../../internal/immutable/chunks/paths-86ffdd15.js";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-ad3tre.svelte-ad3tre{display:flex;justify-content:space-between}#logo.svelte-ad3tre.svelte-ad3tre{float:left}#logo.svelte-ad3tre a.svelte-ad3tre{display:flex;align-items:center;justify-content:center;width:100%;height:100%;text-decoration:none}nav.svelte-ad3tre.svelte-ad3tre{position:fixed;background:var(--white);opacity:0.7;width:100%}ul.svelte-ad3tre.svelte-ad3tre{margin:0;padding:0;height:3em;overflow:hidden;list-style:none;background-size:contain}li.svelte-ad3tre.svelte-ad3tre{position:relative;height:100%;float:right}li.active.svelte-ad3tre.svelte-ad3tre::before{--size:6px;content:'';width:0;height:0}li.svelte-ad3tre a.svelte-ad3tre{display:block;color:white;text-align:center;padding:14px 16px;text-decoration:none}li.active.svelte-ad3tre.svelte-ad3tre{text-decoration:underline overline}li.svelte-ad3tre a.svelte-ad3tre:hover:not(.active){background-color:var(--matrix_green)}nav.svelte-ad3tre a.svelte-ad3tre{display:flex;height:100%;align-items:center;padding:0 1em;color:var(--heading-color);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;transition:color 0.2s linear}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<header class="${"svelte-ad3tre"}"><div id="${"logo"}" class="${"svelte-ad3tre"}"><a sveltekit:prefetch href="${escape(base, true) + "/"}" class="${"svelte-ad3tre"}">SUB (Systems)
		</a></div>

	<nav class="${"svelte-ad3tre"}">
	

		<ul class="${"svelte-ad3tre"}"><li id="${"logo"}" class="${["svelte-ad3tre", $page.url.pathname === "/home" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${escape(base, true) + "/"}" class="${"svelte-ad3tre"}">(SUB)SYSTEMS</a></li> 
			<li class="${["svelte-ad3tre", $page.url.pathname === "/floor-plan" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${escape(base, true) + "/floor-plan"}" class="${"svelte-ad3tre"}">Floor Plan</a></li>
			<li class="${["svelte-ad3tre", $page.url.pathname === "/schedule" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${escape(base, true) + "/schedule"}" class="${"svelte-ad3tre"}">Schedule</a></li>
			<li class="${["svelte-ad3tre", $page.url.pathname === "/artworks" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${escape(base, true) + "/artworks"}" class="${"svelte-ad3tre"}">Artworks</a></li>
			<li class="${["svelte-ad3tre", $page.url.pathname === "/about" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${escape(base, true) + "/about"}" class="${"svelte-ad3tre"}">About</a></li></ul></nav>
</header>`;
});
const __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1etrjhw{flex:1;display:block;flex-direction:column;padding:0;width:100%;margin:0;box-sizing:border-box}footer.svelte-1etrjhw{position:absolute;width:100%;display:grid;grid-template-columns:50% 50%;justify-content:center;column-gap:2rem;padding:3rem 0 ;background:var(--black);bottom:0}h5.svelte-1etrjhw{color:var(--white)}img.svelte-1etrjhw{padding:5px 5px 0px 5px;margin:0}.content_container.svelte-1etrjhw{width:100%;display:flexbox;justify-content:center;margin:0 3rem}.social_container.svelte-1etrjhw{display:flexbox;justify-content:center;margin:0 3rem}.uni_wrap.svelte-1etrjhw{width:100%;text-align:left;margin:0;padding:0}.icons_wrap.svelte-1etrjhw{display:inline-block;justify-content:space-between;margin:0;padding:0}@media(min-width: 800px){.content_container.svelte-1etrjhw{display:grid;grid-template-columns:50% 50%;justify-content:center}.social_container.svelte-1etrjhw{width:50%;display:block;justify-content:center;row-gap:0;margin:0;padding:0 20%}.icons_wrap.svelte-1etrjhw{width:100%;justify-content:left}.uni_wrap.svelte-1etrjhw{width:100%;text-align:left;margin:0;padding:0}}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"svelte-1etrjhw"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
	${slots.default ? slots.default({}) : ``}

    <footer class="${"svelte-1etrjhw"}"><div class="${"content_container svelte-1etrjhw"}"><div class="${"address_wrap"}"><h5 class="${"svelte-1etrjhw"}">St. James Hatcham Building <br>
				25 St James&#39;s Goldsmiths, University of London <br>
				New Cross London SE14 6AD</h5></div>	
			<div class="${"date_wrap"}"><h5 class="${"svelte-1etrjhw"}">1st - 4th
					September 2022
				</h5></div></div>

		<div class="${"social_container svelte-1etrjhw"}"><div class="${"uni_wrap svelte-1etrjhw"}"><h5 class="${"svelte-1etrjhw"}">Goldsmiths Computational Arts 
				</h5></div>
			<div class="${"icons_wrap svelte-1etrjhw"}"><a href="${"https://www.gold.ac.uk/pg/mfa-computational-arts/"}"><img src="${"svg/icon-20-20-web-blackbg.svg"}" class="${"website svelte-1etrjhw"}" alt="${"website icon"}"></a>
				<a href="${"https://www.instagram.com/goldsmithscomparts/"}"><img src="${"svg/icon-20-20-instagram-blackbg.svg"}" class="${"instagram svelte-1etrjhw"}" alt="${"instagram icon"}"></a>
				<a href="${"https://vimeo.com/showcase/9464762"}"><img src="${"svg/icon-20-20-vimeo-blackbg.svg"}" class="${"vimeo svelte-1etrjhw"}" alt="${"vimeo icon"}"></a></div></div></footer>
</main>`;
});
export {
  _layout as default
};
