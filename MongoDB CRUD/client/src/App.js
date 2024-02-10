import React, { useEffect, useState } from 'react';
import axios from "axios";
import ItemList from './components/ItemList';
import AddItemForm from './components/AddItemForm';
import EditItemForm from './components/EditItemForm';
import DeleteItemForm from './components/DeleteItemForm';
import Formtable from './components/Formtable';

axios.defaults.baseURL = "http://localhost:8080/";

function App() {
  const [addSection, setAddSection] = useState(false);
  const [editSection, setEditSection] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
  const [formDataEdit, setFormDataEdit] = useState({
    name: "",
    description: "",
    _id: ""
  });
  const [dataList, setDataList] = useState([]);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post("/create", formData);
    console.log(data);
    if (data.data.success) {
      setAddSection(false);
      alert(data.data.message);
      getFetchData();
      setFormData({
        name: "",
        description: ""
      });
    }
  };

  const getFetchData = async () => {
    const data = await axios.get("/");
    console.log(data);
    if (data.data.success) {
      setDataList(data.data.data);
    }
  };

  useEffect(() => {
    getFetchData();
  }, []);

  const handleDelete = async (id) => {
    const data = await axios.delete("/delete/" + id);
    if (data.data.success) {
      getFetchData();
      alert(data.data.message);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = await axios.put("/update", formDataEdit);
    if (data.data.success) {
      getFetchData();
      alert(data.data.message);
      setEditSection(false);
    }
  };

  const handleEditOnChange = (e) => {
    const { value, name } = e.target;
    setFormDataEdit((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEdit = (el) => {
    setFormDataEdit(el);
    setEditSection(true);
  };

  return (
    <>
      <div className="container">
        
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setAddSection(true)}>Add</button>

        {addSection && (
          <AddItemForm
            handleSubmit={handleSubmit}
            handleOnChange={handleOnChange}
            handleCancel={() => setAddSection(false)}
            formData={formData}
          />
        )}

        {editSection && (
          <EditItemForm
            handleSubmit={handleUpdate}
            handleOnChange={handleEditOnChange}
            handleCancel={() => setEditSection(false)}
            formDataEdit={formDataEdit}
          />
        )}

        <ItemList
          dataList={dataList}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
}

export default App;
