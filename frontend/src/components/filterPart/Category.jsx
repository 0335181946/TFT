
import React from 'react';

const Category = ({category, filterResult}) => {

  return (
    <div className='filter_div'>
      <div className='filter_buttons'>
        <button className='filter_btn' onClick={() => filterResult()}>All</button>
        {
          category.map((cat) => (
            <button className='filter_btn' onClick={() => filterResult(cat.label)} key={cat._id}>{cat.label}</button>
          ))
        }

      </div>
    </div>
  )
}

export default Category