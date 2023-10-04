import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "..";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { SignInClientForm } from "./components/signInClient/signIn-form";
import { SignInAnunciadorForm } from "./components/signInAnunciador/signIn-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthSignInClientValidator, ISignInClient } from "../../domain-types";
import { loginCliente, loginAnunciador } from "../../services/auth/authService";
import * as S from "./signIn-modal.styles";
import { callSuccess, callError } from "../../sweet-alert";

function SignInModal() {
  const [show, setShow] = useState(false);
  const [isLoginSelectCLient, setIsLoginSelectClient] = useState<boolean>(true);
  const [isLoginSelectAdvertiser, setIsLoginSelectAdvertiser] =
    useState<boolean>(false);

  const handleRegisterSelectClient = () => {
    setIsLoginSelectClient(true);
    setIsLoginSelectAdvertiser(false);
  };

  const handleRegisterSelectAdvertiser = () => {
    setIsLoginSelectAdvertiser(true);
    setIsLoginSelectClient(false);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const form = useForm<ISignInClient>({
    mode: "onChange",
    resolver: yupResolver(AuthSignInClientValidator),
  });

  const form2 = useForm<ISignInClient>({
    mode: "onChange",
    resolver: yupResolver(AuthSignInClientValidator),
  });

  const onSubmit: SubmitHandler<ISignInClient> = async (data) => {
    setIsLoading(true)
    try {
      await loginCliente(data);
      onSuccess();
      setIsLoading(false)
    } catch (error) {
      onError(error as any);
      setIsLoading(false)
    }

    
  };


  const onSubmit2: SubmitHandler<ISignInClient> = async (data) => {
    setIsLoading(true)
    try {
      await loginAnunciador(data);
      onSuccess();
      setIsLoading(false)
    } catch (error) {
      onError(error as any);
      setIsLoading(false)
    }
  };

  const onSuccess = () => {
    callSuccess({
      title: "Conta logada com sucesso!",
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

  const [ isLoading, setIsLoading ] = useState<boolean>(false)

  return (
    <>
      <Button onClick={handleShow}>Entrar</Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <S.MessageTitle>Bem-vindo de volta!</S.MessageTitle>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <S.RegisterContainerMessage>
            Selecione como você deseja entrar
          </S.RegisterContainerMessage>

          <S.RegisterContainerSelect>
            <S.ButtonSelect
              isbuttonselect={isLoginSelectCLient}
              onClick={handleRegisterSelectClient}
              type="button"
            >
              Cliente
            </S.ButtonSelect>
            <S.ButtonSelect
              isbuttonselect={isLoginSelectAdvertiser}
              onClick={handleRegisterSelectAdvertiser}
              type="button"
            >
              Anunciante
            </S.ButtonSelect>
          </S.RegisterContainerSelect>

          {isLoginSelectCLient ? (
            <FormProvider {...form}>
              <SignInClientForm isLoading={isLoading} onSubmit={onSubmit} />
            </FormProvider>
          ) : (
            <FormProvider {...form2}>
              <SignInAnunciadorForm isLoading={isLoading} onSubmit={onSubmit2} />
            </FormProvider>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SignInModal;
