import React from "react";
import { Stack, Paper, Divider } from "@mui/material";

const Item = ({ text }) => {
	return (
		<Paper
			elevation={12}
			sx={{
				width: 100,
				height: 100,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}>
			{text}
		</Paper>
	);
};

const MUIStack = () => {
	return (
		<>
			<Stack direction="row" spacing={5}>
				<Stack direction="column" spacing={2} sx={{ backgroundColor: "error.main", p: 2 }}>
					<Item text="Item 1" />
					<Item text="Item 2" />
					<Item text="Item 3" />
				</Stack>
				<Stack direction="row" spacing={2} sx={{ backgroundColor: "primary.main", p: 2 }}>
					<Item text="Item 1" />
					<Item text="Item 2" />
					<Item text="Item 3" />
				</Stack>
				<Stack
					direction="row"
					spacing={2}
					divider={<Divider orientation="vertical" flexItem sx={{ backgroundColor: "red" }} />}
					sx={{ backgroundColor: "lightblue", p: 2, display: "flex", alignItems: "center" }}>
					<Item text="Item 1" />
					<Item text="Item 2" />
					<Item text="Item 3" />
				</Stack>
			</Stack>
		</>
	);
};

export default MUIStack;
