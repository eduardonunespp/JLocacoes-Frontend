import * as yup from "yup";

export const AuthSignUpAnuncianteValidator = yup.object({
  Nome: yup.string().required("O nome do usuário é obrigatório").max(250),
  Descricao: yup.string().max(250),
  Responsavel: yup.string().required().max(250),
  Email: yup
    .string()
    .email("Email válido requerido")
    .required("O email do usuário é obrigatório"),
  Telefone: yup
    .string()
    .min(14, "Telefone inválido")
    .required("Campo obrigatório"),
  Cep: yup.string().min(9, "CEP inválido").required("Campo obrigatório"),
  Cpf: yup.string().min(14, "CPF inválido").required("Campo obrigatório"),
  Bairro: yup.string().required("Campo obrigatório"),
  Rua: yup.string().required("Campo obrigatório"),
  Cidade: yup.string().required("Campo obrigatório"),
  Uf: yup.string().required("Campo obrigatório"),
  Numero: yup.string().required("Campo obrigatório"),
  Cnpj: yup.string().min(18, "CNPJ inválido"),
  Senha: yup
    .string()
    .min(8, "A senha deve conter no mínimo 8 caracteres")
    .required("A senha do usuário é obrigatória"),
  ConfirmacaoSenha: yup
    .string()
    .required("Confirmação de senha é obrigatório")
    .oneOf([yup.ref("Senha")], "As senhas devem corresponder"),
});

export const AuthSignInAnuncianteValidator = yup.object({
  email: yup.string().required("O email do usuário é obrigatório").max(255),
  password: yup.string().required("A senha do usuário é obrigatória"),
});
