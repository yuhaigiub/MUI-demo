import React from "react";
import { Box, Button, Grid } from "@mui/material";

const MUIBox = () => {
	return (
		<>
			<Grid container spacing={3} maxWidth>
				<Grid item xs={3}>
					<Box
						sx={{
							width: 300,
							height: 300,
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							color: "white",
							backgroundColor: "secondary.main",
							"&:hover": {
								backgroundColor: "error.main",
								opacity: 1,
							},
						}}>
						This is a Box
					</Box>
				</Grid>
				<Grid item>
					<Box
						component="span"
						sx={{
							p: 3,
							backgroundColor: "primary.main",
							boxSizing: "border-box",
							display: "inline-block",
							m: 2,
						}}>
						<Button variant="contained" color="secondary" sx={{ border: "3px dashed red" }}>
							Save
						</Button>
					</Box>
				</Grid>
			</Grid>
		</>
	);
};

export default MUIBox;
