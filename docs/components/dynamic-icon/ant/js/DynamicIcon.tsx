import React from "react";
import * as Icons from "@ant-design/icons";

const AntIcon = ({ icon, color = "currentColor", fontSize }) => {
	const IconComponent = icon ? Icons[icon] : undefined;

	const iconStyle = {
		color: color,
		fontSize: fontSize,
	};

	return <IconComponent style={iconStyle} />;
};

export default AntIcon;
