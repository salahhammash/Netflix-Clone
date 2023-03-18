import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

function FavList() {

  const [updateIsDone, setUpdate] = useState(false)
  const [show, setShow] = useState(false);

  const handleClose = () => 
  {setShow(false);
  }
  const handleShow = () => 
  {setShow(true);
  }

  const showMore = () => {
 

  }

  const UpdateItem = () => {

    console.log("done");

    setUpdate(true)
  }
  const DeletItem = () => {

    console.log("deleted");
  }


  return (
    <div>


<Button variant="primary" onClick={handleShow}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Button>



    

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
       
        <Button variant="success" onClick={UpdateItem}>Update</Button>{' '}
        
        <Button variant="danger" onClick={DeletItem}>Delete</Button>{' '}

      </Modal.Footer>
    </Modal>


    </div >
  );
}
export default FavList