import React, { FormEvent, useState } from 'react';
import {
  Col,
  Form,
  InputGroup,
  Row,
  Button,
  FormGroup,
  FormLabel,
  FormControl,
  FormCheck,
} from 'react-bootstrap';
import { ISignFormField } from '../../interfaces/ISIgnFormField.interface';
import './style.scss';

export default function SignInForm() {
  const initalFormFiels: ISignFormField = {
    username: '',
    role: 'user',
    deleted: false,
    email: '',
    password: '',
  };
  const [formFields, setFormFields] = useState(initalFormFiels);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    console.log(form.checkValidity());
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="container">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <FormGroup as={Col} md="4" controlId="validationCustom01">
            <FormLabel>First name</FormLabel>
            <FormControl
              required
              type="text"
              placeholder="First name"
              defaultValue="Mark"
            />
            <FormControl.Feedback>Looks good!</FormControl.Feedback>
          </FormGroup>
          <FormGroup as={Col} md="4" controlId="validationCustom02">
            <FormLabel>Last name</FormLabel>
            <FormControl
              required
              type="text"
              placeholder="Last name"
              defaultValue="Otto"
            />
            <FormControl.Feedback>Looks good!</FormControl.Feedback>
          </FormGroup>
          <FormGroup as={Col} md="4" controlId="validationCustomUsername">
            <FormLabel>Username</FormLabel>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <FormControl
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
              />
              <FormControl.Feedback type="invalid">
                Please choose a username
              </FormControl.Feedback>
            </InputGroup>
          </FormGroup>
        </Row>
        <Row className="mb-3">
          <FormGroup as={Col} md="6" controlId="validationCustom03">
            <FormLabel>City</FormLabel>
            <FormControl type="text" placeholder="City" required />
            <FormControl.Feedback type="invalid">
              Please provide a valid city
            </FormControl.Feedback>
          </FormGroup>
          <FormGroup as={Col} md="3" controlId="validationCustom04">
            <FormLabel>State</FormLabel>
            <FormControl type="text" placeholder="State" required />
            <FormControl.Feedback type="invalid">
              Please provide a valid state
            </FormControl.Feedback>
          </FormGroup>
          <FormGroup as={Col} md="3" controlId="validationCustom05">
            <FormLabel>Zip</FormLabel>
            <FormControl type="text" placeholder="Zip" required />
            <FormControl.Feedback type="invalid">
              Please provide a valid zip
            </FormControl.Feedback>
          </FormGroup>
        </Row>
        <FormGroup className="mb-3">
          <FormCheck
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting"
            feedbackType="invalid"
          />
        </FormGroup>
        <Button type="submit">Submit form</Button>
      </Form>
    </div>
  );
}
