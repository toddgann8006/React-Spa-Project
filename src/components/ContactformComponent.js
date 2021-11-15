import React, { Component } from "react";
import { Button, Label, Form, Col, FormGroup, Input, FormFeedback } from 'reactstrap';

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
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validate(name, email, phoneNum) {
        const errors = {
            name: '',
            email: '',
            phoneNum: ''
        };

        if (this.state.touched.name) {
            if (name.length < 2) {
                errors.name = 'Name must be at least 2 characters.';
            } else if (name.length > 15) {
                errors.name = 'Name must be 25 or less characters.';
            }
        }

        const reg = /^\d+$/;
        if (this.state.touched.phoneNum && !reg.test(phoneNum)) {
            errors.phoneNum = 'The phone number should contain only numbers.';
        }

        if (this.state.touched.email && !email.includes('@')) {
            errors.email = 'Email should contain a @';
        }
        return errors;
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        })
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
        const errors = this.validate(this.state.name, this.state.phoneNum, this.state.email);
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                    <Label htmlFor="name" md={2}>Name</Label>
                    <Col md={10}>
                        <Input type="text" id="name" name="name"
                            placeholder="Name"
                            value={this.state.name}
                            invalid={errors.name}
                            onBlur={this.handleBlur("name")}
                            onChange={this.handleInputChange} />
                    </Col>
                    <FormFeedback>{errors.name}</FormFeedback>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="phoneNum" md={2}>Phone</Label>
                    <Col md={10}>
                        <Input type="tel" id="phoneNum" name="phoneNum"
                            placeholder="Phone number"
                            value={this.state.phoneNum}
                            invalid={errors.phoneNum}
                            onBlur={this.handleBlur("phoneNum")}
                            onChange={this.handleInputChange} />
                        <FormFeedback>{errors.phoneNum}</FormFeedback>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="email" md={2}>Email</Label>
                    <Col md={10}>
                        <Input type="email" id="email" name="email"
                            placeholder="Email"
                            value={this.state.email}
                            invalid={errors.email}
                            onBlur={this.handleBlur("email")}
                            onChange={this.handleInputChange} />
                        <FormFeedback>{errors.email}</FormFeedback>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                    <Col md={10}>
                        <Input type="textarea" id="feedback" name="feedback"
                            rows="10"
                            value={this.state.feedback}
                            onChange={this.handleInputChange}></Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={{ size: 10, offset: 2 }}>
                        <Button type="submit" color="primary">
                            Send Feedback
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
};

export default Contactform;