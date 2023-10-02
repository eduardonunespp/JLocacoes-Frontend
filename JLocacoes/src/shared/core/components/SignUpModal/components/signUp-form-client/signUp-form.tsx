import { SubmitHandler, useFormContext } from "react-hook-form";
import { Input } from "../../../Input/input-component";
import { ISignUpCliente } from "../../../../domain-types";
import * as S from "./signUp-form.styles";

type Props = {
  onSubmit: SubmitHandler<ISignUpCliente>;
};

export const RegisterFormCliente: React.FC<Props> = ({ onSubmit }) => {
  const { register, formState, handleSubmit } =
    useFormContext<ISignUpCliente>();

  return (
    <div onSubmit={handleSubmit(onSubmit)}>
      {/* <Input
        label="Nome:"
        type="text"
        id=""
        placeholder="Nome"
        error={formState.errors.name?.message}
        {...register("name")}
      /> */}
      <Input
        label="Email:"
        type="text"
        id=""
        placeholder="Email"
        error={formState.errors.email?.message}
        {...register("email")}
      />

      <Input
        label="Senha:"
        type="password"
        id=""
        placeholder="Senha"
        error={formState.errors.password?.message}
        {...register("password")}
      />
      <Input
        label="Confirmação de Senha:"
        type="password"
        id=""
        placeholder="Confirmação de Senha"
        error={formState.errors.passwordConfirm?.message}
        {...register("passwordConfirm")}
      />

      <S.FooterModal>
        <S.ButtonSave disabled={!formState.isValid}>Cadastrar</S.ButtonSave>
      </S.FooterModal>
    </div>
  );
};
