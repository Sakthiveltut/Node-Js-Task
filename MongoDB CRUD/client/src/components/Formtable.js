import React from 'react'
import "../App.css"
import { MdClose } from 'react-icons/md'

const Formtable = ({handleSubmit,handleOnChange,handleclose,rest}) => {
  return (
    <div className="addContainer">
            <form onSubmit={handleSubmit}>
            <div className="close-btn" onClick={handleclose}><MdClose/></div>
              <label htmlFor="name">Name : </label>
              <input type="text" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id="name" name="name" onChange={handleOnChange} value={rest.name}/>

              <label htmlFor="description">Description : </label>
              <textarea rows={5} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' cols={5} id="email" name="description" onChange={handleOnChange} value={rest.description} 
              style={{resize:'none'}}/>

              <button className="btn">Submit</button>
            </form>
    </div>
  )
}

export default Formtable