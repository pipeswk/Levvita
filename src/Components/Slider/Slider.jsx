import { useState, useEffect } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Slide from '../Slide/Slide';

const Slider = ( { slider } ) => {

    const [slides, setSlides] = useState([]);


    useEffect(() => {
        setSlides(slider)
    }, [])
    

  return (
    <Splide
        options={{
            type: 'loop',
            autoplay: true,
            width: '100%',
            rewind: true,
            gap: '1rem'
        }}
    >
        {slides.map((slide, index) => (
            <Slide
                key={index}
                slide={slide}
            />
        ))}
    </Splide>
  )
}

export default Slider