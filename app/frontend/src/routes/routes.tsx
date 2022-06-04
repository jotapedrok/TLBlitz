import { Routes, Route } from 'react-router-dom';
import SignInForm from '../components/SignInForm';
import Home from '../pages/Home';
import ListPage from '../pages/ListPage';
import Login from '../pages/Login';
import ProtectedRoute from './ProtectedRoute';

export default function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/sign-in" element={<SignInForm />} />
      <Route path="/list" element={<ListPage />} />
      <Route path="/" element={<Home />} />
      {/* <Route element={<ProtectedRoute />}></Route> */}
    </Routes>
  );
}
