import { defineConfig, type DefaultTheme } from "vitepress";

export const zh = defineConfig({
	lang: "zh-Hans",
	description: "Firefly 组件",
	themeConfig: {
		nav: nav(),

		sidebar: {
			"/zh/guide/": { base: "/zh/guide/", items: sidebarGuide() },
			"/zh/components/": { base: "/zh/components/", items: sidebarComponent() },
		},

		editLink: {
			pattern: "https://github.com/isixe/Firefly/edit/main/docs/:path",
			text: "在 GitHub 上编辑此页面",
		},

		footer: {
			message: "基于 MIT 许可发布",
			copyright: `版权所有 © 2024-${new Date().getFullYear()} isixe`,
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
			],
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
			text: "简介",
			collapsed: false,
			items: [
				{ text: "什么是 Firefly?", link: "what-is-firefly" },
				{ text: "快速上手", link: "quick-start" },
			],
		},
	];
}

function sidebarComponent(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: "组件",
			collapsed: false,
			items: [{ text: "动态图标", link: "dynamic-icon" }],
		},
	];
}
