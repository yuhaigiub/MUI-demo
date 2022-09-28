import React from "react";
import { Paper, Stack } from "@mui/material";

const MUIPaper = () => {
	return (
		<Stack direction="row" spacing={2}>
			<Paper
				elevation={0}
				sx={{
					width: 300,
					height: 400,
					p: 2,
					textAlign: "center",
					boxSizing: "border-box",
					"&:hover": { backgroundColor: "deeppink" },
				}}>
				elevation: 0
			</Paper>
			<Paper
				variant="outlined"
				square
				sx={{
					width: 300,
					height: 400,
					p: 2,
					textAlign: "center",
					boxSizing: "border-box",
				}}>
				variant: outlined (doesn't work with elevation)
			</Paper>
			<Paper
				elevation={12}
				sx={{
					width: 300,
					height: 400,
					p: 2,
					textAlign: "center",
					boxSizing: "border-box",
				}}>
				elevation : 12
			</Paper>
		</Stack>
	);
};

export default MUIPaper;
