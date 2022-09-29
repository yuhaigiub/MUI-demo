import React from "react";
import { Stack } from "@mui/system";

import MUIAvatar from "./MUIAvatar";
import MUIAvatarGroup from "./MUIAvatarGroup";

const DipsplayMUIAvatar = () => {
	return (
		<>
			<Stack spacing={5}>
				<MUIAvatar />
				<MUIAvatarGroup />
			</Stack>
		</>
	);
};

export default DipsplayMUIAvatar;
