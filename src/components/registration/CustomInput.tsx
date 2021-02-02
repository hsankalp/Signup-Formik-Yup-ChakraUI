import { useField } from "formik";
import React from "react";

import { FormProps } from "../registration/types";
import { Input, Box } from "@chakra-ui/react";

const CustomInput = (props: FormProps) => {
  const [field, { error, value, touched }] = useField(props);
  const hasError = error && (value || touched);
  return (
    <Box w="100%">
      <Input {...field} {...props} isInvalid={hasError} />
      {hasError && (
        <Box as="text" textTransform="uppercase" fontSize="xs" color="tomato">
          {error}
        </Box>
      )}
    </Box>
  );
};

export default CustomInput;
