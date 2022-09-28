import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";

const MUIButtonLoading = () => {
	return (
		<>
			<LoadingButton loading variant="outlined" size="large">
				Click Me!
			</LoadingButton>
			<LoadingButton loading loadingIndicator="Loading..." variant="outlined" size="large">
				Fetch
			</LoadingButton>
			<LoadingButton
				loading
				loadingPosition="start"
				startIcon={<SaveIcon />}
				variant="outlined"
				size="large">
				Save
			</LoadingButton>
		</>
	);
};

export default MUIButtonLoading;
