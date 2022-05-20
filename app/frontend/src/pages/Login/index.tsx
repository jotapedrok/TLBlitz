import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../services/auth';
import { authenticate } from '../../store/user.store';
import './style.scss';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authorization = async () => {
    const token = localStorage.getItem('TLBTK_');
    if (token) {
      const authTest = await auth(token);
      if (authTest) {
        dispatch(authenticate(token));
        navigate('/');

      }
    }
  };

  useEffect(() => {
    authorization();
  }, []);
  return <div>Login</div>;
}
