import React from "react";
import { useMemo } from "react";
import { useFormControl } from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";

/*
DESCRIPTION:
useFormControl() is a hook that returns the context value of the parent FormControl component
*/

export const MyFormHelperText = () => {
	const { focused } = useFormControl() || {};
	const helperText = useMemo(() => {
		return focused ? "This field is being focused" : "Please enter text";
	}, [focused]);
	return <FormHelperText>{helperText}</FormHelperText>;
};
