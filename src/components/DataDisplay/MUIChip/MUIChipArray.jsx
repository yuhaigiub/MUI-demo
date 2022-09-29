import React from "react";
import { useState } from "react";
import { Chip, Stack, Button } from "@mui/material";

const originalChipData = [
	{ key: 0, label: "Reactjs" },
	{ key: 1, label: "Nextjs" },
	{ key: 2, label: "Mongodb" },
	{ key: 3, label: "Nodejs" },
	{ key: 4, label: "TailwindCss" },
	{ key: 5, label: "Material UI" },
];

const MUIChipArray = () => {
	const [chipData, setChipData] = useState(originalChipData);

	const handleDelete = (data) => {
		setChipData((chips) => chips.filter((chip) => chip.key !== data.key));
	};

	const handleReset = () => {
		setChipData(originalChipData);
	};

	return (
		<>
			<Stack spacing={2} direction="row" sx={{ alignItems: "center" }}>
				<Button color="primary" variant="contained" onClick={handleReset}>
					Reset
				</Button>
				{chipData.map((data) => (
					<Chip
						key={data.key}
						label={data.label}
						onDelete={() => {
							handleDelete(data);
						}}
					/>
				))}
			</Stack>
		</>
	);
};

export default MUIChipArray;
