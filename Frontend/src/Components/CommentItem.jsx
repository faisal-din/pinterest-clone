import React from 'react';

const CommentItem = ({ commentData, onDelete, currentUserId }) => {
  const { _id, owner, comment, dateCreated } = commentData;

  return (
    <div className='flex items-center border-b pb-3'>
      <img
        src='https://i.pinimg.com/75x75_RS/64/e1/0d/64e10d9fd2565527c4651caace60e6cb.jpg'
        alt='User'
        className='w-10 h-10 rounded-full object-cover'
      />
      <div className='ml-4 flex-1'>
        <p className='font-medium'>{owner.name}</p>
        <p className='text-base'>{comment}</p>
        <p className='text-sm text-gray-500'>{dateCreated}</p>
      </div>
      {owner._id === currentUserId && (
        <button
          onClick={() => onDelete(_id)}
          className='text-red-500 hover:text-red-700 ml-2 cursor-pointer'
        >
          <i className='fa-solid fa-trash'></i>
        </button>
      )}
    </div>
  );
};

export default CommentItem;
