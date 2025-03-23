import React, { useEffect, useState, useMemo, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { pinData } from '../assets/constants';
import { Loading } from '../Components/Loading';
import { UserContext } from '../Context/UserContext';

const PinPage = () => {
  const { user, loading, setLoading } = useContext(UserContext);

  const { pinId } = useParams();
  const [pin, setPin] = useState(null);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [comment, setComment] = useState('');

  const searchId = useMemo(
    () => (isNaN(pinId) ? pinId : Number(pinId)),
    [pinId]
  );

  useEffect(() => {
    const foundPin = pinData.find((pin) => pin.id === searchId);
    if (foundPin) {
      setPin(foundPin);
      setLikeCount(foundPin.likes); // Initialize likes
    }
    setLoading(false);
  }, [searchId]);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  const handleComment = () => {
    // Add comment to pin
    const newComment = {
      username: user.name,
      content: comment,
      timestamp: new Date().toISOString(),
    };

    setPin((prevPin) => ({
      ...prevPin,
      comments: [...prevPin.comments, newComment],
    }));

    setComment(''); // Clear input
  };

  if (loading) return <Loading />;

  if (!pin) {
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
            src={pin.image}
            alt={pin.title}
            className='w-full h-full object-contain md:object-cover'
            loading='lazy'
          />
        </div>

        {/* Details Section */}
        <div className='w-full md:w-1/2 p-6 flex flex-col bg-amber-50 h-auto'>
          {/* Header (Likes & Save Button) */}
          <div className='flex items-center justify-between'>
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
            <button className='px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors'>
              Save
            </button>
          </div>

          {/* Title & User Info */}
          <div className='flex items-start justify-between mt-4'>
            <h1 className='text-3xl font-semibold'>
              {pin.title || 'Untitled Pin'}
            </h1>
          </div>

          {/* Creator */}
          {pin.creator && (
            <div className='flex items-center gap-3 mt-2'>
              <img
                src='https://i.pinimg.com/75x75_RS/64/e1/0d/64e10d9fd2565527c4651caace60e6cb.jpg'
                alt='Creator'
                className='w-8 h-8 rounded-full object-cover'
              />

              <div>
                <p className='font-medium'>{pin.creator.fullName}</p>
              </div>
            </div>
          )}

          {/* Description */}
          <p className='mt-4 text-lg'>
            {pin.description || 'No description provided'}
          </p>

          {/* Tags */}
          {pin.tags?.length > 0 && (
            <div className='mt-6'>
              <h3 className='text-lg font-medium mb-2'>Tags</h3>
              <div className='flex flex-wrap gap-2'>
                {pin.tags.map((tag, index) => (
                  <span
                    key={index}
                    className='px-3 py-1 bg-gray-100 rounded-full text-sm'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Comments */}
          {pin.comments?.length > 0 && (
            <div className='mt-6'>
              <h3 className='text-lg font-medium mb-2'>
                Comments ({pin.comments.length})
              </h3>
              <div className='max-h-64 overflow-y-auto'>
                {pin.comments.map((comment, index) => (
                  <div key={index} className='py-3 border-b last:border-0 flex'>
                    <img
                      src='https://i.pinimg.com/75x75_RS/64/e1/0d/64e10d9fd2565527c4651caace60e6cb.jpg'
                      alt='User'
                      className='w-10 h-10 rounded-full object-cover'
                    />

                    <div className='ml-4 flex flex-col items-start'>
                      <span className='font-medium '>{comment.username}</span>
                      <p className='text-base'>{comment.content}</p>
                    </div>
                    <p>{comment.dateCreated}</p>
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
              onClick={handleComment}
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
