import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const PinContext = createContext();

const PinContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState([]);
  const [currentPin, setCurrentPin] = useState(null);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // Create an axios instance with default configs
  const api = axios.create({
    baseURL: backendUrl,
    withCredentials: true,
  });

  const creatPin = async () => {};

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
      console.log('fetch single pin response:', response.data);
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
    creatPin,
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
