import React from "react";
import {
	Card,
	CardContent,
	CardMedia,
	CardActions,
	Typography,
	IconButton,
	Box,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";

const MUIComplexCard3 = () => {
	return (
		<>
			<Card sx={{ width: 600, display: "flex", p: 3, alignSelf: "flex-start" }}>
				<Box>
					<CardContent sx={{ p: 0, mr: 2, textAlign: "center" }}>
						<Typography component="div" variant="h5" gutterBottom>
							Love Story 💖
						</Typography>
						<Typography component="div" variant="subtitle1" color="text.secondary">
							{"MeowMeow & Sen"}
						</Typography>
					</CardContent>
					<CardActions>
						<IconButton>
							<SkipPreviousIcon />
						</IconButton>
						<IconButton>
							<PlayArrowIcon />
						</IconButton>
						<IconButton>
							<SkipNextIcon />
						</IconButton>
					</CardActions>
				</Box>
				<CardMedia
					component="img"
					height={140}
					src={require("../../../images/home.jpg")}
					alt="song"
					sx={{ width: 260 }}
				/>
			</Card>
		</>
	);
};

export default MUIComplexCard3;
