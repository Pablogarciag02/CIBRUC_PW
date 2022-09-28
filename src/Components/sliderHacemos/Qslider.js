import React, { useState, useEffect } from 'react'
import QSliderImages from './QsliderData'
const images = [QSliderImages.uno, QSliderImages.dos, QSliderImages.tres, QSliderImages.tres]


export default function Qslider() {
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
            <img className="flex-none mt-10 border w-96 rounded-xl" src={images[currentIndex]} width="600" height="600" />
        </div>
    )
}

