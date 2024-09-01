import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const client = axios.create({
  baseURL: "http://127.0.0.1:8000", // Adjust this to your backend's URL
});

function LoginPage({ setCurrentUser }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await client.post("/api/login/", { email, password });
      
      // Assuming the server returns a token and user data
      const { token, user } = response.data;

      // Store the token in localStorage (or sessionStorage)
      localStorage.setItem('authToken', token);

      // Set the current user
      setCurrentUser(user);

      // Redirect to the home page
      navigate('/');

      // Clear any previous error message
      setErrorMessage('');
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrorMessage('Wrong email address or password');
      } else {
        setErrorMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="auth-page-container">
      <div className="auth-page-content">
        <h2 className="auth-page-title">Login</h2>
        <Form onSubmit={handleSubmit} className="auth-form">
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter your email" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              className="auth-form-control"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Enter your password" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              className="auth-form-control"
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="auth-form-button">Login</Button>
          <div className="auth-form-footer">
            <Button variant="link" onClick={() => navigate('/register')} className="auth-form-link">
              Don't have an account? Register
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default LoginPage;
