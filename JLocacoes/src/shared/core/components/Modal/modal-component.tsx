import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Input } from "../../components";
import * as S from "./modal-component-cadastro.styles";

function CadastroModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <S.ButtonCadastro onClick={handleShow}>Cadastrar</S.ButtonCadastro>

      <Modal show={show} onHide={handleClose} centered >
        <Modal.Header closeButton>
          <Modal.Title>Autenticação</Modal.Title>
        </Modal.Header>
        <Modal.Body>


        <Input placeholder="Entre com seu email" label="Email:" type="text" id=""  />
        <Input placeholder="Entre com sua senha" label="Senha:" type="password" id=""  />
        <Input placeholder="Comfirme sua senha" label="Confirmação de Senha:" type="password" id=""  />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>Fechar</Button>
          <Button onClick={handleClose}>Salvar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CadastroModal;
