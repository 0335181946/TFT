import React from 'react';
import ImageSlider from './ImageSlider';

const Slides = () => {

    const slides = [
        { url: 'https://theme.hstatic.net/200000278317/1000929405/14/slideshow_6.jpg?v=197', title: 'img1' },
        { url: 'https://theme.hstatic.net/200000278317/1000929405/14/slideshow_9.jpg?v=197', title: 'img2' },
        { url: 'https://theme.hstatic.net/200000278317/1000929405/14/slideshow_4.jpg?v=197', title: 'img3' },
        { url: 'https://theme.hstatic.net/200000278317/1000929405/14/slideshow_8.jpg?v=197', title: 'img3' }
        
    ]

    const containerStyles = {
        width: '100%',
        height: '80vh',
        margin: '0 auto',
    };


    return (
        <div>
            <div style={containerStyles}>
                <ImageSlider slides={slides} />
            </div>
        </div>
    )
}

export default Slides