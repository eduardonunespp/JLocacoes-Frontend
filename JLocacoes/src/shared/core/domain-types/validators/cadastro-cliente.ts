import * as yup from "yup";

export const AuthSignUpClientValidator = yup.object({
  // name: yup.string().required("O nome do usuário é obrigatório").max(250),
  email: yup
    .string()
    .email("Email válido requerido")
    .required("O email do usuário é obrigatório"),
  password: yup
    .string()
    .min(8, "A senha deve conter no mínimo 8 caracteres")
    .required("A senha do usuário é obrigatória"),
  passwordConfirm: yup
    .string()
    .required("Confirmação de senha é obrigatório")
    .oneOf([yup.ref("password")], "As senhas devem corresponder"),
});

export const AuthSignInClientValidator = yup.object({
  email: yup.string().required("O email do usuário é obrigatório").max(255),
  password: yup.string().required("A senha do usuário é obrigatória"),
});
