import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from '../'
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { SignInClientForm } from "./components/signIn-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthSignInClientValidator, ISignInClient } from "../../domain-types";
import * as S from "./modal-sign-in.styles";

function SignInModal() {
  const [show, setShow] = useState(false);
  const [isRegisterSelectCLient, setIsRegisterSelectClient] =
    useState<boolean>(true);
  const [isRegisterSelectAdvertiser, isSetRegisterSelectAdvertiser] =
    useState<boolean>(false);

  const handleRegisterSelectClient = () => {
    setIsRegisterSelectClient(true);
    isSetRegisterSelectAdvertiser(false);
  };

  const handleRegisterSelectAdvertiser = () => {
    isSetRegisterSelectAdvertiser(true);
    setIsRegisterSelectClient(false);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const form = useForm<ISignInClient>({
    mode: "onChange",
    resolver: yupResolver(AuthSignInClientValidator),
  });

  const onSubmit: SubmitHandler<ISignInClient> = (data) => {
    console.log(data);
  };

  return (
    <>
      <Button onClick={handleShow}>Entrar</Button>

      <Modal show={show} onHide={handleClose} centered>
        <form>
          <Modal.Header closeButton>
            <Modal.Title>
              <S.MessageTitle>Crie sua conta agora</S.MessageTitle>
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

            <FormProvider {...form}>
              <SignInClientForm onSubmit={onSubmit} />
            </FormProvider>
          </Modal.Body>
        </form>
      </Modal>
    </>
  );
}

export default SignInModal;
