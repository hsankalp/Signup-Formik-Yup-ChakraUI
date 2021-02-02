import React from "react";

import View from "./View";
import ViewModel from "./ViewModel";

const Registration = () => {
  const viewModel = new ViewModel();
  return <View viewModel={viewModel}></View>;
};

export default Registration;
