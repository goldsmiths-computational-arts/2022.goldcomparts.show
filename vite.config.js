import { sveltekit } from '@sveltejs/kit/vite';
import dsv from '@rollup/plugin-dsv'
/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), dsv()],
	optimizeDeps: {
		include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep', 'papaparse']
	  },
	  assetsInclude: ["**/*.csv"]
 };

export default config;
