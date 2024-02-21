// CustomModal.js
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const CustomModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="nav-text-item">
        Contact Form
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        scrollable={true}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScJiZninW-0HAY4fW7vJVHCr4NjhJ1oEyFFTXlSthzm-fEm7g/viewform?embedded=true" width="100%" height="500" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CustomModal;
