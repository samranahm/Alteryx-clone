// src/components/RegisterPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await client.post("/api/register/", { email, username, password });
      setErrorMessage(''); // Clear any previous error message
      navigate('/'); // Redirect to login page
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrorMessage('Registration failed. Please try again.');
      } else {
        setErrorMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="auth-page">
      <Form onSubmit={handleSubmit}>
        {errorMessage && <p className="text-danger">{errorMessage}</p>} {/* Display error message */}
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" value={username} onChange={e => setUsername(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">Register</Button>
        <Button variant="link" onClick={() => navigate('/login')}>
          Already have an account? Login
        </Button>
      </Form>
    </div>
  );
}

export default RegisterPage;
