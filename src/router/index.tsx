import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../auth/ProtectedRoute';
import DashboardPage from '../pages/DashboardPage';
import LoginPage from '../pages/LoginPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <DashboardPage/>
          </ProtectedRoute>
        } />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
