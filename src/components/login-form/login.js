import React from "react";
import { Form, Button, Container, Row, Col } from 'react-bootstrap'

import axios from 'axios';
import './login.css'

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.password = React.createRef();
        this.email = React.createRef();
    }

    onSumbit = async (e) => {
        e.preventDefault();
        axios.post(
            'http://127.0.0.1:3380/login',
            {
                email: this.email.current.value,
                password: this.password.current.value,
            },
        ).then(response => console.log(response.data))
        .catch(err => console.log(err.response.data));
    }

    render() {
        return (
            <Container className="Login-Form">
                <Row>
                    <Col sm={{ span: 6, offset: 3 }}>
                        <h3>Авторизация</h3>
                        <Form onSubmit={this.onSumbit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Почта" ref={this.email}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Пароль" ref={this.password}/>
                            </Form.Group>
                            <Button block type="submit">
                                Войти
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}