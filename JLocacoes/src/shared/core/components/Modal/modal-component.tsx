import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../components";
import { RegisterFormCliente } from "./components/cadastro-cliente-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthSignUpClientValidator } from "../../domain-types";
import { ISignUpCliente } from "../..";
import * as S from "./modal-component-cadastro.styles";

function CadastroModal() {
  const [show, setShow] = useState(false);

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
        <Modal.Header closeButton>
          <Modal.Title>Autenticação</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormProvider {...form}>
            <RegisterFormCliente onSubmit={onSubmit} />
          </FormProvider>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Fechar
          </Button>
          <Button onClick={handleClose}>Salvar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CadastroModal;
