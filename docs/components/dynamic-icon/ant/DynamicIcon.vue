<template>
	<component :is="iconComponent" :style="iconStyle" />
</template>

<script>
import { defineComponent, computed } from "vue";
import * as Icon from "@ant-design/icons-vue";

export default defineComponent({
	name: "AntIcon",
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
		const iconComponent = computed(() => Icon[props.icon] || undefined);
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
