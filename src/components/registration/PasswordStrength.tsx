import React, { useEffect, useState } from "react";

import { passwordValidity } from "./validationSchema";
import { Progress } from "@chakra-ui/react";

interface Props {
  passwordInput: string;
}

const INDICATOR_COLORS = ["red", "orange", "yellow", "green"];

const getColor = (strength: number): string =>
  INDICATOR_COLORS[strength / 25 - 1];

const PasswordStrength = ({ passwordInput }: Props) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const validity = passwordValidity(passwordInput);
    const strength =
      Object.values(validity).filter((value) => value).length * 25;
    setProgress(strength);
  }, [passwordInput]);

  if (!progress) return null;

  return (
    <Progress value={progress} colorScheme={getColor(progress)} size="xs" />
  );
};

export default PasswordStrength;
