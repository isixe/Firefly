import { defineConfig, type DefaultTheme } from "vitepress";

export const zh = defineConfig({
	lang: "zh-Hans",
	description: "Firefly 组件",
	themeConfig: {
		nav: nav(),

		sidebar: {
			"/zh/guide/": { base: "/zh/guide/", items: sidebarGuide() },
			"/zh/reference/": { base: "/zh/reference/", items: sidebarReference() },
		},

		editLink: {
			pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
			text: "在 GitHub 上编辑此页面",
		},

		footer: {
			message: "基于 MIT 许可发布",
			copyright: `版权所有 © 2019-${new Date().getFullYear()} 尤雨溪`,
		},

		docFooter: {
			prev: "上一页",
			next: "下一页",
		},

		outline: {
			label: "页面导航",
		},

		lastUpdated: {
			text: "最后更新于",
			formatOptions: {
				dateStyle: "short",
				timeStyle: "medium",
			},
		},

		langMenuLabel: "多语言",
		returnToTopLabel: "回到顶部",
		sidebarMenuLabel: "菜单",
		darkModeSwitchLabel: "主题",
		lightModeSwitchTitle: "切换到浅色模式",
		darkModeSwitchTitle: "切换到深色模式",
	},
});

function nav(): DefaultTheme.NavItem[] {
	return [
		{
			text: "文档",
			link: "/guide/what-is-firefly",
			activeMatch: "/guide/",
		},
		{
			text: "组件",
			link: "/reference/site-config",
			activeMatch: "/reference/",
		},
		{
			text: "0.0.1",
			items: [
				{
					text: "更新日志",
					link: "https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md",
				},
				{
					text: "参与贡献",
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
