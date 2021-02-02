import { AsYouType } from "libphonenumber-js";

import { FormValues } from "./types";

class RegistrationViewModel {
  readonly initValues: FormValues = {
    firstName: "",
    lastName: "",
    username: "",
    phone: "",
    password: "",
    optIn: true,
  };

  handleSubmit = (values: FormValues): void => {
    alert(JSON.stringify(values, null, 2));
  };

  handlePhone = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
    if (e.target.value.length > 3 && e.target.value.length <= 10) {
      e.target.value = new AsYouType("US").input(e.target.value);
    }
  };
}

export default RegistrationViewModel;
