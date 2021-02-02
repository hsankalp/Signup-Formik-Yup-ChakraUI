import { Form } from "formik";
import React from "react";

import CustomCheckbox from "./CustomCheckbox";
import CustomInput from "./CustomInput";
import { FormValues } from "./types";
import PasswordStrength from "./PasswordStrength";
import { Button, Stack, VStack } from "@chakra-ui/react";

interface Props {
  isValid: boolean;
  dirty: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePhone: (e: React.ChangeEvent<HTMLInputElement>) => void;
  values: FormValues;
}

const FormView = (props: Props) => {
  const { isValid, dirty, handleChange, handlePhone, values } = props;

  return (
    <Form>
      <VStack spacing={6} align="stretch">
        <Stack direction={["column", "row"]} spacing="24px">
          <CustomInput
            label="First Name"
            name="firstName"
            placeholder="First Name"
          />
          <CustomInput
            label="Last Name"
            name="lastName"
            placeholder="Last Name"
          />
        </Stack>
        <CustomInput
          label="Email address"
          name="username"
          type="email"
          placeholder="example@example.com"
        />
        <CustomInput
          label="Phone number"
          name="phone"
          placeholder="(  ) ___-____"
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
            handlePhone(e);
            handleChange(e);
          }}
        />
        <CustomInput
          label="Password"
          name="password"
          type="password"
          placeholder="Password (min 8 characters)"
        />
        <PasswordStrength passwordInput={values.password} />
        <CustomCheckbox
          label="I want to receive the newsletter"
          type="checkbox"
          name="optIn"
        />
        <Button colorScheme="blue" type="submit" disabled={!(isValid && dirty)}>
          Sign up
        </Button>
      </VStack>
    </Form>
  );
};

export default FormView;
