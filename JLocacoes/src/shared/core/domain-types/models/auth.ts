export type ISignUpCliente = {
  Nome: string
  NomeSocial?: string
  Email: string;
  Telefone: string
  Cep: string
  Cpf: string
  Bairro: string
  Rua: string
  Cidade: string
  Uf: string
  Senha: string
  Numero: string  
  ConfirmacaoSenha: string
};

export type ISignInClient = {
  email: string
  password: string
}

export default ISignUpCliente;
