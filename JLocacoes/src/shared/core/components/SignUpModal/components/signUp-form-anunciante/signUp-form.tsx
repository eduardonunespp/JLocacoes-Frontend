import { SubmitHandler, useFormContext } from "react-hook-form";
import { Input } from "../../../Input/input-component";
import { ISignUpAnunciante } from "../../../../domain-types";
import { InputCpf, InputCep, InputCnpj } from "../../../index";
import * as S from "./signUp-form.styles";

import { Col, Row } from "react-bootstrap";
import InputTel from "../../../InputCep/input-cep";

type Props = {
  onSubmit: SubmitHandler<ISignUpAnunciante>;
};

export const RegisterFormAnunciante: React.FC<Props> = ({ onSubmit }) => {
  const { register, formState, handleSubmit } =
    useFormContext<ISignUpAnunciante>();

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
            label="Responsável:"
            type="text"
            id=""
            placeholder="Responsavel"
            error={formState.errors.Responsavel?.message}
            {...register("Responsavel")}
          />
        </Col>
      </Row>

      <Input
        label="Descrição:"
        type="text"
        id=""
        placeholder="Descrição"
        error={formState.errors.Descricao?.message}
        {...register("Descricao")}
      />

      <Input
        label="Email:"
        type="text"
        id=""
        placeholder="Email"
        error={formState.errors.Email?.message}
        {...register("Email")}
      />

      <InputTel
        label="Telefone:"
        type="text"
        id=""
        placeholder="Telefone"
        error={formState.errors.Telefone?.message}
        {...register("Telefone")}
      />

      <InputCnpj
        label="CNPJ:"
        type="text"
        id=""
        placeholder="00.000.000/0000-00"
        error={formState.errors.Cnpj?.message}
        {...register("Cnpj")}
      />
      <Row>
        <Col>
          <InputCep
            label="CEP:"
            type="text"
            id=""
            placeholder="CEP"
            error={formState.errors.Cep?.message}
            {...register("Cep")}
          />
        </Col>

        <Col>
          <InputCpf
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
