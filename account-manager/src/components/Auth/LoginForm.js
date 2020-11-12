import React from 'react'
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function LoginForm() {
    const { login, errors, handleSubmit } = useForm();
    const onSubmit = data => {
        alert(JSON.stringify(data));
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default LoginForm
