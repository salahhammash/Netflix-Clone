import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import ModalMovie from './ModalMovie';



function Movie(props) {

    const [showFlag, setShowFlag] = useState(false); 

    const [clickMovie, setClickMoviE] = useState({});
    
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
            </Card>
        </Col>


    );
}




export default Movie; 