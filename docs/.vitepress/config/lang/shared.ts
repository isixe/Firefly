import { defineConfig } from "vitepress";

export const shared = defineConfig({
	title: "Firefly",
	lastUpdated: true,
	srcDir: "pages",
	rewrites: {
		"en/:rest*": ":rest*",
	},
});
