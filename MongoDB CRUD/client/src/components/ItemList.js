import React from 'react';

const ItemList = ({ dataList, handleEdit, handleDelete }) => {
  return (
    <div className='tableContainer'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dataList.length > 0 ? (
            dataList.map((el) => (
              <tr key={el._id}>
                <td>{el.name}</td>
                <td>{el.description}</td>
                <td>
                  <button className='btn-edit bg-yellow-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full' onClick={() => handleEdit(el)}>Edit</button>
                  <button className='btn-delete bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full' onClick={() => handleDelete(el._id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>No data</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;
