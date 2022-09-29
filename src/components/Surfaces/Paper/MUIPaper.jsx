import React from "react";
import { Paper, Stack } from "@mui/material";

const MyPaper = ({ text, elevation }) => {
	return (
		<Paper
			elevation={elevation}
			sx={{
				width: 300,
				height: 400,
				p: 2,
				boxSizing: "border-box",
				textAlign: "center",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				"&:hover": { backgroundColor: "deeppink" },
			}}>
			{text}
		</Paper>
	);
};

const MUIPaper = () => {
	return (
		<Stack direction="row" spacing={2}>
			<MyPaper elevation={0} text="elevation : 0" />
			<MyPaper text={`variant: outlined (doesn't work with elevation)`} />
			<MyPaper elevation={12} text="elevation : 12" />
		</Stack>
	);
};

export default MUIPaper;
