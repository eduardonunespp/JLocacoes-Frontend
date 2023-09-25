type Input = {
  type: "success" | "error";
  title: string;
  description?: string;
  disableAudio?: boolean;
  onConfirm?: () => void;
};

export type CallAlert = (input: Input) => void;

export type CallErrorAlert = (input: Omit<Input, "type">) => void;

export type CallSuccessAlert = (input: Omit<Input, "type">) => void;
