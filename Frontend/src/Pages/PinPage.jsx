import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from '../Components/Loading';
import { UserContext } from '../Context/UserContext';
import { PinContext } from '../Context/PinContext';
import CommentItem from '../Components/CommentItem';

const PinPage = () => {
  const { user, loading, navigate } = useContext(UserContext);
  const {
    currentPin,
    fetchSinglePin,
    DeletePin,
    createComment,
    deleteComment,
    pinLikeButton,
  } = useContext(PinContext);

  const { pinId } = useParams();

  const [comment, setComment] = useState('');
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    fetchSinglePin(pinId);
  }, [pinId, fetchSinglePin]);

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

  const handleUpdatePin = () => {
    setMenuVisible(false);
    navigate(`/edit-pin/${pinId}`);
  };

  // Check if current user is the pin owner
  const isOwner = user && currentPin.owner && user._id === currentPin.owner._id;

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
        <div className='w-full md:w-1/2 p-4 flex flex-col bg-amber-50 h-auto'>
          {/* Header (Likes & Save Button) */}
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-4'>
              <button
                className='flex items-center space-x-2 cursor-pointer'
                onClick={handleLike}
              >
                <i
                  className={`fa-solid fa-heart text-xl ${
                    currentPin.likedBy ? 'text-red-600' : 'text-gray-500'
                  }`}
                ></i>
                <p className='text-lg'>{currentPin.likes}</p>
              </button>

              <button className='px-2 py-1 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors cursor-pointer'>
                <i className='fa-solid fa-share text-lg'></i>
              </button>

              {isOwner && (
                <div className='relative'>
                  <button
                    onClick={() => setMenuVisible(!menuVisible)}
                    className='px-2 py-1 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors cursor-pointer'
                  >
                    <i className='fa-solid fa-ellipsis text-lg'></i>
                  </button>
                  {menuVisible && (
                    <div className='absolute left-1 mt-2 w-36 bg-white border border-gray-300 rounded-md shadow-lg z-10'>
                      <ul className='py-2'>
                        <li
                          onClick={handleUpdatePin}
                          className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
                        >
                          Edit Pin
                        </li>
                        <li
                          onClick={handleDeletePin}
                          className='px-4 py-2 text-red-600 hover:bg-gray-100 cursor-pointer'
                        >
                          Delete Pin
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              )}
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
            <div className='mt-5'>
              <h3 className='text-lg font-medium mb-2'>
                Comments ({currentPin.comments.length || 0} )
              </h3>
              <div className='max-h-44 overflow-y-auto'>
                {currentPin.comments.map((commentData) => (
                  <CommentItem
                    key={commentData._id}
                    commentData={commentData}
                    onDelete={handleDeleteComment}
                    currentUserId={user._id}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Input bar for add comment  */}
          <form
            onSubmit={handleCreateComment}
            className='mt-6 flex items-center gap-2'
          >
            <input
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              type='text'
              placeholder='Add a comment...'
              className='w-full px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring focus:ring-red-600'
            />
            <button
              type='submit'
              disabled={!comment.trim()}
              className='p-2 rounded-full transition-colors cursor-pointer'
            >
              <i className='fa-solid fa-paper-plane text-xl text-red-500'></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PinPage;
