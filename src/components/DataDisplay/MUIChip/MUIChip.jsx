import React from "react";
import { Avatar, Chip, Stack } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

const MUIChip = () => {
	const handleClick = () => {
		console.log("you clicked a chip");
	};

	const handleDelete = () => {
		console.log("you deleted a chip");
	};

	return (
		<>
			<Stack spacing={3} direction="row" sx={{ mb: 3 }}>
				<Chip label="This is a chip" color="primary" />
				<Chip label="This is another chip" variant="outlined" color="error" />
				<Chip label="Clickable" onClick={handleClick} color="warning" />
				<Chip label="Deletable" onDelete={handleDelete} color="success" />
				<Chip label="Click & delete" onClick={handleClick} onDelete={handleDelete} color="info" />
				<Chip
					label="Custom Delete Icon"
					onClick={handleClick}
					onDelete={handleDelete}
					deleteIcon={<DoneIcon />}
					color="secondary"
				/>
			</Stack>
			<Stack spacing={3} direction="row" sx={{ alignItems: "center", mb: 3 }}>
				<Chip
					label="Avatar"
					variant="outlined"
					avatar={<Avatar sx={{ backgroundColor: "warning.main" }}></Avatar>}
				/>
				<Chip label="Small Chip" size="small" />
			</Stack>
		</>
	);
};

export default MUIChip;
