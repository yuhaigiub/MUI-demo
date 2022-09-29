import React from "react";
import { Avatar, AvatarGroup } from "@mui/material";

const MUIAvatarGroup = () => {
	return (
		<>
			<AvatarGroup total={20} max={6} sx={{ justifyContent: "left" }}>
				<Avatar alt="meow" src={require("../../../images/avatarH.jpg")} />
				<Avatar alt="meow" src={require("../../../images/avatarT.jpg")} />
				<Avatar sx={{ backgroundColor: "orange" }}></Avatar>
				<Avatar sx={{ backgroundColor: "deeppink" }}>KT</Avatar>
				<Avatar sx={{ backgroundColor: "red" }}>GH</Avatar>
			</AvatarGroup>
		</>
	);
};

export default MUIAvatarGroup;
