import { defineConfig } from "vitepress";
import { vitepressDemoPlugin } from "vitepress-demo-plugin";
import { groupIconMdPlugin, groupIconVitePlugin } from "vitepress-plugin-group-icons";
import react from "@vitejs/plugin-react";
import { shared } from "./lang/shared";
import { en } from "./lang/en";
import { zh } from "./lang/zh";
import path from "path";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	...shared,
	locales: {
		root: { label: "English", ...en },
		zh: { label: "简体中文", ...zh },
	},
	markdown: {
		config(md) {
			md.use(vitepressDemoPlugin, {
				demoDir: path.resolve(__dirname, "../../components"),
			});
			md.use(groupIconMdPlugin);
		},
	},
	vite: {
		plugins: [react(), groupIconVitePlugin()],
		publicDir: "../public",
	},
	sitemap: {
		hostname: "https://firefly.itea.dev",
	},
});
