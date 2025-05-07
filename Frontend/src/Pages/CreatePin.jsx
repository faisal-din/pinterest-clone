import React, { useContext, useState } from 'react';
import { PinContext } from '../Context/PinContext';
import { LoadingAnimation } from '../Components/Loading';
import { toast } from 'react-toastify';

const CreatePin = () => {
  const { createPin, loading } = useContext(PinContext);

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

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

  const createPinHandler = (e) => {
    e.preventDefault();

    if (!image) {
      toast.error('Please upload an image');
      return;
    }

    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', title);
    formData.append('category', category);
    formData.append('description', description);

    createPin(formData, setImage, setImagePreview, setTitle, setDescription);
  };

  return (
    <div className='container mx-auto px-4 py-8 max-w-4xl'>
      <h1 className='text-3xl font-bold text-center mb-8'>Create a New Pin</h1>
      <div className='bg-gray-100 shadow-2xl rounded-2xl overflow-hidden'>
        <div className='p-8 grid md:grid-cols-2 gap-8 items-center'>
          {/* Image Upload Section */}
          <div className='space-y-4'>
            <h2 className='text-2xl font-bold text-gray-800 mb-4'>
              Upload Image
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
                Choose File
              </label>
            </div>
          </div>

          {/* Form Section */}
          <>
            <form onSubmit={createPinHandler} className='space-y-6'>
              <div>
                <label
                  htmlFor='title'
                  className='block text-lg font-medium text-gray-700 mb-1'
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
                  htmlFor='category'
                  className='block text-lg font-medium text-gray-700 mb-1'
                >
                  Category
                </label>

                <select
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
                  className='w-full px-4 py-2 border border-gray-300 hover:border-gray-400 rounded-lg
                  focus:outline-none focus:ring-2 focus:ring-red-500'
                  name='category'
                  id='category'
                >
                  <option value=''>Select a category</option>
                  <option value='Art'>Art</option>
                  <option value='Food'>Food</option>
                  <option value='Travel'>Travel</option>
                  <option value='Fashion'>Fashion</option>
                  <option value='Technology'>Technology</option>
                  <option value='DIY and Crafts'>DIY and Crafts</option>
                  <option value='Fitness'>Fitness</option>
                  <option value='Home Decor'>Home Decor</option>
                  <option value='Photography'>Photography</option>
                  <option value='Nature'>Nature</option>
                  <option value='Others'>Others</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor='description'
                  className='block text-lg font-medium text-gray-700 mb-1'
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

              <button
                type='submit'
                className='w-full bg-red-600 text-white py-2 rounded-full 
                hover:bg-red-700 transition-colors font-semibold text-lg cursor-pointer'
              >
                {loading ? <LoadingAnimation /> : 'Create Pin'}
              </button>
            </form>
          </>
        </div>
      </div>
    </div>
  );
};

export default CreatePin;
