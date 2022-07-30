export { matchers } from './client-matchers.js';

export const components = [
	() => import("../runtime/components/layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/about.svelte"),
	() => import("../../src/routes/art.svelte"),
	() => import("../../src/routes/artist/[slug].svelte"),
	() => import("../../src/routes/floor-plan.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/location.svelte"),
	() => import("../../src/routes/schedule.svelte")
];

export const dictionary = {
	"": [[0, 6], [1]],
	"about": [[0, 2], [1]],
	"art": [[0, 3], [1]],
	"floor-plan": [[0, 5], [1]],
	"location": [[0, 7], [1]],
	"schedule": [[0, 8], [1]],
	"artist/[slug]": [[0, 4], [1]]
};