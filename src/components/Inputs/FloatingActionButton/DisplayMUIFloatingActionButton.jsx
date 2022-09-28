import React from "react";
import { Stack } from "@mui/material";
import MUIFloatingActionButton from "./MUIFloatingActionButton";
import MUIFloatingActionWithAnimation from "./MUIFloatingActionWithAnimation";

const DisplayMUIFloatingActionButton = () => {
	return (
		<>
			<Stack direction="row" spacing={2} sx={{ mb: 2 }}>
				<MUIFloatingActionButton />
			</Stack>
			<Stack direction="row" spacing={2}>
				<MUIFloatingActionWithAnimation />
			</Stack>
		</>
	);
};

export default DisplayMUIFloatingActionButton;
