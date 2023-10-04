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
import { signUpCliente, signUpAnunciador } from "../../services/auth/authService";
import * as S from "./modal-signUp.styles";
import { callSuccess, callError } from "../../sweet-alert";

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
    setIsLoading(true)
    try {
      await signUpCliente(data);
      onSuccess();
      setIsLoading(false)
    } catch (error) {
      onError(error as any);
      setIsLoading(false)
    }
  };

  const onSubmit2: SubmitHandler<ISignUpAnunciante> = async (data) => {
    setIsLoading(true)
    try {
      await signUpAnunciador(data);
      onSuccess();
      setIsLoading(false)
    } catch (error) {
      onError(error as any);
      setIsLoading(false)
    }
  };

  
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

  const [ isLoading, setIsLoading ] = useState<boolean>(false)

  return (
    <>
      <S.ButtonCadastro onClick={handleShow}>Cadastre-se</S.ButtonCadastro>

      <Modal show={show} onHide={handleClose} centered>
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
                <RegisterFormCliente isLoading={isLoading}  onSubmit={onSubmit} />
              </FormProvider>
            ) : (
              <FormProvider {...form2}>
                <RegisterFormAnunciante isLoading={isLoading} onSubmit={onSubmit2} />
              </FormProvider>
            )}
          </Modal.Body>
      </Modal>
    </>
  );
}

export default CadastroModal;
