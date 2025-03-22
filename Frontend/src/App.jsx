import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Explore from './Pages/Explore';
import Profile from './Pages/Profile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from './Pages/LandingPage';
import { useContext } from 'react';
import { userContext } from './Context/userContext';

function App() {
  const { user } = useContext(userContext);

  return (
    <div>
      <ToastContainer />

      <Navbar />

      <Routes>
        <Route path='/' element={user ? <Home /> : <LandingPage />} />
        <Route path='/explore' element={!user && <Explore />} />
        <Route path='/profile' element={user && <Profile />} />
        <Route path='/login' element={!user && <Login />} />
        <Route path='/signup' element={!user && <SignUp />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
