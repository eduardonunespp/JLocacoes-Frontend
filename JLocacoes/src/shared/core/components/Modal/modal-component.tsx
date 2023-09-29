import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FormProvider, SubmitHandler, useForm, useFormContext } from "react-hook-form";
import { Button } from "../../components";
import { RegisterFormCliente } from "./components/cadastro-cliente-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthSignUpClientValidator } from "../../domain-types";
import { ISignUpCliente } from "../..";
import * as S from "./modal-component-cadastro.styles";

function CadastroModal() {



  const [show, setShow] = useState(false);
  const [isRegisterSelectCLient, setIsRegisterSelectClient] = useState(true);
  const [isRegisterSelectAdvertiser, isSetRegisterSelectAdvertiser] =
    useState(false);

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

  const form = useForm<ISignUpCliente>({
    mode: "onChange",
    resolver: yupResolver(AuthSignUpClientValidator),
  });

  const onSubmit: SubmitHandler<ISignUpCliente> = (data) => {
    console.log(data);
  };

  return (
    <>
      <S.ButtonCadastro onClick={handleShow}>Cadastrar</S.ButtonCadastro>

      <Modal show={show} onHide={handleClose} centered>
        <form>
          <Modal.Header closeButton>
            <Modal.Title>Cadastro</Modal.Title>
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
              <RegisterFormCliente onSubmit={onSubmit} />
            </FormProvider>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Fechar
            </Button>
            <Button type="submit" disabled >Salvar</Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default CadastroModal;
