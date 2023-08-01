import React from 'react'

const Search = ({value,changeInput}) => {
  return (
    <div className='filter_div'>
       <input type="text"  className='filter_input' value={value} onChange={changeInput}   />
    </div>
  )
}

export default Search