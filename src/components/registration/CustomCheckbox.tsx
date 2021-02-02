import { useField } from "formik";
import React from "react";

import { FormProps } from "../registration/types";
import { Checkbox, Text } from "@chakra-ui/react";

const CustomCheckbox = (props: FormProps) => {
  const [field] = useField(props);
  return (
    <Checkbox colorScheme="green" {...field} {...props} defaultChecked>
      <Text fontSize="sm">{props.label}</Text>
    </Checkbox>
  );
};

export default CustomCheckbox;
