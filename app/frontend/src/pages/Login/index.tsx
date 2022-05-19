import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authenticate } from '../../store/user.store';
import './style.scss';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const auth = () => {
    const token = localStorage.getItem('TLBTK_');
    if (token) {
      //testAuthentication
      dispatch(authenticate(token));
      navigate('/');
    }
  }

  useEffect(() => {
    auth();
  }, []);
  return <div>Login</div>;
}
