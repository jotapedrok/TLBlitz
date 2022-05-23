import { Routes, Route } from 'react-router-dom';
import SignInForm from '../components/SignInForm';
import Login from '../pages/Login';
import ProtectedRoute from './ProtectedRoute';

export default function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/sign-in" element={<SignInForm />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" />
        <Route path="/list" />
      </Route>
    </Routes>
  );
}
