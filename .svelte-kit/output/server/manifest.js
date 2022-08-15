export const manifest = {
	appDir: "internal",
	assets: new Set([".DS_Store","creativeCodingSketch/.DS_Store","creativeCodingSketch/data/4.png","creativeCodingSketch/data/4s.png","creativeCodingSketch/data/points1.3.csv","creativeCodingSketch/data/points1.5k.csv","creativeCodingSketch/data/points1.8.csv","creativeCodingSketch/data/pointsmobile.csv","creativeCodingSketch/fonts/BasisGrotesqueProOffWhite-Regular.otf","creativeCodingSketch/fonts/Coconat-Regular.otf","creativeCodingSketch/fonts/DotGothic16-Regular.ttf","data/finalWeb.csv","data/threeArtists.csv","favicon.png","fonts/Neutraface_Slab_Display_Light.otf","img/1.png","img/2.png","img/3.png","img/4.png","img/close.webp","img/hamburger.webp","robots.txt","svelte-welcome.png","svelte-welcome.webp","svg/icon-20-20-instagram-blackbg.svg","svg/icon-20-20-vimeo-blackbg.svg","svg/icon-20-20-web-blackbg.svg"]),
	mimeTypes: {".png":"image/png",".csv":"text/csv",".otf":"font/otf",".ttf":"font/ttf",".webp":"image/webp",".txt":"text/plain",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"internal/immutable/start-23a6ddd7.js","imports":["internal/immutable/start-23a6ddd7.js","internal/immutable/chunks/index-be646fca.js","internal/immutable/chunks/paths-86ffdd15.js","internal/immutable/chunks/preload-helper-30e8f224.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/3.js')
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
				id: "artworks",
				pattern: /^\/artworks\/?$/,
				names: [],
				types: [],
				path: "/artworks",
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
