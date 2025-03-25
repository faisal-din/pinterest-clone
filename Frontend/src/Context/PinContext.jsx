import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const PinContext = createContext();

const PinContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState([]);
  const [currentPin, setCurrentPin] = useState(null);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  // Create an axios instance with default configs
  const api = axios.create({
    baseURL: backendUrl,
    withCredentials: true,
  });

  const createPin = async (
    formData,
    setImage,
    setImagePreview,
    setTitle,
    setDescription,
    setTags
  ) => {
    setLoading(true);
    try {
      const response = await api.post('/api/pins/create', formData);

      if (response.data.success) {
        setPins([...pins, response.data.savedPin]);
        setImage(null);
        setImagePreview(null);
        setTitle('');
        setDescription('');
        setTags('');
        toast.success('Pin created successfully');

        // Redirect to home page
        navigate('/');
      }
    } catch (error) {
      console.log('Error creating pin:', error.response.data);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchAllPins = async () => {
    setLoading(true);
    try {
      const response = await api.get('/api/pins');
      if (response.data.success) {
        setPins(response.data.pins);
      }
    } catch (error) {
      console.log('Error fetching pins:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchSinglePin = async (pinId) => {
    setLoading(true);
    try {
      const response = await api.get(`/api/pins/${pinId}`);

      if (response.data.success) {
        setCurrentPin(response.data.pin);
      }
    } catch (error) {
      console.log('Error fetching single pin:', error);
    } finally {
      setLoading(false);
    }
  };
  const updatePin = async () => {};
  const DeletePin = async () => {};

  useEffect(() => {
    fetchAllPins();
  }, []);

  const values = {
    pins,
    setPins,
    createPin,
    currentPin,
    setCurrentPin,
    fetchAllPins,
    fetchSinglePin,
    updatePin,
    DeletePin,
    loading,
    setLoading,
  };

  return <PinContext.Provider value={values}>{children}</PinContext.Provider>;
};

export default PinContextProvider;
