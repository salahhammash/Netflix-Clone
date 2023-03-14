
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';

import React, { useState, useEffect } from 'react';
import axios from 'axios';


function ModalMovie(props) {

    const [articleId, setArticleId] = useState('');



    useEffect(() => {
        // POST request using axios inside useEffect React hook
        const article = {
            title: props.MovieData.title,
            release_date: props.MovieData.release_date,
            poster_path: props.MovieData.poster_path,
            overview: props.MovieData.overview,
            comment: props.MovieData.comment,
        };
        axios.post('https://movies-library-production-c3da.up.railway.app/getMovies', article)
            .then(response => setArticleId(response.data.id));

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);


    return (
        <Modal show={props.showFlag} onHide={props.handleclose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.MovieData.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Image src={`https://image.tmdb.org/t/p/w500/${props.MovieData.poster_path}`} width='100%'></Image>

            </Modal.Body>
            <Modal.Footer>
                <Form>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>comment</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
                <Button variant="secondary" onClick={props.handleclose}>
                    Close
                </Button>
                <Button variant="primary" onClick={articleId}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalMovie;