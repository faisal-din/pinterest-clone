import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [currentUser, setCurrentUser] = useState([null]);
  const [loading, setLoading] = useState(false);
  const [btnloading, setBTnLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

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

      if (response.data.success) {
        toast.success(response.data.message);
        setCurrentUser(response.data.user);
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
        setCurrentUser(userData);
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

      if (response.data.success) {
        setCurrentUser(null);
        setIsAuthenticated(false);
        toast.success(response.data.message);
        navigate('/');
      }
    } catch (error) {
      console.error('Logout error:', error);
      toast.error(error.response.data.message);
    } finally {
      setBTnLoading(false);
    }
  };

  const fetchMyProfile = async () => {
    try {
      setLoading(true);
      const response = await api.get('/api/auth/me');

      if (response.data.success) {
        setCurrentUser(response.data.user);
        setIsAuthenticated(true);
      }
    } catch (error) {
      setCurrentUser(null);
      setIsAuthenticated(false);
      console.log('Fetch Current User error: ', error);
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (formData) => {
    try {
      setLoading(true);
      const response = await api.put('/api/auth/profile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Important
        },
      });

      if (response.data.success) {
        await fetchMyProfile();
        toast.success('Profile updated successfully');
        navigate(`/myprofile`); // Redirect to profile page
      }
    } catch (error) {
      console.error(
        'Error updating user profile:',
        error.response?.data || error.message
      );
      toast.error(
        error.response?.data?.message || 'Error updating user profile'
      );
      setLoading(false);
    }
  };

  const toggleFollowUnfollow = async (userId) => {
    try {
      setLoading(true);
      const response = await api.put(`/api/auth/follow/${userId}`);

      console.log('Toggle Follow/Unfollow response:', response.data);

      if (response.data.success) {
        await fetchMyProfile();
        toast.success(response.data.message);
      }
    } catch (error) {
      console.error('Error toggling follow/unfollow:', error.response?.data);
      toast.error(
        error.response?.data?.message || 'Error toggling follow/unfollow'
      );
    } finally {
      setLoading(false);
    }
  };

  // Fetch user profile by ID
  const fetchUser = async (userId) => {
    try {
      const response = await api.get(`/api/auth/user/${userId}`);

      if (response.data.success) {
        setUser(response.data.user);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.log('Fetch User error: ', error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchMyProfile();
  }, []);

  const value = {
    currentUser,
    setCurrentUser,
    loading,
    setLoading,
    btnloading,
    setBTnLoading,
    userRegister,
    userLogin,
    userLogout,
    fetchMyProfile,
    isAuthenticated,
    setIsAuthenticated,
    backendUrl,
    navigate,
    updateProfile,
    toggleFollowUnfollow,
    fetchUser,
    user,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
