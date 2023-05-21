import React, {useState, useEffect} from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import data from "./TestimonialsSection/data";
import './TestimpnialsSection.css'

function TestimonialsSection() {
    const [people, setPeople] = useState(data);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, people]);


    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 3000);
        return () => clearInterval(slider);
    }, [index]);

    return (
        <section className="section" >
            <div className="title">
                <div className="section-header">
                    <h2>Testimonials</h2>
                    <p>What Are They <span>Saying About Us</span></p>
                </div>
            </div>
            <div className="section-center">
                {people.map((person, personIndex) => {
                    const { id, image, name, title, quote } = person;
                    let position = "nextSlide";
                    if (personIndex === index) {
                        position = "activeSlide";
                    }
                    if (
                        personIndex === index - 1 ||
                        (index === 0 && personIndex === people.length - 1)
                    ) {
                        position = "lastSlide";
                    }
                    return (
                        <article key={id} className={position}>
                            <img src={image} alt={name} className="person-img" />
                            <h4>{name}</h4>
                            <p className="title">{title}</p>

                           <p className="quote-2"> <i className="bi bi-quote quote-icon-left quote-2">{quote}</i>
                            <i className="bi bi-quote quote-icon-right"></i></p>

                            <div className="stars">
                                <i className="bi bi-star-fill yellow-start"></i><i
                                className="bi bi-star-fill yellow-start"></i><i
                                className="bi bi-star-fill yellow-start"></i><i
                                className="bi bi-star-fill yellow-start"></i><i
                                className="bi bi-star-fill yellow-start"></i>
                            </div>

                        </article>
                    );
                })}
                <button className="prev" onClick={() => setIndex(index - 1)}>
                    <FiChevronLeft />
                </button>
                <button className="next" onClick={() => setIndex(index + 1)}>
                    <FiChevronRight />
                </button>
            </div>
        </section>
    );
}

export default TestimonialsSection;
