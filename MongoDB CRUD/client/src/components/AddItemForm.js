import React from 'react';
import Formtable from './Formtable';

const AddItemForm = ({ handleSubmit, handleOnChange, handleCancel, formData }) => {
  return (
    <Formtable
      handleSubmit={handleSubmit}
      handleOnChange={handleOnChange}
      handleclose={handleCancel}
      rest={formData}
    />
  );
};

export default AddItemForm;
