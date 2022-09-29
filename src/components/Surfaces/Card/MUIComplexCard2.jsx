import React from "react";
import { Card, CardContent, CardMedia, CardActionArea, Typography, Box } from "@mui/material";

const MUIComplexCard2 = () => {
	return (
		<>
			<Card sx={{ minWidth: 300, height: "auto" }}>
				<CardActionArea sx={{ height: "100%" }}>
					<Box sx={{ height: "100%" }}>
						<CardMedia
							component="img"
							height={140}
							src={require("../../../images/hcm11.jpg")}
							alt="movies"
						/>
						<CardContent>
							<Typography component="div" variant="h5" gutterBottom>
								Movie Night
							</Typography>
							<Typography color="text.secondary">A fun movie night</Typography>
						</CardContent>
					</Box>
				</CardActionArea>
			</Card>
		</>
	);
};

export default MUIComplexCard2;
