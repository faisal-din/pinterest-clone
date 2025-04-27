import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from '../Components/Loading';
import { UserContext } from '../Context/UserContext';
import { PinContext } from '../Context/PinContext';

const PinPage = () => {
  const { user, loading } = useContext(UserContext);
  const {
    currentPin,
    fetchSinglePin,
    DeletePin,
    createComment,
    deleteComment,
    pinLikeButton,
    liked,
    likeCount,
  } = useContext(PinContext);

  const { pinId } = useParams();

  const [comment, setComment] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    fetchSinglePin(pinId);
  }, [pinId]);

  const handleLike = () => {
    pinLikeButton(pinId);
  };

  const handleCreateComment = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;
    createComment(comment, setComment, pinId);
  };

  const handleDeleteComment = (commentId) => {
    deleteComment(pinId, commentId);
  };

  const handleDeletePin = () => {
    DeletePin(pinId);
  };

  if (loading) return <Loading />;

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
    <div className='mx-5 md:mx-8 lg:mx-14 xl:mx-[72px] min-h-[60vh] flex items-center justify-center'>
      <div className='mt-16 flex flex-col md:flex-row items-stretch bg-white shadow-lg rounded-2xl overflow-hidden w-full max-w-6xl border border-gray-400'>
        {/* Image Section */}
        <div className='w-full md:w-1/2 h-96 md:h-auto max-h-screen'>
          <img
            src={currentPin.image}
            alt={currentPin.title}
            className='w-full h-full object-contain md:object-cover'
            loading='lazy'
          />
        </div>

        {/* Details Section */}
        <div className='w-full md:w-1/2 p-6 flex flex-col bg-amber-50 h-auto'>
          {/* Header (Likes & Save Button) */}
          <div className='flex items-center justify-between'>
            <div className='relative flex items-center space-x-4'>
              <button
                className='flex items-center space-x-2 cursor-pointer'
                onClick={handleLike}
              >
                <i
                  className={`fa-solid fa-heart text-xl ${
                    liked ? 'text-red-600' : 'text-gray-500'
                  }`}
                ></i>
                <p className='text-lg'>{likeCount}</p>
              </button>

              <button className='px-2 py-1 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors cursor-pointer'>
                <i className='fa-solid fa-share text-lg'></i>
              </button>

              <div className='relative'>
                <button
                  onClick={() => setVisible(!visible)}
                  className='px-2 py-1 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors cursor-pointer'
                >
                  <i className='fa-solid fa-ellipsis text-lg'></i>
                </button>
                <div
                  className={`absolute left-1 mt-2 w-36 bg-white border border-gray-300 rounded-md shadow-lg z-10 ${
                    visible ? 'block' : 'hidden'
                  }`}
                >
                  <ul className='py-2'>
                    <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                      Edit Pin
                    </li>
                    <li
                      onClick={handleDeletePin}
                      className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
                    >
                      Delete Pin
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <button className='px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors cursor-pointer'>
              Save
            </button>
          </div>

          {/* Title & User Info */}
          <div className='flex items-start justify-between mt-4'>
            <h1 className='text-3xl font-semibold'>
              {currentPin.title || 'Untitled Pin'}
            </h1>
          </div>

          {/* Creator */}
          {currentPin.owner && (
            <div className='flex items-center gap-3 mt-2'>
              <img
                src='https://i.pinimg.com/75x75_RS/64/e1/0d/64e10d9fd2565527c4651caace60e6cb.jpg'
                alt='Creator'
                className='w-8 h-8 rounded-full object-cover'
              />

              <div>
                <p className='font-medium'>{currentPin.owner.name}</p>
              </div>
            </div>
          )}

          {/* Description */}
          <p className='mt-4 text-lg'>
            {currentPin.description || 'No description provided'}
          </p>

          {/* Comments */}
          {currentPin.comments?.length > 0 && (
            <div className='mt-6'>
              <h3 className='text-lg font-medium mb-2'>
                Comments ({currentPin.comments.length})
              </h3>
              <div className='max-h-64 overflow-y-auto'>
                {currentPin.comments.map((comment, index) => (
                  <div key={index} className='py-3 border-b last:border-0 flex'>
                    <img
                      src='https://i.pinimg.com/75x75_RS/64/e1/0d/64e10d9fd2565527c4651caace60e6cb.jpg'
                      alt='User'
                      className='w-10 h-10 rounded-full object-cover'
                    />

                    <div className='ml-4 flex flex-col items-start'>
                      <span className='font-medium '>{comment.owner.name}</span>
                      <p className='text-base'>{comment.comment}</p>
                      <p className='text-sm text-gray-500'>
                        {comment.dateCreated}
                      </p>
                    </div>

                    {/* Delete button for comment */}
                    {comment.owner._id === user._id && (
                      <button
                        onClick={() => handleDeleteComment(comment._id)}
                        className='ml-auto text-red-500 hover:text-red-700 transition-colors cursor-pointer'
                      >
                        <i className='fa-solid fa-trash'></i>
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Input bar for add comment  */}
          <div className='mt-6 flex items-center gap-2'>
            <input
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              type='text'
              placeholder='Add a comment...'
              className='w-full px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring focus:ring-red-600'
            />
            <button
              onClick={handleCreateComment}
              disabled={!comment.trim()}
              className='p-2  rounded-full transition-colors cursor-pointer '
            >
              <i className='fa-solid fa-paper-plane text-xl text-red-500'></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PinPage;
