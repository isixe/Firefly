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
			type: Number,
		},
		height: {
			type: Number,
		},
	},
	setup(props) {
		const iconComponent = computed(() => Icon[props.icon] || undefined);
		const iconStyle = computed(() => ({
			color: props.color,
			width: props.width + "px",
			height: props.height + "px",
		}));

		return {
			iconComponent,
			iconStyle,
		};
	},
});
</script>
