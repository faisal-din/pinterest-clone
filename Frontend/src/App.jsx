import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Explore from './Pages/Explore';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from './Pages/LandingPage';
import { useContext } from 'react';
import { UserContext } from './Context/UserContext';
import { Loading } from './Components/Loading';
import PinPage from './Pages/PinPage';
import CreatePin from './Pages/CreatePin';
import EditPinPage from './Pages/EditPinPage';
import MyProfile from './Pages/MyProfile';
import EditMyProfile from './Pages/EditMyProfile';
import CategoryPage from './Pages/CategoryPage';
import UserProfile from './Pages/UserProfile';

function App() {
  const { currentUser, isAuthenticated, loading } = useContext(UserContext);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ToastContainer />
          <Navbar user={currentUser} />
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
            <Route path='/edit-pin/:pinId' element={<EditPinPage />} />
            <Route path='/category/:categoryName' element={<CategoryPage />} />
            <Route
              path='/login'
              element={isAuthenticated ? <Navigate to='/' /> : <Login />}
            />
            <Route
              path='/signup'
              element={isAuthenticated ? <Navigate to='/' /> : <SignUp />}
            />
            <Route
              path='/myprofile'
              element={
                isAuthenticated ? <MyProfile /> : <Navigate to='/login' />
              }
            />
            <Route
              path='/edit-myprofile'
              element={
                isAuthenticated ? <EditMyProfile /> : <Navigate to='/login' />
              }
            />
            <Route
              path='/user/:userId'
              element={
                isAuthenticated ? <UserProfile /> : <Navigate to='/login' />
              }
            />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
