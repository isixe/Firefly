import React from "react";
import * as Icons from "@ant-design/icons";

interface AntIconProps {
	icon: string;
	color?: string;
	fontSize?: string;
}

const AntIcon: React.FC<AntIconProps> = ({ icon, color = "currentColor", fontSize }) => {
	const IconComponent = icon ? Icons[icon] : undefined;

	const iconStyle: React.CSSProperties = {
		color: color,
		fontSize: fontSize,
	};

	return <IconComponent style={iconStyle} />;
};

export default AntIcon;
