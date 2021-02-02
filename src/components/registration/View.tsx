import { Formik, FormikProps } from "formik";
import React, { ReactElement } from "react";

import FormView from "./FormView";
import { FormValues } from "./types";
import { ValidationSchema } from "./validationSchema";
import RegistrationViewModel from "./ViewModel";
import { Box, useMediaQuery } from "@chakra-ui/react";

interface Props {
  viewModel: RegistrationViewModel;
}

const RegistrationView = ({ viewModel }: Props) => {
  const [isMobile] = useMediaQuery("(max-width: 600px)");
  const { initValues, handleSubmit, handlePhone } = viewModel;
  return (
    <Box p={3} width={isMobile ? "100%" : ""}>
      <Formik
        initialValues={initValues}
        validationSchema={ValidationSchema}
        onSubmit={handleSubmit}
      >
        {(props: FormikProps<FormValues>): ReactElement => {
          const formProps = { ...props, handlePhone };
          return <FormView {...formProps} />;
        }}
      </Formik>
    </Box>
  );
};

export default RegistrationView;
