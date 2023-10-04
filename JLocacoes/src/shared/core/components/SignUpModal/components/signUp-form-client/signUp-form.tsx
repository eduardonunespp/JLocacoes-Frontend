import { SubmitHandler, useFormContext } from "react-hook-form";
import { Input } from "../../../Input/input-component";
import { ISignUpCliente } from "../../../../domain-types";
import { InputCpf, InputCep } from "../../../index";
import * as S from "./signUp-form.styles";
import Spinner from "react-bootstrap/Spinner";

import { Col, Row } from "react-bootstrap";
import { InputTel } from "../../../index";

type Props = {
  onSubmit: SubmitHandler<ISignUpCliente>;
  isLoading: boolean;
};

export const RegisterFormCliente: React.FC<Props> = ({
  onSubmit,
  isLoading,
}) => {
  const { register, formState, handleSubmit } =
    useFormContext<ISignUpCliente>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col>
          <Input
            label="Nome:"
            type="text"
            id=""
            placeholder="Nome"
            error={formState.errors.nome?.message}
            {...register("nome")}
          />
        </Col>
        <Col>
          <Input
            label="Nome Social:"
            type="text"
            id=""
            placeholder="Nome"
            error={formState.errors.nomeSocial?.message}
            {...register("nomeSocial")}
          />
        </Col>
      </Row>

      <Input
        label="Email:"
        type="text"
        id=""
        placeholder="Email"
        error={formState.errors.email?.message}
        {...register("email")}
      />

      <InputTel
        label="Telefone:"
        type="text"
        id=""
        placeholder="Telefone"
        error={formState.errors.telefone?.message}
        {...register("telefone")}
      />

      <Row>
        <Col>
          <InputCep
            label="CEP:"
            type="text"
            id=""
            placeholder="CEP"
            error={formState.errors.cep?.message}
            {...register("cep")}
          />
        </Col>

        <Col>
          <InputCpf
            label="CPF:"
            type="text"
            id=""
            placeholder="CPF"
            error={formState.errors.cpf?.message}
            {...register("cpf")}
          />
        </Col>
      </Row>

      <Input
        label="Cidade:"
        type="text"
        id=""
        placeholder="Cidade"
        error={formState.errors.cidade?.message}
        {...register("cidade")}
      />

      <Input
        label="Bairro:"
        type="text"
        id=""
        placeholder="Bairro"
        error={formState.errors.bairro?.message}
        {...register("bairro")}
      />

      <Input
        label="Rua:"
        type="text"
        id=""
        placeholder="Rua"
        error={formState.errors.rua?.message}
        {...register("rua")}
      />
      <Row>
        <Col>
          <Input
            label="Número:"
            type="number"
            id=""
            placeholder="Número"
            error={formState.errors.numero?.message}
            {...register("numero")}
          />
        </Col>
        <Col>
          <Input
            label="UF:"
            type="text"
            id=""
            placeholder="UF"
            error={formState.errors.uf?.message}
            {...register("uf")}
          />
        </Col>
      </Row>

      <Input
        label="Senha:"
        type="password"
        id=""
        placeholder="Senha"
        error={formState.errors.senha?.message}
        {...register("senha")}
      />
      <Input
        label="Confirmação de Senha:"
        type="password"
        id=""
        placeholder="Confirmação de Senha"
        error={formState.errors.confirmacaoSenha?.message}
        {...register("confirmacaoSenha")}
      />

      <S.FooterModal>
        <S.ButtonSave disabled={!formState.isValid}>
          {isLoading ? (
            <Spinner animation="border" variant="light" size="sm" />
          ) : (
            "Cadastre-se"
          )}
        </S.ButtonSave>
      </S.FooterModal>
    </form>
  );
};
