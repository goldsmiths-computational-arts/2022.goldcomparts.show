export const manifest = {
	appDir: "internal",
	assets: new Set([".DS_Store","favicon.png","img/1.png","img/2.png","img/3.png","img/4.png","robots.txt","svelte-welcome.png","svelte-welcome.webp"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain",".webp":"image/webp"},
	_: {
		entry: {"file":"internal/immutable/start-10033c4a.js","imports":["internal/immutable/start-10033c4a.js","internal/immutable/chunks/index-89970c11.js","internal/immutable/chunks/preload-helper-f24fe1ea.js","internal/immutable/chunks/paths-86ffdd15.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/4.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "about",
				pattern: /^\/about\/?$/,
				names: [],
				types: [],
				path: "/about",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "art",
				pattern: /^\/art\/?$/,
				names: [],
				types: [],
				path: "/art",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "floor-plan",
				pattern: /^\/floor-plan\/?$/,
				names: [],
				types: [],
				path: "/floor-plan",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "location",
				pattern: /^\/location\/?$/,
				names: [],
				types: [],
				path: "/location",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "schedule",
				pattern: /^\/schedule\/?$/,
				names: [],
				types: [],
				path: "/schedule",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "artist/[slug]",
				pattern: /^\/artist\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,8],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
