import { SubmitHandler, useFormContext } from "react-hook-form";
import { Input } from "../../Input/input-component";
import { ISignInClient } from "../../../domain-types";
import * as S from "./signIn-form.styles";

type Props = {
  onSubmit: SubmitHandler<ISignInClient>;
};

export const SignInClientForm: React.FC<Props> = ({ onSubmit }) => {
  const { register, formState, handleSubmit } =
    useFormContext<ISignInClient>();

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
      <S.FooterModal>
        <S.ButtonSave disabled={!formState.isValid}>Cadastrar</S.ButtonSave>
      </S.FooterModal>
    </div>
  );
};
