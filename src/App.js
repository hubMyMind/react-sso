import { React } from 'react';
import LoginForm from './components/Login/LoginForm';
import PasswordRecoveryForm from './components/PasswordRecovery/PasswordRecoveryForm';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
      <div >
        <Routes>
          <Route  exact path="/login" element={<LoginForm />} />
          <Route  exact path="/reset-password" element={<PasswordRecoveryForm />} />
        </Routes>
      </div>
  );
}

export default App;
