import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const PurchaseReceipt = ({ show, setShow, isId }) => {
  const { emptyCart } = useCartContext();

  const handleClose = (evt) => {
    evt.preventDefault();
    setShow(false);
    emptyCart();
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Compra finalizada</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <center>
            <h2>Gracias por elegirnos</h2>
            <h3>El ID de su orden es:</h3>
            <h3 className="text-primary">{isId}</h3>
          </center>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Link to="/">
            <Button variant="primary">Volver a comprar</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PurchaseReceipt;
