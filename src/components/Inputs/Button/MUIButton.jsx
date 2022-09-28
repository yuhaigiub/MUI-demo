import React from "react";
import { Button } from "@mui/material";

const MUIButton = () => {
	const handleClick = () => {
		console.log("I Clicked the button");
	};

	return (
		<>
			<Button variant="contained" onClick={handleClick} color="secondary" size="large">
				Click Me!
			</Button>
		</>
	);
};

export default MUIButton;
