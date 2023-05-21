import React from "react";
import About_jpg from "./assets/about.jpg";
import About_jpg2 from "./assets/about-2.jpg";


function About(){
    return(
        <section id="about" className="about">
            <div className="container fade-in">

                <div className="section-header">
                    <h2>About Us</h2>
                    <p>Learn More <span>About Us</span></p>
                </div>

                <div className="row gy-4 ">
                    <div className="col-lg-7 position-relative about-img about1" data-aos="fade-up" data-aos-delay="150">
                        <img className="about_img" src={About_jpg} alt="About" />
                        <div className="call-us position-absolute">
                            <h4>Book a Table</h4>
                            <p>+1 5589 55488 55</p>
                        </div>
                    </div>


                    <div className="col-lg-5 d-flex align-items-end" data-aos="fade-up" data-aos-delay="300">
                        <div className="content ps-0 ps-lg-5">
                            <p className="fst-italic yummy-text text-ipsum">
                                pLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore
                                magna aliqua.
                            </p>
                            <ul>

                                <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                    Mongoose Module Not Found.
                                </li>
                                <li><i className="bi bi-check2-all"></i> Duis aute irure dolor in reprehenderit in
                                    voluptate velit.
                                </li>
                                <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta
                                    storacalaperda mastiro dolore eu fugiat nulla pariatur.
                                </li>

                            </ul>
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                non proident
                            </p>

                            <div className="position-relative mt-4">
                                <img src={About_jpg2} className="img-fluid" alt=""/>
                                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                                   className="glightbox play-btn"></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    );
}

export default About;