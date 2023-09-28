export type IButton = {
    isDisabled?: boolean;
    variant?: 'danger' | 'warning'
  } & React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;