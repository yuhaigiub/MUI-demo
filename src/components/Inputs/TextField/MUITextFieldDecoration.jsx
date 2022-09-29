import React from "react";
import { FormControl, Input, InputLabel, InputAdornment, Stack, TextField } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

const MUITextFieldDecoration = () => {
	return (
		<>
			<Stack spacing={2} direction="row">
				<FormControl>
					<InputLabel>with a start adornment</InputLabel>
					<Input
						startAdornment={
							<InputAdornment position="start">
								<AccountCircle />
							</InputAdornment>
						}
					/>
				</FormControl>
				<TextField
					variant="standard"
					label="Text Field"
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<AccountCircle />
							</InputAdornment>
						),
					}}
				/>
			</Stack>
			<Stack spacing={2} direction="row">
				<TextField
					label="Input Weight"
					InputProps={{ startAdornment: <InputAdornment position="start">kg</InputAdornment> }}
				/>
				<TextField
					helperText="Height"
					InputProps={{ endAdornment: <InputAdornment position="end">cm</InputAdornment> }}
				/>
			</Stack>
		</>
	);
};

export default MUITextFieldDecoration;
