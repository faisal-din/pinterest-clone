import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [btnloading, setBTnLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const unsplashKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
  const navigate = useNavigate();

  // Create an axios instance with default configs
  const api = axios.create({
    baseURL: backendUrl,
    withCredentials: true,
  });

  const userRegister = async (name, email, password) => {
    setBTnLoading(true);
    try {
      const response = await api.post('/api/auth/register', {
        name,
        email,
        password,
      });

      console.log('register response:', response.data);

      if (response.data.success) {
        toast.success(response.data.message);
        setUser(response.data.user);
        setIsAuthenticated(true);
        navigate('/');
      }
    } catch (error) {
      console.log('Registration error:', error);
      const errorMessage =
        error.response?.data?.message || 'Registration failed';
      toast.error(errorMessage);
    } finally {
      setBTnLoading(false);
    }
  };

  const userLogin = async (email, password) => {
    try {
      setBTnLoading(true);
      const response = await api.post('/api/auth/login', {
        email,
        password,
      });

      if (response.data.success) {
        // Extract user data but filter out password
        const { password, ...userData } = response.data.user;
        setUser(userData);
        setIsAuthenticated(true);
        toast.success(response.data.message);
        navigate('/');
      }
    } catch (error) {
      console.error('Login error:', error.response);
      const errorMessage = error.response?.data?.message || 'Login failed';
      toast.error(errorMessage);
    } finally {
      setBTnLoading(false);
    }
  };

  const userLogout = async () => {
    try {
      setBTnLoading(true);
      const response = await api.post('/api/auth/logout');

      console.log('logout response:', response.data);
      if (response.data.success) {
        setUser(null);
        setIsAuthenticated(false);
        toast.success(response.data.message);
        navigate('/login');
      }
    } catch (error) {
      console.error('Logout error:', error);
      toast.error(error.response.data.message);
    } finally {
      setBTnLoading(false);
    }
  };

  const fetchUser = async () => {
    try {
      setLoading(true);
      const response = await api.get('/api/auth/user');

      if (response.data.success) {
        setUser(response.data.user);
        setIsAuthenticated(true);
      }
    } catch (error) {
      setUser(null);
      setIsAuthenticated(false);
      console.log('Fetch User error: ', error);
      toast.error(error.message);
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
    btnloading,
    setBTnLoading,
    userRegister,
    userLogin,
    userLogout,
    fetchUser,
    isAuthenticated,
    setIsAuthenticated,
    unsplashKey,
    backendUrl,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
