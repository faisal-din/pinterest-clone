import axios from 'axios';
import { createContext, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const PinContext = createContext();

const PinContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState([]);
  const [currentPin, setCurrentPin] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  // Create API instance outside of render cycle to prevent recreation
  const api = useMemo(() => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    return axios.create({
      baseURL: backendUrl,
      withCredentials: true,
    });
  }, []);

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

  const fetchSinglePin = async (pinId, returnData = false) => {
    try {
      const response = await api.get(`/api/pins/${pinId}`);
      if (response.data.success) {
        if (returnData) return response.data.pin;
        setCurrentPin(response.data.pin);
      }
    } catch (error) {
      console.log('Error fetching single pin:', error.response);
    }
  };

  const createPin = async (
    formData,
    setImage,
    setImagePreview,
    setTitle,
    setDescription
  ) => {
    setLoading(true);
    try {
      const response = await api.post('/api/pins/create', formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        // Update the pins state with the new pin
        setPins((prevPins) => [...prevPins, response.data.savedPin]);

        // Reset form
        setImage(null);
        setImagePreview(null);
        setTitle('');
        setDescription('');

        toast.success('Pin created successfully');
        await fetchAllPins();
        navigate('/');
      }
    } catch (error) {
      console.log('Error creating pin:', error);
      toast.error(error.response?.data?.message || 'Error creating pin');
    } finally {
      setLoading(false);
    }
  };

  const updatePin = async (pinId, formData) => {
    setLoading(true);
    try {
      const response = await api.put(`/api/pins/${pinId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        toast.success('Pin updated successfully');
        await fetchSinglePin(pinId);
        navigate(`/pin/${pinId}`);
      }
    } catch (error) {
      console.error(
        'Error updating pin:',
        error.response?.data || error.message
      );
      toast.error(error.response?.data?.message || 'Error updating pin');
    } finally {
      setLoading(false);
    }
  };

  const deletePin = async (pinId) => {
    try {
      const response = await api.delete(`/api/pins/${pinId}`);

      if (response.data.success) {
        toast.success('Pin deleted successfully');
        await fetchAllPins();
        navigate('/');
      }
    } catch (error) {
      console.log('Error deleting pin:', error.response.data);
      toast.error(error.response?.data?.message || 'Error deleting pin');
    }
  };

  const togglePinLike = async (pinId) => {
    try {
      const response = await api.put(`/api/pins/${pinId}/toggleLike`);

      if (response.data.success) {
        // Update the currentPin if it is the same pin
        if (currentPin && currentPin._id === pinId) {
          setCurrentPin((prevPin) => ({
            ...prevPin,
            likes: response.data.pin.likes,
            likedBy: response.data.liked,
          }));
        }

        // Update the pins array if needed
        setPins((prevPins) =>
          prevPins.map((pin) =>
            pin._id === pinId
              ? {
                  ...pin,
                  likes: response.data.pin.likes,
                  likedBy: response.data.liked,
                }
              : pin
          )
        );
      }
    } catch (error) {
      console.error('Error liking pin:', error);
    }
  };

  const createComment = async (comment, setComment, pinId) => {
    try {
      const { data } = await api.post(`/api/pins/${pinId}/comments/create`, {
        comment,
      });
      toast.success(data.message);
      setComment('');
      await fetchSinglePin(pinId);
    } catch (error) {
      console.log('Error creating comment:', error.response);
      toast.error(error.response?.data?.message);
    }
  };

  const deleteComment = async (pinId, commentId) => {
    try {
      const { data } = await api.delete(
        `/api/pins/${pinId}/comments/${commentId}`
      );

      await fetchSinglePin(currentPin._id);
      toast.success(data.message);
    } catch (error) {
      console.log('Error deleting comment:', error.response);
    }
  };

  useEffect(() => {
    fetchAllPins();
  }, []);

  const values = {
    pins,
    setPins,
    currentPin,
    setCurrentPin,
    fetchAllPins,
    fetchSinglePin,
    createPin,
    updatePin,
    deletePin,
    loading,
    setLoading,
    createComment,
    deleteComment,
    togglePinLike,
    searchTerm,
    setSearchTerm,
  };

  return <PinContext.Provider value={values}>{children}</PinContext.Provider>;
};

export default PinContextProvider;
