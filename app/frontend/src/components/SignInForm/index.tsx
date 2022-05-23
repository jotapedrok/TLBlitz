import React, { ChangeEvent, FormEvent, useState } from 'react';
import { FiLock } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
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
import { IValidateSignForm } from '../../interfaces/IValidateSignForm.interface';
import { createUser } from '../../http/user';

export default function SignInForm() {
  const initalFormFiels: ISignFormField = {
    username: '',
    role: 'user',
    deleted: false,
    email: '',
    password: '',
  };
  const initialValidate: IValidateSignForm = {
    email: undefined,
    username: undefined,
    password: undefined,
  };
  const [formFields, setFormFields] = useState(initalFormFiels);
  const [isInvalid, setIsInvalid] = useState(initialValidate);
  const [error, setError] = useState(false);
  const [alert, setAlert] = useState('');

  const testFields = (email: string, username: string, password: string) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    setIsInvalid({
      email: !emailRegex.test(email),
      username: username.length < 3,
      password: password.length < 8,
    });
    return (
      emailRegex.test(email) && username.length >= 3 && password.length >= 8
    );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, username, password } = formFields;
    if (testFields(email, username, password)) {
      const response = await createUser(formFields);
      if (response.error) {
        setError(true);
        setAlert(response.error);
      } else {
        setAlert('User created!');
      }
      setFormFields({
        ...formFields,
        email: '',
        username: '',
        password: '',
      });
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  return (
    <>
      <Form className="container" noValidate onSubmit={handleSubmit}>
        <Row className="mt-3 mb-3">
          <FormGroup className="mb-3" controlId="username">
            <FormLabel>Username</FormLabel>
            <FormControl
              name="username"
              onChange={handleChange}
              required
              type="text"
              placeholder="Username"
              isInvalid={isInvalid.username}
            />
            <FormControl.Feedback type="invalid">
              Choose a valid Username(minimum 3 characteres)
            </FormControl.Feedback>
          </FormGroup>
          <FormGroup className="mb-3" controlId="email">
            <FormLabel>Email</FormLabel>
            <FormControl
              name="email"
              onChange={handleChange}
              required
              type="email"
              placeholder="Email"
              isInvalid={isInvalid.email}
            />
            <FormControl.Feedback type="invalid">
              Please choose a valid Email
            </FormControl.Feedback>
          </FormGroup>
          <FormGroup className="mb-3" controlId="password">
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
                isInvalid={isInvalid.password}
              />
              <FormControl.Feedback type="invalid">
                Please valid Password(minimum 8 characteres)
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
      <p style={{ color: error ? 'red' : 'green' }}>{alert}</p>
    </>
  );
}
