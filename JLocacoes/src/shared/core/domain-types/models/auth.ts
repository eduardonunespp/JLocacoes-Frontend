export type ISignUpCliente = {
  nome: string;
  nomeSocial?: string;
  email: string;
  telefone: string;
  cep: string;
  cpf: string;
  bairro: string;
  rua: string;
  cidade: string;
  uf: string;
  senha: string;
  numero: number;
  confirmacaoSenha: string;
};

export type ISignUpAnunciante = {
  Nome: string;
  Descricao?: string;
  Responsavel: string;
  Email: string;
  Telefone: string;
  Cep: string;
  Cpf: string;
  Bairro: string;
  Rua: string;
  Cidade: string;
  Uf: string;
  Numero: string;
  Cnpj?: string;
  Senha: string;
  ConfirmacaoSenha: string;
};

export type ISignInClient = {
  email: string;
  password: string;
};


