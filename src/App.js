import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { Login } from './Components/Login/Login';
import {UserStorage} from './UserContext';
import User from './Components/User/User';
import ProtectedRoute from './Components/Helper/ProtectedRoute';

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="login/*" element={<Login />}></Route>
            <ProtectedRoute path="conta/*" element={<User/>}></ProtectedRoute>
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
