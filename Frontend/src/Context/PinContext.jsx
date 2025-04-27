import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const PinContext = createContext();

const PinContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState([]);
  const [currentPin, setCurrentPin] = useState(null);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

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
      console.log('Error fetching single pin:', error.response);
    } finally {
      setLoading(false);
    }
  };

  const DeletePin = async () => {
    try {
      const response = await api.delete(`/api/pins/${currentPin._id}`);

      console.log('deleted pin response:', response.data);
      if (response.data.success) {
        toast.success('Pin deleted successfully');
        await fetchAllPins();
        navigate('/');
      }
    } catch (error) {
      console.log('Error deleting pin:', error.response.data);
      toast.error(error.response.data.message);
    }
  };

  const pinLikeButton = async (pinId) => {
    try {
      const response = await api.put(`/api/pins/${pinId}/toggleLike`);
      console.log('pin like resposne', response.data);

      if (response.data.success) {
        setLiked(response.data.liked);
        setLikeCount(response.data.pin.likes);
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
      // After creating a comment, fetch the updated pin data
      await fetchSinglePin(pinId);
      toast.success(data.message);
      setComment('');
    } catch (error) {
      console.log('Error creating comment:', error.response);
      toast.error(error.response.data.message);
    }
  };

  const deleteComment = async (pinId, commentId) => {
    try {
      const { data } = await api.delete(
        `/api/pins/${pinId}/comments/${commentId}`
      );
      // After deleting a comment, fetch the updated pin data
      await fetchSinglePin(currentPin._id);
      toast.success(data.message);
    } catch (error) {
      console.log('Error deleting comment:', error.response);
      toast.error(error.response.data.message);
    }
  };

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
    DeletePin,
    loading,
    setLoading,
    createComment,
    deleteComment,
    pinLikeButton,
    liked,
    likeCount,
  };

  return <PinContext.Provider value={values}>{children}</PinContext.Provider>;
};

export default PinContextProvider;
