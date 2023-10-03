import { SubmitHandler, useFormContext } from "react-hook-form";
import { Input } from "../../../Input/input-component";
import { ISignUpCliente } from "../../../../domain-types";
import * as S from "./signUp-form.styles";

import { Col, Row } from "react-bootstrap";

type Props = {
  onSubmit: SubmitHandler<ISignUpCliente>;
};

export const RegisterFormCliente: React.FC<Props> = ({ onSubmit }) => {
  const { register, formState, handleSubmit } =
    useFormContext<ISignUpCliente>();

  return (
    <div onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col>
          <Input
            label="Nome:"
            type="text"
            id=""
            placeholder="Nome"
            error={formState.errors.Nome?.message}
            {...register("Nome")}
          />
        </Col>
        <Col>
          <Input
            label="Nome Social:"
            type="text"
            id=""
            placeholder="Nome"
            error={formState.errors.NomeSocial?.message}
            {...register("NomeSocial")}
          />
        </Col>
      </Row>

      <Input
        label="Email:"
        type="text"
        id=""
        placeholder="Email"
        error={formState.errors.Email?.message}
        {...register("Email")}
      />

      <Input
        label="Telefone:"
        type="text"
        id=""
        placeholder="Email"
        error={formState.errors.Telefone?.message}
        {...register("Telefone")}
      />

      <Row>
        <Col>
          <Input
            label="CEP:"
            type="text"
            id=""
            placeholder="Cep"
            error={formState.errors.Cep?.message}
            {...register("Cep")}
          />
        </Col>

        <Col>
          <Input
            label="CPF:"
            type="text"
            id=""
            placeholder="CPF"
            error={formState.errors.Cpf?.message}
            {...register("Cpf")}
          />
        </Col>
      </Row>

      <Input
        label="Cidade:"
        type="text"
        id=""
        placeholder="Cidade"
        error={formState.errors.Cidade?.message}
        {...register("Cidade")}
      />

      <Input
        label="Bairro:"
        type="text"
        id=""
        placeholder="Bairro"
        error={formState.errors.Bairro?.message}
        {...register("Bairro")}
      />

      <Input
        label="Rua:"
        type="text"
        id=""
        placeholder="Rua"
        error={formState.errors.Rua?.message}
        {...register("Rua")}
      />
      <Row>
        <Col>
          <Input
            label="Número:"
            type="text"
            id=""
            placeholder="Numero"
            error={formState.errors.Numero?.message}
            {...register("Numero")}
          />
        </Col>
        <Col>
          <Input
            label="UF:"
            type="text"
            id=""
            placeholder="UF"
            error={formState.errors.Uf?.message}
            {...register("Uf")}
          />
        </Col>
      </Row>

      <Input
        label="Senha:"
        type="password"
        id=""
        placeholder="Senha"
        error={formState.errors.Senha?.message}
        {...register("Senha")}
      />
      <Input
        label="Confirmação de Senha:"
        type="password"
        id=""
        placeholder="Confirmação de Senha"
        error={formState.errors.ConfirmacaoSenha?.message}
        {...register("ConfirmacaoSenha")}
      />

      <S.FooterModal>
        <S.ButtonSave disabled={!formState.isValid}>Cadastrar</S.ButtonSave>
      </S.FooterModal>
    </div>
  );
};
