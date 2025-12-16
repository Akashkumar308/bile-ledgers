
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import MainLayout from './components/layout/MainLayout';
import PrivateRoute from './components/shared/PrivateRoute';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import Sales from './pages/Sales';
import Expenses from './pages/Expenses';
import ProfitAndLoss from './pages/ProfitAndLoss';
import BikeServices from './pages/BikeServices';
import Card from './components/ui/Card';

const App: React.FC = () => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <Card className="text-center">
            <p>Loading Application...</p>
        </Card>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/login" element={currentUser ? <Navigate to="/" /> : <Login />} />
      <Route path="/register" element={currentUser ? <Navigate to="/" /> : <Register />} />
      <Route path="/forgot-password" element={currentUser ? <Navigate to="/" /> : <ForgotPassword />} />
      
      <Route element={<PrivateRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate replace to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/services" element={<BikeServices />} />
          <Route path="/reports/profit-loss" element={<ProfitAndLoss />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to={currentUser ? "/dashboard" : "/login"} />} />
    </Routes>
  );
};

export default App;