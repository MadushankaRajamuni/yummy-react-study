import React from "react";

import Event_1 from "./assets/events-1.jpg";
import Event_2 from "./assets/events-2.jpg";
import Event_3 from "./assets/events-3.jpg";

function Events() {
    return (
        <section id="events" className="events">
            <div className="container-fluid" data-aos="fade-up">

                <div className="section-header">
                    <h2>Events</h2>
                    <p>Share <span>Your Moments</span> In Our Restaurant</p>
                </div>

                <div className="slides-3 " data-aos="fade-up" data-aos-delay="100">
                    <div className="swiper-wrapper d-flex justify-content-center event-edit">
                        <div className="event_img">
                            <div className="swiper-slide event-item d-flex flex-column justify-content-md-center"
                                 style={{position: 'relative', display: 'inline-block',width:'530px',height:'100px'}}>

                                <img src={Event_1} alt="Description of the image" className="event-1-img"/>
                                <div style={{
                                    position: 'absolute',
                                    bottom: 100,
                                    top:0,
                                    left: 30,
                                    right: 30,
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    color: '#fff',
                                    padding: '100px'
                                }}>
                                    <h3 className="custom">Custom Parties</h3>
                                    <div className="price align-self-start custom-parties">$99</div>
                                    <p className="description">
                                        Quo corporis voluptas ea ad. Consectetur inventore sapiente ipsum voluptas
                                        eos omnis facere. Enim facilis veritatis id est rem repudiandae nulla expedita quas.
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className="event_img">
                            <div className="swiper-slide event-item d-flex flex-column justify-content-md-center"
                                 style={{position: 'relative', display: 'inline-block',width:'550px',height:'100px'}}>

                                <img src={Event_2} alt="Description of the image" className="event-1-img"/>
                                <div style={{
                                    position: 'absolute',
                                    bottom: 100,
                                    top:0,
                                    left: 30,
                                    right: 30,
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    color: '#fff',
                                    padding: '100px'
                                }}>
                                    <h3 className="custom">Private Parties</h3>
                                    <div className="price align-self-start custom-parties">$289</div>
                                    <p className="description">
                                        In delectus sint qui et enim. Et ab repudiandae inventore quaerat doloribus. Facere
                                        nemo vero est ut dolores ea assumenda et. Delectus saepe accusamus aspernatur.
                                    </p>
                                </div>

                            </div>

                        </div>

                        <div className="event_img">
                            <div className="swiper-slide event-item d-flex flex-column justify-content-md-center"
                                 style={{position: 'relative', display: 'inline-block',width:'550px',height:'100px'}}>

                                <img src={Event_3} alt="Description of the image" className="event-1-img"/>
                                <div style={{
                                    position: 'absolute',
                                    bottom: 100,
                                    top:0,
                                    left: 30,
                                    right: 30,
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    color: '#fff',
                                    padding: '100px'
                                }}>
                                    <h3 className="custom">Birthday Parties</h3>
                                    <div className="price align-self-start custom-parties">$499</div>
                                    <p className="description">
                                        Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit
                                        quibusdam. Esse quisquam ducimus officia ipsum ut quibusdam maxime. Non enim
                                        perspiciatis.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>

            </div>
        </section>
    );
}

export default Events;