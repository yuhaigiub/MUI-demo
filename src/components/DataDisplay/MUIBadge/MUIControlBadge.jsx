import React from "react";
import { useState } from "react";

import { Box, Badge, Button, ButtonGroup } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const MUIControlBadge = () => {
	const [msgCount, setMsgCount] = useState(0);
	const [visibility, setVisibility] = useState(true);
	const increment = () => {
		setMsgCount((x) => x + 1);
	};

	const decrement = () => {
		setMsgCount((x) => (x - 1 < 0 ? 0 : x - 1));
	};

	const toggle = () => {
		console.log(visibility);
		setVisibility((x) => !x);
	};

	return (
		<Box>
			<Badge
				badgeContent={msgCount}
				max={20}
				invisible={visibility}
				color="error"
				onClick={() => {
					console.log(`You have ${msgCount} unread msg`);
				}}
				sx={{ mr: 3 }}>
				<MailIcon sx={{ width: 32, height: 32 }} />
			</Badge>
			<ButtonGroup variant="outlined">
				<Button size="small" onClick={decrement}>
					<RemoveIcon fontSize="small" />
				</Button>
				<Button size="small" onClick={increment}>
					<AddIcon fontSize="small" />
				</Button>
				<Button size="small" onClick={toggle}>
					<RemoveCircleIcon fontSize="small" />
				</Button>
			</ButtonGroup>
		</Box>
	);
};

export default MUIControlBadge;
