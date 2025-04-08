import React from 'react'
import './Category.css'
import Input from '../../components/Input'

function Category({ handleChange }) {
  return (
    <div>
      <h2 className='sidebar-title'>Category</h2>

      <div>
        <label className="sidebar-laber-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
      </div>
    </div>
  )
}

export default Category