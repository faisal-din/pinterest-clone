import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PinContext } from '../Context/PinContext';
import { LoadingAnimation } from '../Components/Loading';
import { toast } from 'react-toastify';

const EditPinPage = () => {
  const { pinId } = useParams();
  const navigate = useNavigate();

  const { currentPin, fetchSinglePin, updatePin, loading } =
    useContext(PinContext);

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (!currentPin || currentPin._id !== pinId) {
      fetchSinglePin(pinId);
    }
  }, [pinId, fetchSinglePin, currentPin]);

  useEffect(() => {
    if (currentPin) {
      setTitle(currentPin.title || '');
      setDescription(currentPin.description || '');
      setImagePreview(currentPin.image || null);
    }
  }, [currentPin]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const updatePinHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();

    // Only append image if a new one was selected
    if (image) {
      formData.append('image', image);
    }

    formData.append('title', title);
    formData.append('description', description);

    updatePin(pinId, formData);
  };

  if (!currentPin) {
    return (
      <div className='flex flex-col items-center justify-center min-h-[60vh]'>
        <h2 className='text-2xl font-semibold text-red-600'>Pin not found</h2>
        <p className='mt-4'>
          The pin you're looking for doesn't exist or was removed.
        </p>
      </div>
    );
  }

  return (
    <div className='container mx-auto px-4 py-8 max-w-4xl'>
      <div className='bg-gray-100 shadow-2xl rounded-2xl overflow-hidden'>
        <h1 className='text-3xl font-bold text-center mb-8'>Update Pin</h1>
        <div className='p-8 grid md:grid-cols-2 gap-8 items-center'>
          {/* Image Upload Section */}
          <div className='space-y-4'>
            <h2 className='text-2xl font-bold text-gray-800 mb-4'>
              Update Image
            </h2>
            <div
              className='border-2 border-dashed border-red-300 rounded-2xl p-6 text-center 
              hover:border-red-500 transition-all duration-300 group'
            >
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt='Preview'
                  className='max-h-64 mx-auto object-contain rounded-lg'
                />
              ) : (
                <div className='text-gray-500 group-hover:text-red-500'>
                  <i className='fa-solid fa-cloud-upload text-6xl mb-4 block'></i>
                  <p className='text-lg'>Drag and drop or click to upload</p>
                </div>
              )}
              <input
                type='file'
                className='hidden'
                id='file-upload'
                onChange={handleImageUpload}
                accept='image/*'
              />
              <label
                htmlFor='file-upload'
                className='mt-4 inline-block px-6 py-2 bg-red-600 text-white 
                rounded-full hover:bg-red-700 transition-colors cursor-pointer'
              >
                {image ? 'Change Image' : 'Choose New Image'}
              </label>
            </div>
          </div>

          {/* Form Section */}
          <>
            <form onSubmit={updatePinHandler} className='space-y-6'>
              <div>
                <label
                  htmlFor='title'
                  className='block text-lg font-medium text-gray-700 mb-2'
                >
                  Title
                </label>
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  type='text'
                  id='title'
                  placeholder='Enter pin title'
                  className='w-full px-4 py-2 border border-gray-300 hover:border-gray-400 rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-red-500'
                />
              </div>

              <div>
                <label
                  htmlFor='description'
                  className='block text-lg font-medium text-gray-700 mb-2'
                >
                  Description
                </label>
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  id='description'
                  placeholder='Describe your pin...'
                  rows='5'
                  className='w-full px-4 py-2 border border-gray-300 hover:border-gray-400 rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-red-500 resize-none'
                ></textarea>
              </div>

              <div className='flex space-x-4'>
                <button
                  type='button'
                  onClick={() => navigate(`/pin/${pinId}`)}
                  className='w-1/3 bg-gray-300 text-gray-800 py-2 rounded-full 
                  hover:bg-gray-400 transition-colors font-semibold text-lg cursor-pointer'
                >
                  Cancel
                </button>

                <button
                  type='submit'
                  className='w-2/3 bg-red-600 text-white py-2 rounded-full 
                  hover:bg-red-700 transition-colors font-semibold text-lg cursor-pointer'
                >
                  {loading ? <LoadingAnimation /> : 'Update Pin'}
                </button>
              </div>
            </form>
          </>
        </div>
      </div>
    </div>
  );
};

export default EditPinPage;
