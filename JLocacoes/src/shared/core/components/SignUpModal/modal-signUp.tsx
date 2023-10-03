import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { RegisterFormCliente } from "./components/signUp-form-client/signUp-form";
import { RegisterFormAnunciante } from "./components/signUp-form-anunciante/signUp-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  AuthSignUpClientValidator,
  ISignUpAnunciante,
} from "../../domain-types";
import { ISignUpCliente } from "../..";
import { AuthSignUpAnuncianteValidator } from "../../domain-types/validators/cadastro-anunciante";
import { signUpCliente } from "../../services/auth/authService";
import * as S from "./modal-signUp.styles";
import { callSuccess, callError } from "../../sweet-alert";
import { useErrors } from "../../../../hooks/use-errors";

function CadastroModal() {
  const [show, setShow] = useState(false);
  const [isRegisterSelectCLient, setIsRegisterSelectClient] =
    useState<boolean>(true);
  const [isRegisterSelectAdvertiser, setIsRegisterSelectAdvertiser] =
    useState<boolean>(false);

  const handleRegisterSelectClient = () => {
    setIsRegisterSelectClient(true);
    setIsRegisterSelectAdvertiser(false);
  };

  const handleRegisterSelectAdvertiser = () => {
    setIsRegisterSelectAdvertiser(true);
    setIsRegisterSelectClient(false);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const form = useForm<ISignUpCliente>({
    mode: "onChange",
    resolver: yupResolver(AuthSignUpClientValidator),
  });

  const form2 = useForm<ISignUpAnunciante>({
    mode: "onChange",
    resolver: yupResolver(AuthSignUpAnuncianteValidator),
  });

  const onSubmit: SubmitHandler<ISignUpCliente> = async (data) => {
    try {
      const response = await signUpCliente(data);
      onSuccess();
    } catch (error) {
      onError(error as any);
    }
  };

  const {
    errors: errorsFromUseErrors,
    setErrors,
    addError,
    clearErrors,
  } = useErrors();

  const onSuccess = () => {
    callSuccess({
      title: "Conta cadastrada com sucesso com sucesso",
      description: "Acesse já sua conta",
      onConfirm: () => {
        form.reset();
        handleClose();
      },
    });
  };

  const onError = (error: any) => {
    callError({
      title: (error as Error).name,
      description: (error as Error).message,
    });
  };

  return (
    <>
      <S.ButtonCadastro onClick={handleShow}>Cadastrar</S.ButtonCadastro>

      <Modal show={show} onHide={handleClose} centered>
        <form>
          <Modal.Header closeButton>
            <Modal.Title>
              <S.MessageTitle>Crie sua conta agora!</S.MessageTitle>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <S.RegisterContainerMessage>
              Selecione como você deseja se cadastrar
            </S.RegisterContainerMessage>

            <S.RegisterContainerSelect>
              <S.ButtonSelect
                isbuttonselect={isRegisterSelectCLient}
                onClick={handleRegisterSelectClient}
                type="button"
              >
                Cliente
              </S.ButtonSelect>
              <S.ButtonSelect
                isbuttonselect={isRegisterSelectAdvertiser}
                onClick={handleRegisterSelectAdvertiser}
                type="button"
              >
                Anunciante
              </S.ButtonSelect>
            </S.RegisterContainerSelect>

            {isRegisterSelectCLient ? (
              <FormProvider {...form}>
                <RegisterFormCliente onSubmit={onSubmit} />
              </FormProvider>
            ) : (
              <FormProvider {...form2}>
                <RegisterFormAnunciante onSubmit={onSubmit} />
              </FormProvider>
            )}
          </Modal.Body>
        </form>
      </Modal>
    </>
  );
}

export default CadastroModal;
