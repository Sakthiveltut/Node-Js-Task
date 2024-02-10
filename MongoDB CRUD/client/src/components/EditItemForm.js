import React from 'react';
import Formtable from './Formtable';

const EditItemForm = ({ handleSubmit, handleOnChange, handleCancel, formDataEdit }) => {
  return (
    <Formtable
      handleSubmit={handleSubmit}
      handleOnChange={handleOnChange}
      handleclose={handleCancel}
      rest={formDataEdit}
    />
  );
};

export default EditItemForm;
