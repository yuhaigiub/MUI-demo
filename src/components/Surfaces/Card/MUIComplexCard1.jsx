import React from "react";
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from "@mui/material";

const MUIComplexCard1 = () => {
	return (
		<>
			<Card sx={{ maxWidth: 345 }}>
				<CardMedia
					component="img"
					src={require("../../../images/home.jpg")}
					alt="Danang 2022"
					height={140}
				/>
				<CardContent>
					<Typography component="div" variant="h5" gutterBottom>
						Da Nang, 2022
					</Typography>
					<Typography variant="body2" color="text.secondary">
						We had a lot of fun, and as a small memory, we locked it on the "bridge of love" and
						threw away the key!
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small">Share</Button>
					<Button size="small">Learn More</Button>
				</CardActions>
			</Card>
		</>
	);
};

export default MUIComplexCard1;
