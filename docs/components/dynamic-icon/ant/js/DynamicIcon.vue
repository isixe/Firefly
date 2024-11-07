<template>
	<component :is="iconComponent" :style="iconStyle" />
</template>

<script>
import { computed } from "vue";
import * as Icons from "@ant-design/icons-vue";

export default {
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
	setup(props) {
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
};
</script>
