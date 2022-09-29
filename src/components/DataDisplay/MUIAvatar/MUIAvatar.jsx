import React from "react";
import { Avatar, Stack } from "@mui/material";

const MUIAvatar = () => {
	return (
		<>
			<Stack spacing={2} direction="row">
				<Avatar
					alt="Meow"
					src={require("../../../images/avatarH.jpg")}
					sx={{ width: 100, height: 100 }}
				/>
				<Avatar
					alt="Sen"
					src={require("../../../images/avatarT.jpg")}
					sx={{ width: 100, height: 100 }}
				/>
				<Avatar
					alt="Sen"
					variant="rounded"
					src={require("../../../images/avatarT2.jpg")}
					sx={{ width: 100, height: 100 }}
				/>
			</Stack>
		</>
	);
};

export default MUIAvatar;
