<template>
	<component :is="iconComponent" :style="iconStyle" />
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import * as Icons from "@ant-design/icons-vue";

export default defineComponent({
	props: {
		icon: {
			type: String,
			required: true,
		},
		color: {
			type: String,
			default: "currentColor",
		},
		fontSize: {
			type: String,
		},
	},
	setup(props: { icon: string; color?: string; fontSize?: string }) {
		const iconComponent = computed(() => Icons[props.icon] || undefined);
		const iconStyle = computed(() => ({
			color: props.color,
			fontSize: props.fontSize,
		}));

		return {
			iconComponent,
			iconStyle,
		};
	},
});
</script>
