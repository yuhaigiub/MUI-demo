import React from "react";
import { TextField, Stack } from "@mui/material";

const MUITextField = () => {
	return (
		<>
			<Stack spacing={3} direction="row">
				<TextField required label="Required" />
				<TextField disabled label="Disabled" />
				<TextField type="password" label="Password" defaultValue="123" />
				<TextField label="Read Only" defaultValue="Default Value" InputProps={{ readOnly: true }} />
				<TextField type="number" label="Number" />
				<TextField label="Helper Text" helperText="This is a helper text line" />
				<TextField type="search" label="Search Field" />
			</Stack>
			<Stack spacing={3} direction="row">
				<TextField error variant="filled" label="Input" helperText="Invalid input" />
				<TextField error variant="outlined" label="Input" helperText="Invalid input" />
				<TextField error variant="standard" label="Input" helperText="Invalid input" />
				<TextField hiddenLabel variant="filled" size="small" defaultValue="Default Text" />
			</Stack>
		</>
	);
};

export default MUITextField;
