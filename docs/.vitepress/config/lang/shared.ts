import { defineConfig } from "vitepress";

export const shared = defineConfig({
	title: "Firefly",
	lastUpdated: true,
	srcDir: "pages",
	themeConfig: {
		logo: "/favicon.ico",
	},
	head: [["link", { rel: "icon", href: "/favicon.ico" }]],
	rewrites: {
		"en/:rest*": ":rest*",
	},
});
