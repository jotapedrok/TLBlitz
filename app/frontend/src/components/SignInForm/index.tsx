import React, { ChangeEvent, FormEvent, useState } from 'react';
import { FiLock } from 'react-icons/fi';
import {
  Form,
  InputGroup,
  Row,
  Button,
  FormGroup,
  FormLabel,
  FormControl,
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }

    setValidated(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return (
    <Form className="container" noValidate onSubmit={handleSubmit}>
      <Row className="mt-3 mb-3">
        <FormGroup controlId="username">
          <FormLabel>Username</FormLabel>
          <FormControl
            name="username"
            onChange={handleChange}
            required
            type="text"
            placeholder="Username"
            minLength={3}
          />
          <FormControl.Feedback>Looks good!</FormControl.Feedback>
        </FormGroup>
        <FormGroup controlId="email">
          <FormLabel>Email</FormLabel>
          <FormControl
            name="email"
            onChange={handleChange}
            required
            type="email"
            placeholder="Email"
            isValid={validated}
            isInvalid={!validated}
          />
          <FormControl.Feedback>Looks good!</FormControl.Feedback>
        </FormGroup>
        <FormGroup controlId="password">
          <FormLabel>Password</FormLabel>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">
              <FiLock />
            </InputGroup.Text>
            <FormControl
              name="password"
              onChange={handleChange}
              type="password"
              placeholder="Password"
              aria-describedby="inputGroupPrepend"
              required
            />
            <FormControl.Feedback type="invalid">
              Please choose a password
            </FormControl.Feedback>
          </InputGroup>
        </FormGroup>
      </Row>
      {/* <FormGroup className="mb-3">
          <FormCheck
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting"
            feedbackType="invalid"
          />
        </FormGroup> */}
      <Button className="" type="submit">
        Sign In
      </Button>
    </Form>
  );
}
