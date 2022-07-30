

import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";

let dev = false;

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    // target: "#svelte",
    adapter: adapter({
      // default options are shown
      pages: "docs",
      assets: "docs",
      fallback: null,
    }),
	prerender: {
		default: true
	},
    paths: {
      // YOUR github repository name
      base: dev ? "" : "/2022.goldcomparts.show",
    },
	appDir: "internal",
  },
};

export default config;