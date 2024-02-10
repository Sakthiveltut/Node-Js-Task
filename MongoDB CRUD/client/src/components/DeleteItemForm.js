import React from 'react';

const DeleteItemForm = ({ handleDelete, itemId }) => {
  return (
    <button className='btn btn-delete' onClick={() => handleDelete(itemId)}>Delete</button>
  );
};

export default DeleteItemForm;
