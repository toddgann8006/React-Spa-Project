import React, { Component } from "react";
import { Button, Label, Col, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contactform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            phoneNum: '',
            feedback: '',
            touched: {
                name: false,
                email: false,
                phoneNum: false
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(values) {
        console.log('Current state is: ' + JSON.stringify(values));
        alert('Current state is: ' + JSON.stringify(values));
    }

    render() {
        return (
            <LocalForm onSubmit={values => this.handleSubmit(values)}>
                <Row className="form-group">
                    <Label htmlFor="name" md={2}>Name</Label>
                    <Col md={10}>
                        <Control.text model=".name" id="name" name="name"
                            placeholder="Name"
                            className="form-control"
                            validators={{
                                required,
                                minLength: minLength(2),
                                maxLength: maxLength(25)
                            }}
                        />
                        <Errors
                            className="text-danger"
                            model=".name"
                            show="touched"
                            component="div"
                            messages={{
                                required: 'Required',
                                minLength: 'Must be at least 2 characters',
                                maxLength: 'Must be 15 characters or less'
                            }}
                        />
                    </Col>
                </Row>
                <Row className="form-group">
                    <Label htmlFor="phoneNum" md={2}>Phone</Label>
                    <Col md={10}>
                        <Control.text model=".phoneNum" id="phoneNum" name="phoneNum"
                            placeholder="Phone number"
                            className="form-control"
                            validators={{
                                required,
                                minLength: minLength(10),
                                maxLength: maxLength(15),
                                isNumber
                            }}
                        />
                        <Errors
                            className="text-danger"
                            model=".phoneNum"
                            show="touched"
                            component="div"
                            messages={{
                                required: "Required",
                                minLength: "Must be at least 10 numbers",
                                maxLength: "Must be 15 numbers or less",
                                isNumber: "Must be a number"
                            }}
                        />
                    </Col>
                </Row>
                <Row className="form-group">
                    <Label htmlFor="email" md={2}>Email</Label>
                    <Col md={10}>
                        <Control.text model=".email" id="email" name="email"
                            placeholder="Email"
                            className="form-control"
                            validators={{
                                required,
                                validEmail
                            }}
                        />
                        <Errors
                            className="text-danger"
                            model=".email"
                            show="touched"
                            component="div"
                            messages={{
                                required: "Required",
                                validEmail: 'Invalid email address'
                            }}
                        />
                    </Col>
                </Row>
                <Row className="form-group">
                    <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                    <Col md={10}>
                        <Control.textarea model=".feedback" id="feedback" name="feedback"
                            rows="10"
                            className="form-control"
                        />
                    </Col>
                </Row>
                <Row className="form-group">
                    <Col md={{ size: 10, offset: 2 }}>
                        <Button type="submit" color="primary">
                            Send Feedback
                        </Button>
                    </Col>
                </Row>
            </LocalForm>
        )
    }
};

export default Contactform;