import { Navigate, Route, Routes } from 'react-router-dom';
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
import { UserContext } from './Context/UserContext';
import { Loading } from './Components/Loading';
import PinPage from './Pages/PinPage';
import CreatePin from './Pages/CreatePin';

function App() {
  const { user, isAuthenticated, loading } = useContext(UserContext);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ToastContainer />
          <Navbar user={user} />
          <Routes>
            <Route
              path='/'
              element={isAuthenticated ? <Home /> : <LandingPage />}
            />
            <Route
              path='/explore'
              element={!isAuthenticated ? <Explore /> : <Navigate to='/' />}
            />
            <Route path='create-pin' element={<CreatePin />} />
            <Route path='/pin/:pinId' element={<PinPage />} />
            <Route
              path='/login'
              element={isAuthenticated ? <Navigate to='/' /> : <Login />}
            />
            <Route
              path='/signup'
              element={isAuthenticated ? <Navigate to='/' /> : <SignUp />}
            />
            <Route
              path='/profile'
              element={isAuthenticated ? <Profile /> : <Navigate to='/login' />}
            />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
