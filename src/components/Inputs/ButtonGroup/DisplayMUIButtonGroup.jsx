import React from "react";
import { Stack } from "@mui/system";

import MUIButtonGroup from "./MUIButtonGroup";
import MUISplitButton from "./MUISplitButton";
const DisplayMUIButtonGroup = () => {
	return (
		<>
			<Stack spacing={2} sx={{ width: 300 }}>
				<MUIButtonGroup />
				<MUISplitButton />
			</Stack>
		</>
	);
};

export default DisplayMUIButtonGroup;
