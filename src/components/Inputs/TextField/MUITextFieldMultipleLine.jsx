import React from "react";
import { useState } from "react";
import { TextField, Stack } from "@mui/material";

const MUITextFieldMultipleLine = () => {
	const [text, setText] = useState(" ");

	const handleChange = (event) => {
		setText(event.target.value);
	};

	return (
		<>
			<Stack spacing={2} direction="row">
				<TextField multiline maxRows={4} value={text} label="Multiline" onChange={handleChange} />
				<TextField multiline maxRows={4} label="Multiline placeholder" placeholder="placeholder" />
				<TextField multiline minRows={2} maxRows={4} label="Multiline Min & Max" />
				<TextField multiline rows={3} label="Consistent Multiline" />
			</Stack>
		</>
	);
};

export default MUITextFieldMultipleLine;
