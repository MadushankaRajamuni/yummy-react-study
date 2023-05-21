import React from "react";
import CountUp from 'react-countup';

function StatsCounter(){
    return(

            <section id="stats-counter" className="stats-counter " >
            <div className="container" data-aos="zoom-out">

                <div className="row gy-4">

                    <div className="col-lg-3 col-md-6">
                        <div className="stats-item text-center w-100 h-100">
                                <CountUp end={232} duration={2}/>

                            <p>Clients</p>
                        </div>
                    </div>


                    <div className="col-lg-3 col-md-6">
                        <div className="stats-item text-center w-100 h-100">
                            <CountUp end={521} duration={2}/>
                            <p>Projects</p>
                        </div>
                    </div>


                    <div className="col-lg-3 col-md-6">
                        <div className="stats-item text-center w-100 h-100">
                            <CountUp end={1453} duration={2}/>
                            <p>Hours Of Support</p>
                        </div>
                    </div>


                    <div className="col-lg-3 col-md-6">
                        <div className="stats-item text-center w-100 h-100">
                            <CountUp end={32} duration={2}/>
                            <p>Workers</p>
                        </div>
                    </div>


                </div>

            </div>
        </section>

    );
}

export default StatsCounter;
