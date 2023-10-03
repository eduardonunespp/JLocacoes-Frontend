import { HttpClient } from '../../../core/adapters';
import { api } from '../api'
import { format } from 'date-fns'
import { setupCassinoApiConfig } from '../jlocacoes';
import { HttpStatusCode } from '../../domain-types';
import { UnexpectedError, ValidationError } from '../../errors';
import { useMutation } from 'react-query';
import { ISignUpCliente, ISignInClient } from '../../domain-types'


export async function signUpCliente(data : ISignUpCliente){
  const headers = {
    "Content-Type": `multipart/form-data`,
  };
  const response = await api.post('cliente/clientes-cadastro', data, {headers})
  return response.data
}

export const loginCliente = async ( data :ISignInClient): Promise<string> => {
  const response = await HttpClient.of(setupCassinoApiConfig()).request({
    url: 'cliente/clientes-auth/login-cliente',
    method: 'POST',
    body: {
      email: data.email,
      senha: data.password
    },
  })

  switch (response.statusCode) {
    case HttpStatusCode.Ok:
      const accessToken = response.body.token

      return accessToken
    case HttpStatusCode.Unauthorized:
      throw new ValidationError(response.body)
    default:
      throw new UnexpectedError()
  }
}

export const useLogin = () => {
  return useMutation(loginCliente)
}

interface RedefinirSenhaProps {
  email: string;
}

export const EnvioEmailRedefinirSenha = async ( data : RedefinirSenhaProps): Promise<any> => {
  const response = await HttpClient.of(setupCassinoApiConfig()).request({
    url: 'senha/usuario-senha/solicitar-redefincao-de-senha',
    method: 'POST',
    body: {
      email: data.email,
    }
  })

  switch (response.statusCode) {
    case HttpStatusCode.NoContent:
      return response.body
    case HttpStatusCode.Unauthorized:
      throw new ValidationError(response.body)
    default:
      throw new UnexpectedError()
  }
}

export const useRedefinirSenhaEmail = () => {
  return useMutation(EnvioEmailRedefinirSenha)
}
