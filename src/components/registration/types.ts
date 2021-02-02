export interface FormProps {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface FormValues {
  firstName: string;
  lastName: string;
  username: string;
  phone: string;
  password: string;
  optIn: boolean;
}

export interface Validity {
  isAtLength: boolean;
  hasLowercase: boolean;
  hasUppercase: boolean;
  hasNumbers: boolean;
}
