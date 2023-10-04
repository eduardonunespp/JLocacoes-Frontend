import { SubmitHandler, useFormContext } from "react-hook-form";
import { Input } from "../../../Input/input-component";
import { ISignInClient } from "../../../../domain-types";
import * as S from "./signIn-form.styles";
import Spinner from "react-bootstrap/Spinner";

type Props = {
  onSubmit: SubmitHandler<ISignInClient>;
  isLoading: boolean
};

export const SignInClientForm: React.FC<Props> = ({ onSubmit, isLoading }) => {
  const { register, formState, handleSubmit } =
    useFormContext<ISignInClient>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
   
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
        <S.ButtonSave disabled={!formState.isValid}>

        {isLoading ? (
            <Spinner animation="border" variant="light" size="sm" />
          ) : (
            "Entrar"
          )}

        </S.ButtonSave>
      </S.FooterModal>
    </form>
  );
};
