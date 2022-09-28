import React from "react";
import { Stack } from "@mui/material";

import MUIButton from "./MUIButton";
import MUIButtonWithIcon from "./MUIButtonWithIcon";
import MUIButtonLoading from "./MUIButtonLoading";

const DisplayMUIButton = () => {
	return (
		<>
			<Stack direction="row" spacing={2}>
				<MUIButton />
				<MUIButtonWithIcon />
			</Stack>
			<Stack direction="row" spacing={2} sx={{ mt: 2 }}>
				<MUIButtonLoading />
			</Stack>
		</>
	);
};

export default DisplayMUIButton;
