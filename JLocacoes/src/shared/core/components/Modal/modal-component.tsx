import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "../../components";
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
        <Modal.Body><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam eos velit accusamus, cum perferendis soluta, cumque quas veritatis at reiciendis laudantium mollitia, iusto maxime distinctio odit? Officiis, animi ipsum? Ullam.</p></Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>Fechar</Button>
          <Button onClick={handleClose}>Salvar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CadastroModal;
