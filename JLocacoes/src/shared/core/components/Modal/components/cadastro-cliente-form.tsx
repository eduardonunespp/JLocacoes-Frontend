import { SubmitHandler, useFormContext } from "react-hook-form";
import { Input } from "../../Input/input-component";
import { ISignUpCliente } from '../../../domain-types'

type Props = {
  onSubmit: SubmitHandler<ISignUpCliente>;
};

export const RegisterFormCliente: React.FC<Props> = ({ onSubmit }) => {
  const { register, formState, handleSubmit } = useFormContext<ISignUpCliente>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Nome"
        type="text"
        id=""
        placeholder="Nome"
        error={formState.errors.name?.message}
        {...register("name")}
      />
      <Input
        label="Email"
        type="text"
        id=""
        placeholder="Email"
        error={formState.errors.email?.message}
        {...register("email")}
      />

      <Input
        label="Senha"
        type="password"
        id=""
        placeholder="Senha"
        error={formState.errors.password?.message}
        {...register("password")}
      />
      <Input
        label="Confirmação de Senha"
        type="password"
        id=""
        placeholder="Confirmação de Senha"
        error={formState.errors.passwordConfirm?.message}
        {...register("passwordConfirm")}
      />
    </form>
  );
};
