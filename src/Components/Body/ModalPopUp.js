import React from 'react'
import { Modal, Button } from 'react-bootstrap'

function ModalPopUp() {
  const [isShow, invokeModal] = React.useState(!false)
  const initModal = () => {
    return invokeModal(false)
  }
  
  return (
    <>
      <div>
        <Modal show={isShow} size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered>
            <Modal.Header className='Mtitle' onLoad={initModal}>
              <Modal.Title>
                <a href='/'><img src="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Pharma+Main+Logo.png" alt="logo"></img></a>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h3>A Cellix Bio Pharma Company</h3>
                <h4>Cellix Bio Pharma completes the acquisition of Avaca Pharma</h4>
                <a href='http://cellixbio.info'><img src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/CellixBio.Icon.png" alt="logo"></img></a>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={initModal}>Close</Button>
            </Modal.Footer>
          </Modal>
      </div>
    </>
  )
}

export default ModalPopUp;