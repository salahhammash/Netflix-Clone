import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import ModalMovie from './ModalMovie';



function Movie(props) {

    const [showFlag, setShowFlag] = useState(false); 

    const [clickMovie, setClickMoviE] = useState({});
    //this state to get me the info that related to the same card 



    const handleShow = (item) => {
        setClickMoviE(item);

        setShowFlag(true);
    }

    const handleclose = () => {
        setShowFlag(false);
    }


    return (

        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${props.a.poster_path}`} />
                <Card.Body>
                    <Card.Title>{props.a.title}</Card.Title>
                    <Card.Text>
                        <p>{props.a.overview} </p>
                    </Card.Text>

                    <Button variant="primary" onClick={() => { handleShow(props.a) }}>Add to fav</Button>

                </Card.Body>

                <ModalMovie showFlag={showFlag} handleclose={handleclose} MovieData={clickMovie} />

                {/* showflag by defult is hideen (false), cuz of that we pass the showflag to the model to show me the modal inside the modalMOVIE   */}
{/* the same thing to use the handle close  */}


            </Card>
        </Col>


    );
}




export default Movie; 