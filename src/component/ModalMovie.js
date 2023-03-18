
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
// import React from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';



function ModalMovie(props) {

    const [comments, setComment] = useState("")
    // to add comment 

    const [clientData, setClientData] = useState([])

   




    const art = async (e) => {
        try {
            e.preventDefault();
            const article = {
                title: props.MovieData.title,
                release_date: props.MovieData.release_date,
                poster_path: props.MovieData.poster_path,
                overview: props.MovieData.overview,
                comment: comments
            };
            const dataWait = await axios.post('https://movies-library-production-c3da.up.railway.app/getMovies', article)
            // setClientData(dataWait);
        }
        catch (error) {
            console.log("error");
        }
    }
    useEffect(() => {
        art();
    }, [clientData])


    return (
        <Modal show={props.showFlag} onHide={props.handleclose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.MovieData.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Image src={`https://image.tmdb.org/t/p/w500/${props.MovieData.poster_path}`} width='100%'></Image>

            </Modal.Body>
            <Modal.Footer>
                <Form onSubmit={art}>

                    <Form.Group className="mb-3" >
                        <Form.Label >comment</Form.Label>
                        {/* to add a comment and prient it in the Data Base you should add a value & onchange */}
                        <Form.Control as="textarea" rows={3} value={comments} onChange={(ev) => {
                            setComment(ev.target.value)
                        }} />

                    </Form.Group>
                    <Button variant="secondary" onClick={props.handleclose}>
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={articleId}>
                        Save Changes
                    </Button> */}

                    <button className='btn btn-primary' type="submit" onClick={props.handleclose}>Submit</button>
                </Form>

            </Modal.Footer>
        </Modal>


    )
}

export default ModalMovie;