import React from "react";
import { Stack } from "@mui/system";

import MUIBadge from "./MUIBadge";
import MUIControlBadge from "./MUIControlBadge";

const DisplayMUIBadge = () => {
	return (
		<Stack spacing={3}>
			<MUIBadge />
			<MUIControlBadge />
		</Stack>
	);
};

export default DisplayMUIBadge;
