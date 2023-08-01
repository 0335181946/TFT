
import React from 'react'

const Subcategory = ({subCategory, changeChecked}) => {

  return (
    <div className='filter_div'>
      <div className='filter_checkboxssss'>
        {
          subCategory.map((sub) => (
            <div className='filter_checkbox' key={sub._id}>
              <label htmlFor={sub.label} className='filter_label'>{sub.label}</label>
              <input type="checkbox" className='filter_check' checked={sub.checked} onChange={() => changeChecked(sub._id)} name='' id={sub.label} />
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Subcategory
