import React from "react";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

const MUIButtonWithIcon = () => {
	return (
		<>
			<Button variant="contained" endIcon={<SendIcon />}>
				Send
			</Button>
			<Button variant="outlined" startIcon={<DeleteIcon />}>
				Delete
			</Button>
		</>
	);
};

export default MUIButtonWithIcon;
