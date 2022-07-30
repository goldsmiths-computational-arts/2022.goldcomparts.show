import { c as create_ssr_component, a as subscribe, b as add_attribute, e as escape } from "./index-0a18f046.js";
import { p as page } from "./Header.svelte_svelte_type_style_lang-13fb8c6a.js";
import { b as base } from "./paths-86ffdd15.js";
const logo = "/internal/immutable/assets/svelte-logo-87df40b8.svg";
const css = {
  code: "header.svelte-t2wq17.svelte-t2wq17{display:flex;justify-content:space-between}.corner.svelte-t2wq17.svelte-t2wq17{width:3em;height:3em}.corner.svelte-t2wq17 a.svelte-t2wq17{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.corner.svelte-t2wq17 img.svelte-t2wq17{width:2em;height:2em;object-fit:contain}nav.svelte-t2wq17.svelte-t2wq17{display:flex;justify-content:center;--background:rgba(255, 255, 255, 0.7)}svg.svelte-t2wq17.svelte-t2wq17{width:2em;height:3em;display:block}path.svelte-t2wq17.svelte-t2wq17{fill:var(--background)}ul.svelte-t2wq17.svelte-t2wq17{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-t2wq17.svelte-t2wq17{position:relative;height:100%}li.active.svelte-t2wq17.svelte-t2wq17::before{--size:6px;content:'';width:0;height:0;position:absolute;top:0;left:calc(50% - var(--size));border:var(--size) solid transparent;border-top:var(--size) solid var(--accent-color)}nav.svelte-t2wq17 a.svelte-t2wq17{display:flex;height:100%;align-items:center;padding:0 1em;color:var(--heading-color);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-t2wq17.svelte-t2wq17:hover{color:var(--accent-color)}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<header class="${"svelte-t2wq17"}"><div class="${"corner svelte-t2wq17"}"><a href="${"https://kit.svelte.dev"}" class="${"svelte-t2wq17"}"><img${add_attribute("src", logo, 0)} alt="${"SvelteKit"}" class="${"svelte-t2wq17"}"></a></div>

	<nav class="${"svelte-t2wq17"}"><svg viewBox="${"0 0 2 3"}" aria-hidden="${"true"}" class="${"svelte-t2wq17"}"><path d="${"M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"}" class="${"svelte-t2wq17"}"></path></svg>
		<ul class="${"svelte-t2wq17"}"><li class="${["svelte-t2wq17", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${escape(base, true) + "/"}" class="${"svelte-t2wq17"}">Home</a></li>
			<li class="${["svelte-t2wq17", $page.url.pathname === "/art" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${escape(base, true) + "/art"}" class="${"svelte-t2wq17"}">Art</a></li>
			<li class="${["svelte-t2wq17", $page.url.pathname === "/schedule" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${escape(base, true) + "/schedule"}" class="${"svelte-t2wq17"}">Schedule</a></li>
			<li class="${["svelte-t2wq17", $page.url.pathname === "/floor-plan" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${escape(base, true) + "/floor-plan"}" class="${"svelte-t2wq17"}">Floor Plan</a></li>
			<li class="${["svelte-t2wq17", $page.url.pathname === "/location" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${escape(base, true) + "/location"}" class="${"svelte-t2wq17"}">Location</a></li>
			<li class="${["svelte-t2wq17", $page.url.pathname === "/about" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${escape(base, true) + "/about"}" class="${"svelte-t2wq17"}">About</a></li> 
			</ul>
		<svg viewBox="${"0 0 2 3"}" aria-hidden="${"true"}" class="${"svelte-t2wq17"}"><path d="${"M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"}" class="${"svelte-t2wq17"}"></path></svg></nav>

	<div class="${"corner svelte-t2wq17"}"></div>
</header>`;
});
export {
  Header as H
};
