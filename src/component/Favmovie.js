import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import axios from 'axios';

import ModalFavmovie from './ModalFavmovie';

function Favmovie(props) {

    const newDATAfromUpdatereq = (arrData) => {

        props.newFun(arrData);
        // pass this function to chiled to un-refresh the page when do update
    }




    const [showFlag, setShowFlag] = useState(false);

    const [clickMovie, setClickMoviE] = useState({});
    //this state to get me the info that related to the same card 


    const handleShow = () => {
        setShowFlag(true);
    }

    const handleclose = () => {
        setShowFlag(false);
    }

    const DeletItem = async () => {
        const serverURL = `${process.env.REACT_APP_URLSERVER}/getMovies/${props.item.id}`;
        const deletButton = await axios.delete(serverURL)
        // befor invok the dana - in  server.js (backend) i should get the data from server (getHandler = query) & insert it inside the deletHandler 
        // then do newData1
        const newData1 = deletButton.data;
        props.newFun(newData1);

        //(newFun)this is the name of the function that i passed from parent
        // لما اعمل ديليت اون كليك بياخد اللي انحذف و برججع لل بيرنت باقي الداتا المحفوظة بالداتا بيز 
        // i should breng tha data that i want to delete it from the get that inside the parent using (newFun)
        // i can pass the data to parent from childe using props just by using (function)
        // we passd the the nefFun as props from the parent 

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


                        <Button variant="success" onClick={() => {
                            handleShow();
                            setClickMoviE(props.item)
                        }}>Update</Button>

                        <Button variant="danger" onClick={DeletItem}>Delete</Button>

                    </Card.Body>

                    {/* < showFlag={showFlag} handleclose={handleclose}  /> */}
                </Card>
            </Col>



            <ModalFavmovie MovieData={clickMovie} handleclose={handleclose} handleShow={handleShow} showFlag={showFlag}
                secfun={newDATAfromUpdatereq} />
        </>
    )
}

export default Favmovie