import React from "react";
import { useState } from "react";
import { TextField, Stack, MenuItem } from "@mui/material";

const options = [
	{ value: "Boy", label: "👦" },
	{ value: "Girl", label: "👧" },
];

const MUITextFieldSelect = () => {
	const [gender, setGender] = useState("Boy");
	const handleChange = (event) => {
		setGender(event.target.value);
	};

	return (
		<>
			<Stack spacing={2} direction="row">
				<TextField
					select
					label="Select"
					value={gender}
					onChange={handleChange}
					helperText="select Your Gender">
					{options.map((option) => {
						return (
							<MenuItem key={option.value} value={option.value}>
								{option.label}
							</MenuItem>
						);
					})}
				</TextField>
			</Stack>
		</>
	);
};

export default MUITextFieldSelect;
