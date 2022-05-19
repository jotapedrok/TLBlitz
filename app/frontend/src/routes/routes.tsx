import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

export default function Router() {
  return (
    <Routes>
      <Route path="/login" />
      <Route path='/sign-in' />
      <Route element={<ProtectedRoute />}>
      </Route>
    </Routes>
  );
}
