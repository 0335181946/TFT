import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Price = ({value, changePrice}) => {


  return (
    <div className='filter_buttons2'>
        <Slider value={value} onChange={changePrice} range min={1} max={9000000}  marks={{1: `${value[0]}đ`, 9000000: `${value[1]}đ`}} step={100000} tipForrmater={value => `$${value}`} />
    </div>
  )
}

export default Price