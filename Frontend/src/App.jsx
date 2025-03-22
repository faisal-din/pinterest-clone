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
import { userContext } from './Context/userContext';
import { Loading } from './Components/Loading';

function App() {
  const { user, isAuthenticated, loading } = useContext(userContext);

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
