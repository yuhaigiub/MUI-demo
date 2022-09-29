import React from "react";
import { Card, CardContent, CardActions } from "@mui/material";
import { Typography, Button } from "@mui/material";

const MUICard = () => {
	return (
		<>
			<Card sx={{ minWidth: 275, width: 300, alignSelf: "flex-start" }}>
				<CardContent>
					<Typography color="text.secondary" sx={{ fontSize: 14 }} gutterBottom>
						Word of the day
					</Typography>
					<Typography component="div" variant="h5">
						{"be • nev • o • lent"}
					</Typography>
					<Typography color="text.secondary" sx={{ mb: 1.5 }}>
						adjective
					</Typography>
					<Typography variant="body2">well meaning and kindly.</Typography>
					<br />
					{`"A benevolent smile"`}
				</CardContent>
				<CardActions>
					<Button size="small">Learn More</Button>
				</CardActions>
			</Card>
		</>
	);
};

export default MUICard;
