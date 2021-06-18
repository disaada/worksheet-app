import React from "react";
import { useController } from "react-hook-form";
import TextField from "@material-ui/core/TextField";

function FormInput({ control, name, label, required, type }) {
  const {
    field: { ref, value, ...inputProps },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: "",
  });

  return (
    <TextField
      {...inputProps}
      inputRef={ref}
      margin="normal"
      label={label}
      variant="outlined"
      fullWidth
      required={required}
      value={value}
      error={!value && error?.message}
      helperText={!value && error?.message}
      type={type || 'text'}
    />
  );
}

export default FormInput;
