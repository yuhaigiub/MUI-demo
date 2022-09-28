import React from "react";
import { Grid, Paper } from "@mui/material";

const Item = ({ text }) => {
	return (
		<Paper
			elevation={12}
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				py: 2,
				"&:hover": {
					backgroundColor: "primary.main",
					color: "white",
				},
			}}>
			{text}
		</Paper>
	);
};

const MUIGrid = () => {
	return (
		<>
			<Grid container rowSpacing={2} columnSpacing={{ xs: 3, sm: 4 }}>
				<Grid item xs={8}>
					<Item text="xs={8}" />
				</Grid>
				<Grid item xs={4}>
					<Item text="xs={4}" />
				</Grid>
				<Grid item xs={3}>
					<Item text="xs={3]" />
				</Grid>
				<Grid item xs>
					<Item text="xs" />
				</Grid>
			</Grid>
		</>
	);
};

export default MUIGrid;
