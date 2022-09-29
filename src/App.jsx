import React from "react";
import { Paper, CssBaseline } from "@mui/material";

import DisplayMUIButton from "./components/Inputs/Button/DisplayMUIButton";
import DisplayMUIButtonGroup from "./components/Inputs/ButtonGroup/DisplayMUIButtonGroup";
import DisplayMUIFloatingActionButton from "./components/Inputs/FloatingActionButton/DisplayMUIFloatingActionButton";
import DisplayMUIBox from "./components/Layout/Box/DisplayMUIBox";
import DisplayMUIContainer from "./components/Layout/Container/DisplayMUIContainer";
import DisplayMUIPaper from "./components/Surfaces/Paper/DisplayMUIPaper";
import DisplayMUIGrid from "./components/Layout/Grid/DisplayMUIGrid";
import DisplayMUIStack from "./components/Layout/Stack/DisplayMUIStack";
import DisplayMUICard from "./components/Surfaces/Card/DisplayMUICard";
import DisplayMUIAvatar from "./components/DataDisplay/MUIAvatar/DipsplayMUIAvatar";
import DisplayMUIBadge from "./components/DataDisplay/MUIBadge/DisplayMUIBadge";

// all Css properties are in here so you don't have to modify one by one
const MyPaper = (props) => {
	return (
		<Paper
			maxWidth
			elevation={12}
			sx={{
				p: 3,
				my: 3,
				mx: 2,
			}}>
			{props.render}
		</Paper>
	);
};

const App = () => {
	return (
		<>
			<CssBaseline />
			<MyPaper render={<DisplayMUIButton />} />
			<MyPaper render={<DisplayMUIButtonGroup />} />
			<MyPaper render={<DisplayMUIFloatingActionButton />} />
			<MyPaper render={<DisplayMUIBox />} />
			<MyPaper render={<DisplayMUIContainer />} />
			<MyPaper render={<DisplayMUIPaper />} />
			<MyPaper render={<DisplayMUIGrid />} />
			<MyPaper render={<DisplayMUIStack />} />
			<MyPaper render={<DisplayMUICard />} />
			<MyPaper render={<DisplayMUIAvatar />} />
			<MyPaper render={<DisplayMUIBadge />} />
		</>
	);
};

export default App;
