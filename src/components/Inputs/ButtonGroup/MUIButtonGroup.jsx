import React from "react";
import { Button, ButtonGroup } from "@mui/material";

const MUIButtonGroup = () => {
	return (
		<>
			<ButtonGroup
				variant="contained"
				disableElevation
				aria-label="disabled elevation contained primary button group">
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup>
			<ButtonGroup
				variant="outlined"
				orientation="vertical"
				size="large"
				color="secondary"
				aria-label="vertical outlined secondary button group">
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup>
		</>
	);
};

export default MUIButtonGroup;
