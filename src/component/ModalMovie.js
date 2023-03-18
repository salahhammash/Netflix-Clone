
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

    const art = async (e) => {
        try {
            e.preventDefault();
            // to undo refresh on submit 


            const article = {
                title: props.MovieData.title,
                release_date: props.MovieData.release_date,
                poster_path: props.MovieData.poster_path,
                overview: props.MovieData.overview,
                comment: comments
            };
            const dataWait = await axios.post(`${process.env.REACT_APP_URLSERVER}/getMovies`, article)
            // setClientData(dataWait);
        }
        catch (error) {
            console.log("error");
        }
    }



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
                    {/* on submit just for forms , & well send event & do a refresh by defult */}

                    <Form.Group className="mb-3" >
                        <Form.Label >comment</Form.Label>
                        {/* to add a comment and prient it in the Data Base you should add a value & onchange */}
                        <Form.Control as="textarea" rows={3} value={comments} onChange={(ev) => {
                            setComment(ev.target.value)
                            // when the user chang or add some info to his form & take the info direct (onchange) using the (setter) that related to the same state & we should giv it a value and the value of it is the variable that inside the state 


                        }} />

                    </Form.Group>
                    <Button variant="secondary" onClick={props.handleclose}>
                        Close
                    </Button>

                    <button className='btn btn-primary' type="submit" onClick={props.handleclose}>Submit</button>
                </Form>

            </Modal.Footer>

        </Modal>


    )
}

export default ModalMovie;          