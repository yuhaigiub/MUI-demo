import React from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import NavigationIcon from "@mui/icons-material/Navigation";
import FavoriteIcon from "@mui/icons-material/Favorite";

const MUIFloatingActionButton = () => {
	return (
		<>
			<Fab color="primary" aria-label="add">
				<AddIcon />
			</Fab>
			<Fab color="secondary" aria-label="edit">
				<EditIcon />
			</Fab>
			<Fab variant="extended" aria-label="navigation">
				<NavigationIcon sx={{ mr: 1 }} />
				NAVIGATE
			</Fab>
			<Fab disabled aria-label="like">
				<FavoriteIcon />
			</Fab>
		</>
	);
};

export default MUIFloatingActionButton;
