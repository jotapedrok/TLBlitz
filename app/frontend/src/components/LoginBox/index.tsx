import React, { ChangeEvent, useEffect, useState } from 'react';
import {
  FormControl,
  FormGroup,
  FormLabel,
  Button,
  Form,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginHttp } from '../../http/user';
import { IResponseApi } from '../../interfaces/IResponseApi.interface';
import { login } from '../../store/user.store';
import './style.scss';

export default function LoginBox() {
  const initalResponst: IResponseApi = {};
  const [responseLogin, setResponseLogin] = useState(initalResponst);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (responseLogin.token) {
      dispatch(login(responseLogin.token));
      navigate('/');
    }
  }, [responseLogin]);

  const emailChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.target;
    setEmail(value);
  };

  const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
  };

  const onSubmit = async (email: string, password: string) => {
    const response = await loginHttp(email, password);
    setResponseLogin(response);
  };
  return (
    <div>
      <div className="input-conteiners container">
        <Form>
          <FormGroup className="mb-3" controlId="formBasicEmail">
            <FormLabel>Email address</FormLabel>
            <FormControl
              onChange={emailChange}
              type="email"
              placeholder="Enter email"
            />
          </FormGroup>
        </Form>
        <Form>
          <FormGroup className="mb-3" controlId="Password">
            <FormLabel>Email address</FormLabel>
            <FormControl
              onChange={passwordChange}
              type="password"
              placeholder="Password"
            />
          </FormGroup>
        </Form>
        {responseLogin.error && (
          <p style={{ color: 'red' }}>{responseLogin.error}</p>
        )}
        <Button
          onSubmit={() => onSubmit(email, password)}
          variant="primary"
          type="submit"
        >
          Enter
        </Button>
      </div>
    </div>
  );
}
