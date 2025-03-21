import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const userContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  const userRegister = async (name, email, password) => {
    try {
      const response = await axios.post(backendUrl + '/api/auth/register', {
        name,
        email,
        password,
      });
      console.log('register response:', response.data);
      if (response.data.success) {
        toast.success(response.data.message);
        navigate('/');
      }
    } catch (error) {
      console.error('Register error:', error);
      toast.error(error.response.data.message);
    }
  };

  const userLogin = async (email, password) => {
    try {
      const response = await axios.post(backendUrl + '/api/auth/login', {
        email,
        password,
      });
      console.log('login response:', response.data);
      if (response.data.success) {
        setUser(response.data.data);
        toast.success(response.data.message);
        navigate('/');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error(error.response.data.message);
    }
  };

  const userLogout = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/auth/logout');
      console.log('logout response:', response.data);
      if (response.data.success) {
        setUser(null);
        toast.success(response.data.message);
      }
    } catch (error) {
      console.error('Logout error:', error);
      toast.error(error.response.data.message);
    }
  };

  const fetchUser = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/auth/user', {
        withCredentials: true,
      });
      setUser(response.data.user);
    } catch (error) {
      setUser(null);
      console.log('Fetch User error: ', error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  // Check if user is already logged in (on page refresh)
  useEffect(() => {
    fetchUser();
  }, []);

  const value = {
    user,
    setUser,
    loading,
    setLoading,
    userRegister,
    userLogin,
    userLogout,
    fetchUser,
  };

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export default UserContextProvider;
