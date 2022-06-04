import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { auth } from '../services/auth';
import { RootState } from '../store';
import { authenticate } from '../store/user.store';

export default function ProtectedRoute() {
  const dispatch = useDispatch();

  const isAuth = useSelector((s: RootState) => s.user.isAuth);

  const authorization = async () => {
    const token = localStorage.getItem('TLBTK_');
    if (token) {
      const authTest = await auth(token);
      if (authTest) {
        dispatch(authenticate(token));
      }
    }
  };

  useEffect(() => {
    authorization();
  }, []);

  return isAuth ? <Outlet /> : <Navigate to='/login' />;
}
