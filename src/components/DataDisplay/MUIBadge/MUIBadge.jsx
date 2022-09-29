import React from "react";
import { Badge, Stack } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";

const MUIBadge = () => {
	return (
		<>
			<Stack spacing={3} direction="row">
				<Badge badgeContent={4} color="primary">
					<MailIcon sx={{ width: 32, height: 32 }} />
				</Badge>
				<Badge badgeContent="N" color="error">
					<ShoppingCartIcon sx={{ width: 32, height: 32 }} />
				</Badge>
				<Badge variant="dot" color="primary" overlap="circular">
					<NotificationsIcon sx={{ width: 32, height: 32 }} />
				</Badge>
				<Badge badgeContent=" " overlap="circular" color="error">
					<MailIcon sx={{ width: 32, height: 32 }} />
				</Badge>
				<Badge
					badgeContent=" "
					color="secondary"
					anchorOrigin={{ vertical: "bottom", horizontal: "left" }}>
					<NotificationsIcon sx={{ width: 32, height: 32 }} />
				</Badge>
			</Stack>
		</>
	);
};

export default MUIBadge;
