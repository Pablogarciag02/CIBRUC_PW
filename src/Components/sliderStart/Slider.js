import React, { useState, useEffect } from 'react'
import SliderIMAGES from './sliderStartData'
const images = [SliderIMAGES.flower, SliderIMAGES.forest, SliderIMAGES.ladybug, SliderIMAGES.lake, SliderIMAGES.mountainStart, SliderIMAGES.ocean, SliderIMAGES.planet, SliderIMAGES.wave]

export default function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if(currentIndex === images.length - 1) {
                setCurrentIndex(0);
            } 
            else {
                setCurrentIndex(currentIndex + 1);
            }
        }, 8000)
        
        return () => clearInterval(intervalId);
    }, [currentIndex])

    return (
        <div>
            <img className="rounded-xl mt-10" src={images[currentIndex]} width="600" height="600" />
        </div>
    )
}

