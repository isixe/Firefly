import { defineConfig } from "vitepress";
import { shared } from "./lang/shared";
import { en } from "./lang/en";
import { zh } from "./lang/zh";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	...shared,
	locales: {
		root: { label: "English", ...en },
		zh: { label: "简体中文", ...zh },
	},
});
