import React from "react";
import { Stack } from "@mui/system";
import MUITextField from "./MUITextField";
import MUITextFieldMultipleLine from "./MUITextFieldMultipleLine";
import MUITextFieldSelect from "./MUITextFieldSelect";
import MUITextFieldDecoration from "./MUITextFieldDecoration";
const DisplayMUITextField = () => {
	return (
		<Stack spacing={4}>
			<MUITextField />
			<MUITextFieldMultipleLine />
			<MUITextFieldSelect />
			<MUITextFieldDecoration />
		</Stack>
	);
};

export default DisplayMUITextField;
