import React from "react";
import { Container } from "@mui/material";

const MUIContainer = () => {
	return (
		<>
			<Container
				maxWidth="sm"
				sx={{
					height: 300,
					backgroundColor: "error.main",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					color: "white",
					"&:hover": {
						backgroundColor: "primary.main",
						fontSize: "2rem",
						textAlign: "center",
					},
				}}>
				Container put your content to the middle of the page!
			</Container>
		</>
	);
};

export default MUIContainer;
