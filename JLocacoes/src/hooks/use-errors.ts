import { useEffect, useState } from "react";

import { WindowUtils } from "../utils";

type Props = {
  disableScrollToTop?: boolean;
};

export type Output = {
  errors: string[];
  setErrors: (errors: string[]) => void;
  addError: (error: string) => void;
  clearErrors: () => void;
};

type UseErrors = (props?: Props) => Output;

export const useErrors: UseErrors = (props) => {
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    if (errors.length > 0 && !props?.disableScrollToTop) {
      WindowUtils.scrollToTop();
    }
  }, [errors]);

  const addError = (message: string) => {
    if (!errors.includes(message)) {
      setErrors([...errors, message]);
    }
  };

  const clearErrors = () => {
    setErrors([]);
  };

  return {
    errors,
    setErrors,
    addError,
    clearErrors,
  };
};
