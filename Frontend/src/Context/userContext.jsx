import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const userContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  // Create an axios instance with default configs
  const api = axios.create({
    baseURL: backendUrl,
    withCredentials: true,
  });

  const userRegister = async (name, email, password) => {
    setLoading(true);
    try {
      const response = await api.post('/api/auth/register', {
        name,
        email,
        password,
      });

      console.log('register response:', response.data);

      if (response.data.success) {
        toast.success(response.data.message);
        // Automatically fetch user after registration
        await fetchUser();
        navigate('/');
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || 'Registration failed';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const userLogin = async (email, password) => {
    try {
      setLoading(true);
      const response = await api.post('/api/auth/login', {
        email,
        password,
      });

      console.log('login response:', response);
      if (response.data.success) {
        // Extract user data but filter out password
        const { password, ...userData } = response.data.user;
        setUser(userData);
        setIsAuthenticated(true);
        toast.success(response.data.message);
        navigate('/');
      }
    } catch (error) {
      console.error('Login error:', error);
      const errorMessage = error.response?.data?.message || 'Login failed';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const userLogout = async () => {
    try {
      setLoading(true);
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
      setLoading(false);
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
    userRegister,
    userLogin,
    userLogout,
    fetchUser,
    isAuthenticated,
  };

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export default UserContextProvider;
