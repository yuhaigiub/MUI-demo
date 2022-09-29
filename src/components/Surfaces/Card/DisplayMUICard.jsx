import React from "react";
import { Stack } from "@mui/system";

import MUICard from "./MUICard";
import MUIComplexCard1 from "./MUIComplexCard1";
import MUIComplexCard2 from "./MUIComplexCard2";
import MUIComplexCard3 from "./MUIComplexCard3";

/*
DESCRIPTION:
Cards are surfaces tha display content and actions on a single topic
They should be easy to scan for relevant and actionable information. Elements, like text and image, should be placed on them in a way that clearly indicates hierarchy
*/

const DisplayMUICard = () => {
	return (
		<>
			<Stack spacing={2} direction="row">
				<MUICard />
				<MUIComplexCard1 />
				<MUIComplexCard2 />
				<MUIComplexCard3 />
			</Stack>
		</>
	);
};

export default DisplayMUICard;
