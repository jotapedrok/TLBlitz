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
      localStorage.setItem('TLBTK_', responseLogin.token);
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

  const onSubmit = async (recivedEmail: string, recivedPassword: string) => {
    const response = await loginHttp(recivedEmail, recivedPassword);
    setResponseLogin(response);
  };
  return (
    <div>
      <div className='input-conteiners container'>
        <Form>
          <FormGroup className='mb-3' controlId='formBasicEmail'>
            <FormLabel>Email</FormLabel>
            <FormControl
              onChange={emailChange}
              type='email'
              placeholder='Enter email'
            />
          </FormGroup>
        </Form>
        <Form>
          <FormGroup className='mb-3' controlId='Password'>
            <FormLabel>Password</FormLabel>
            <FormControl
              onChange={passwordChange}
              type='password'
              placeholder='Password'
            />
          </FormGroup>
        </Form>
        {responseLogin.error && (
          <p style={{ color: 'red' }}>{responseLogin.error}</p>
        )}
        <Button
          onSubmit={() => onSubmit(email, password)}
          variant='primary'
          type='submit'
        >
          Enter
        </Button>
        <Button
          onClick={e => {
            e.preventDefault();
            navigate('/sign-in');
          }}
          variant='secondary'
        >
          Sign In
        </Button>
      </div>
    </div>
  );
}
