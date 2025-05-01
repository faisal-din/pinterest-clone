import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from '../Components/Loading';
import { UserContext } from '../Context/UserContext';
import { PinContext } from '../Context/PinContext';
import CommentItem from '../Components/CommentItem';

const PinPage = () => {
  const { user, isAuthenticated, navigate } = useContext(UserContext);
  const {
    fetchSinglePin,
    deletePin,
    createComment,
    deleteComment,
    togglePinLike,
  } = useContext(PinContext);

  const { pinId } = useParams();

  const [comment, setComment] = useState('');
  const [menuVisible, setMenuVisible] = useState(false);
  const [localPin, setLocalPin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadPin = async () => {
      setLoading(true);
      const pinData = await fetchSinglePin(pinId, true); // pass flag to return data instead of setting context
      if (isMounted) {
        setLocalPin(pinData);
        setLoading(false);
      }
    };

    loadPin();

    return () => {
      isMounted = false;
    };
  }, [pinId, fetchSinglePin]);

  if (loading) return <Loading />;

  if (!localPin) {
    return (
      <div className='flex flex-col items-center justify-center min-h-[60vh]'>
        <h2 className='text-2xl font-semibold text-red-600'>Pin not found</h2>
        <p className='mt-4'>
          The pin you're looking for doesn't exist or was removed.
        </p>
      </div>
    );
  }

  const handleLike = () => togglePinLike(pinId);
  const handleCreateComment = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;
    createComment(comment, setComment, pinId);
  };

  const handleDeleteComment = (commentId) => deleteComment(pinId, commentId);
  const handleDeletePin = () => deletePin(pinId);
  const handleUpdatePin = () => {
    setMenuVisible(false);
    navigate(`/edit-pin/${pinId}`);
  };

  const isOwner = user && localPin.owner && user._id === localPin.owner._id;

  return (
    <div className='mx-5 md:mx-8 lg:mx-14 xl:mx-[72px]  flex items-center justify-center'>
      <div className='mt-16 flex flex-col md:flex-row items-stretch bg-white shadow-lg rounded-2xl overflow-hidden w-full max-h-[90vh] max-w-6xl border border-gray-400'>
        <div className='w-full md:w-1/2 h-96 md:h-auto max-h-screen'>
          <img
            src={localPin.image}
            alt={localPin.title}
            className='w-full h-full object-contain md:object-cover'
            loading='lazy'
          />
        </div>
        <div className='w-full md:w-1/2 flex flex-col bg-amber-50 h-auto max-h-screen relative'>
          <div className='py-2 px-3  overflow-y-auto flex-1'>
            {/* Pin Header (like, share,  save) */}
            <div className='sticky top-0 flex items-center justify-between z-10'>
              <div className='flex items-center space-x-4'>
                <button
                  className='flex items-center space-x-2 cursor-pointer'
                  onClick={handleLike}
                >
                  <i
                    className={`fa-solid fa-heart text-xl ${
                      localPin.likedBy.includes(user._id)
                        ? 'text-red-600'
                        : 'text-gray-500'
                    }`}
                  ></i>
                  <p className='text-lg'>{localPin.likes}</p>
                </button>
                <button className='px-2 py-1 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors cursor-pointer'>
                  <i className='fa-solid fa-share text-lg'></i>
                </button>
                {isOwner && isAuthenticated && (
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

            {/* Pin Title */}
            <h1 className='text-3xl font-semibold mt-4'>
              {localPin.title || 'Untitled Pin'}
            </h1>

            {/* Pin Creator */}
            {localPin.owner && (
              <div className='flex items-center gap-3 mt-1'>
                <img
                  src='https://i.pinimg.com/75x75_RS/64/e1/0d/64e10d9fd2565527c4651caace60e6cb.jpg'
                  alt='Creator'
                  className='w-8 h-8 rounded-full object-cover'
                />
                <div>
                  <p className='font-medium'>{localPin.owner.name}</p>
                </div>
              </div>
            )}

            {/* Description */}
            <div className='max-h-24 overflow-y-auto'>
              <p className='mt-4 text-base'>
                {localPin.description || 'No description provided'}
              </p>
            </div>

            {localPin.comments?.length > 0 && (
              <div className='my-3'>
                <h3 className='text-lg font-medium mb-2'>
                  Comments ({localPin.comments.length || 0})
                </h3>
                <div className='max-h-44 overflow-y-auto'>
                  {localPin.comments.map((commentData) => (
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
          </div>
          <form
            onSubmit={handleCreateComment}
            className='sticky bottom-0 bg-amber-50 py-2 px-3 border-t border-gray-300 flex items-center gap-2'
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
