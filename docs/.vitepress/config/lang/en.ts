import { defineConfig, type DefaultTheme } from "vitepress";

export const en = defineConfig({
	lang: "en-US",
	description: "Firefly Components",

	themeConfig: {
		nav: nav(),

		sidebar: {
			"/guide/": { base: "/guide/", items: sidebarGuide() },
			"/reference/": { base: "/reference/", items: sidebarReference() },
		},

		editLink: {
			pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
			text: "Edit this page on GitHub",
		},

		footer: {
			message: "Released under the MIT License.",
			copyright: "Copyright © 2024-present isixe",
		},
	},
});

function nav(): DefaultTheme.NavItem[] {
	return [
		{
			text: "Docs",
			link: "/guide/what-is-firefly",
			activeMatch: "/guide/",
		},
		{
			text: "Components",
			link: "/reference/site-config",
			activeMatch: "/reference/",
		},
		{
			text: "0.0.1",
			items: [
				{
					text: "Changelog",
					link: "https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md",
				},
				{
					text: "Contributing",
					link: "https://github.com/vuejs/vitepress/blob/main/.github/contributing.md",
				},
			],
		},
	];
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: "Introduction",
			collapsed: false,
			items: [{ text: "What is Firefly?", link: "what-is-firefly" }],
		},
		{
			text: "Writing",
			collapsed: false,
			items: [{ text: "Markdown Extensions", link: "markdown" }],
		},
		{
			text: "Customization",
			collapsed: false,
			items: [{ text: "Using a Custom Theme", link: "custom-theme" }],
		},
		{
			text: "Experimental",
			collapsed: false,
			items: [{ text: "MPA Mode", link: "mpa-mode" }],
		},
		{ text: "Config & API Reference", base: "/reference/", link: "site-config" },
	];
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: "Reference",
			items: [
				{ text: "Site Config", link: "site-config" },
				{
					text: "Default Theme",
					base: "/reference/default-theme-",
					items: [{ text: "Overview", link: "config" }],
				},
			],
		},
	];
}
