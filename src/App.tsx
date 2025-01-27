import { Routes, Route, Navigate } from 'react-router-dom';
import Signup from './pages/sign_up';
import ForgotPassword from './pages/ForgotPassword';
import Welcome from './pages/Welcome';
import Login from './pages/login'

function App() {
  return (
    <Routes>
       <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;