import React, { useState, useEffect } from 'react';
import './gallery2.css';

import image1 from './assets/gallery/gallery-1.jpg';
import image2 from './assets/gallery/gallery-2.jpg';
import image3 from './assets/gallery/gallery-3.jpg';
import image4 from './assets/gallery/gallery-4.jpg';
import image5 from './assets/gallery/gallery-5.jpg';
import image6 from './assets/gallery/gallery-6.jpg';
import image7 from './assets/gallery/gallery-7.jpg';
import image8 from './assets/gallery/gallery-8.jpg';


const images = [image1, image2, image3,image4, image5, image6,image7, image8];

const ImageSlider2 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 2800);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <section id= "gallery" className="gallery section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-header">
                    <h2>gallery</h2>
                    <p>Check <span>Our Gallery</span></p>
                </div>
        <div>
            <img className="image-slide" src={images[currentIndex]} alt="Slider Image" />
        </div>
                </div>
        </section>
    );
};

export default ImageSlider2;