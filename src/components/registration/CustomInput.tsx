import { useField } from "formik";
import React from "react";

import { FormProps } from "../registration/types";
import {
  Input,
  Box,
  Text,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";

const CustomInput = (props: FormProps) => {
  const [field, { error, value, touched }] = useField(props);
  const hasError: boolean = !!error && (!!value || touched);
  return (
    <Box w="100%">
      <InputGroup>
        <Input {...field} {...props} isInvalid={hasError} />
        {!!value ? (
          <InputRightElement
            children={
              hasError ? (
                <WarningIcon color="red.300" />
              ) : (
                <CheckCircleIcon color="green.500" />
              )
            }
          />
        ) : null}
      </InputGroup>
      <Text textTransform="uppercase" fontSize="xs" color="tomato" mt="5px">
        {hasError ? error : ""}
      </Text>
    </Box>
  );
};

export default CustomInput;
