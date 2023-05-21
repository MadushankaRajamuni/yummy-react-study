import React , {useState, useEffect}from 'react';
import Hero_img from './assets/hero-img.png';
import loading_img from "./assets/loading-23.gif"


function Home() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const delay = setTimeout(() => {
            setIsLoading(false);
        }, 2300);

        return () => clearTimeout(delay); // Clean up the timeout when the component unmounts
    }, []);
    return (
        <div>
            {isLoading ? (
                <img src={loading_img} alt="Loading" className="loading-img" />
            ) : (
                <div id="hero" className="hero d-flex align-items-center section-bg fade-in ">
                    <div className="container">
                        <div className="row justify-content-between gy-5">
                            <div
                                className="1st_div col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
                                <h2 data-aos="fade-up">Enjoy Your Healthy </h2>
                                <h2>Delicious Food</h2>
                                <p data-aos="fade-up" data-aos-delay="100">Sed autem laudantium dolores. Voluptatem itaque
                                    ea
                                    consequatur eveniet. Eum quas beatae cumque eum quaerat.</p>
                                <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
                                    <a href="#book-a-table" className="btn-book-a-table">Book a Table</a>
                                    <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                                       className="glightbox btn-watch-video d-flex align-items-center">
                                        <i className="bi bi-play-circle"></i>
                                        <span className="watch_video">Watch Video</span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
                                <img src={Hero_img} className="img-fluid" alt="" data-aos="zoom-out"
                                     data-aos-delay="300">
                                </img>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>

    )
}

export default Home;