import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Alert } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

const Contact = () => {
    // const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('api/contact/', { name, email, message });
            if (response.status === 201) {
                setSuccessMessage('Your message has been sent successfully!');
                setName('');
                setEmail('');
                setMessage('');
                setErrorMessage('');
            }
        } catch (error) {
            setSuccessMessage('');
            if (error.response && error.response.data) {
                setErrorMessage('There was an error sending your message. Please try again.');
            } else {
                setErrorMessage('An unexpected error occurred. Please try again.');
            }
        }
    };

    return (
        <div className="contact-page">
            <h2>Contact Us</h2>
            <p>If you have any questions or comments, please fill out the form below, and we will get back to you as soon as possible.</p>
            <Form onSubmit={handleSubmit}>
                {successMessage && <Alert variant="success">{successMessage}</Alert>}
                {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={9}
                        placeholder="Enter your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Send Message
                </Button>
            </Form>
        </div>
    );
};

export default Contact;
