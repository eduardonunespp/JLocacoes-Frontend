import * as yup from "yup";

export const AuthSignUpClientValidator = yup.object({
  nome: yup.string().required("O nome do usuário é obrigatório").max(250),
  nomeSocial: yup.string().max(250),
  email: yup
    .string()
    .email("Email válido requerido")
    .required("O email do usuário é obrigatório"),
  telefone: yup
    .string()
    .min(14, "Telefone inválido")
    .required("Campo obrigatório"),
  cep: yup.string().min(6, "CEP inválido").required("Campo obrigatório"),
  cpf: yup.string().min(14, "CPF inválido").required("Campo obrigatório"),
  bairro: yup.string().required("Campo obrigatório"),
  rua: yup.string().required("Campo obrigatório"),
  cidade: yup.string().required("Campo obrigatório"),
  uf: yup.string().required("Campo obrigatório"),
  numero: yup.number().required("Campo obrigatório"),
  senha: yup
    .string()
    .min(8, "A senha deve conter no mínimo 8 caracteres")
    .required("A senha do usuário é obrigatória"),
  confirmacaoSenha: yup
    .string()
    .required("Confirmação de senha é obrigatório")
    .oneOf([yup.ref("senha")], "As senhas devem corresponder"),
});

export const AuthSignInClientValidator = yup.object({
  email: yup.string().required("O email do usuário é obrigatório").max(255),
  password: yup.string().min(8, 'A senha deve conter no mínimo 8 caracteres').required("A senha do usuário é obrigatória"),
});
