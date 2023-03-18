import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import axios from 'axios';

import ModalFavmovie from './ModalFavmovie';

function Favmovie(props) {

    

    const newDATAfromUpdatereq = (arrData) =>{

        props.newFun(arrData);
      }
      
      



    const [showFlag, setShowFlag] = useState(false);

    const [clickMovie, setClickMoviE] = useState({});

    const handleShow = () => {
        setShowFlag(true);
    }

    const handleclose = () => {
        setShowFlag(false);
    }

    const DeletItem = async () => {
        const serverURL = `https://movies-library-production-c3da.up.railway.app/getMovies/${props.item.id}`;
        const deletButton = await axios.delete(serverURL)
        const newData1 = deletButton.data;
        props.newFun(newData1);
    }
    return (
        <>

            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${props.item.poster_path}`} />
                    <Card.Body>
                        <Card.Title>{props.item.title}</Card.Title>
                        <Card.Text>
                            <p>{props.item.comment} </p>
                        </Card.Text>
                        {/* <Button variant="primary" onClick={() => { handleShow() }}>Add to fav</Button> */}
                        <Button variant="success" onClick={()=>{
                            handleShow();
                            setClickMoviE(props.item)
                        }}>Update</Button>{' '}

                        <Button variant="danger" onClick={DeletItem}>Delete</Button>{' '}

                    </Card.Body>

                    {/* < showFlag={showFlag} handleclose={handleclose}  /> */}
                </Card>
            </Col>



            <ModalFavmovie MovieData={clickMovie} handleclose={handleclose} handleShow={handleShow} showFlag={showFlag}  secfun={newDATAfromUpdatereq}/>
        </>
    )
}

export default Favmovie