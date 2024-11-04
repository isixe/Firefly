<template>
	<component :is="iconComponent" :style="iconStyle" />
</template>

<script>
import { defineComponent, computed } from "vue";
import * as Icon from "@element-plus/icons-vue";

export default defineComponent({
	name: "ElPlusIcon",
	props: {
		icon: {
			type: String,
			required: true,
		},
		color: {
			type: String,
			default: "currentColor",
		},
		width: {
			type: String,
		},
		height: {
			type: String,
		},
	},
	setup(props) {
		const iconComponent = computed(() => Icon[props.icon] || undefined);
		const iconStyle = computed(() => ({
			color: props.color,
			width: props.width,
			height: props.height,
		}));

		return {
			iconComponent,
			iconStyle,
		};
	},
});
</script>
