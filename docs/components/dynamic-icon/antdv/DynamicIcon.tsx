import React from "react";
import * as Icon from "@ant-design/icons"; // Assuming the icon component is imported as AntIcon

const AntIcon = ({ icon, color = "currentColor", fontSize }) => {
	const IconComponent = icon ? Icon[icon] : undefined;

	const iconStyle = {
		color: color,
		fontSize: fontSize,
	};

	return <IconComponent style={iconStyle} />;
};

export default AntIcon;
