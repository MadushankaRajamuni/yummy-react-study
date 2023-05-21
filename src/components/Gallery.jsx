import React from "react";
import ImageSlider from "./ImageSlider";


const Gallery = () => {
    const slides = [
        {url: "http://localhost:3000/gallery-1.jpg", title: ""},
        {url: "http://localhost:3000/gallery-2.jpg", title: ""},
        {url: "http://localhost:3000/gallery-3.jpg", title: ""},
        {url: "http://localhost:3000/gallery-4.jpg", title: ""},
        {url: "http://localhost:3000/gallery-5.jpg", title: ""},
        {url: "http://localhost:3000/gallery-6.jpg", title: ""},
        {url: "http://localhost:3000/gallery-7.jpg", title: ""},
        {url: "http://localhost:3000/gallery-8.jpg", title: ""},
    ];
    const containerStyles = {
        width: "500px",
        height: "280px",
        margin: "0 auto",
    };

    return (

        <section id= "gallery" className="gallery section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-header">
                    <h2>gallery</h2>
                    <p>Check <span>Our Gallery</span></p>
                </div>
                <div style={containerStyles}>
                    <ImageSlider slides={slides}
                                 showBullets={true}
                                 showNavs={true}
                                 autoPlay={true}
                                 autoPlayDelay={3}/>
                </div>
            </div>
        </section>
    );
};

export default Gallery;