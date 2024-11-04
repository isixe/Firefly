import { defineConfig, type DefaultTheme } from "vitepress";

export const en = defineConfig({
	lang: "en-US",
	description: "Firefly Components",

	themeConfig: {
		nav: nav(),

		sidebar: {
			"/guide/": { base: "/guide/", items: sidebarGuide() },
			"/components/ant/": { base: "/components/ant/", items: sidebarComponent() },
			"/components/element/": { base: "/components/element/", items: sidebarComponent() },
			"/components/element-plus/": { base: "/components/element-plus/", items: sidebarComponent() },
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
			items: [
				{
					text: "Ant",
					link: "/components/ant/dynamic-icon",
					activeMatch: "/ant/",
				},
				{
					text: "Element",
					link: "/components/element/dynamic-icon",
					activeMatch: "/element/",
				},
				{
					text: "Element Plus",
					link: "/components/element-plus/dynamic-icon",
					activeMatch: "/element-plus/",
				},
			],
		},
		{
			text: "0.0.1",
			items: [
				{
					text: "Changelog",
					link: "https://github.com/isixe/Firefly/blob/main/CHANGELOG.md",
				},
				{
					text: "Contributing",
					link: "https://github.com/isixe/Firefly/blob/main/.github/contributing.md",
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
			items: [
				{ text: "What is Firefly?", link: "what-is-firefly" },
				{ text: "Quick start", link: "quick-start" },
			],
		},
	];
}

function sidebarComponent(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: "Components",
			collapsed: false,
			items: [{ text: "Dynamic Icon", link: "dynamic-icon" }],
		},
	];
}
