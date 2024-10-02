import { defineConfig } from "vitepress";
import { themeConfig } from "./routes/index.ts";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Firefly",
	description: "Firefly Components",
	themeConfig,
	locales: {
		root: {
			label: "English",
			lang: "en",
			link: "/page",
		},
		zh: {
			label: "简体中文",
			lang: "zh", // optional, will be added  as `lang` attribute on `html` tag
			link: "/page/zh/guide", // shows on navbar translations menu, can be external

			// other locale specific properties...
		},
	},
});
