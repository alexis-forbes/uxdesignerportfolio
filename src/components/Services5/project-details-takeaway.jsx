import React from "react";
import featuresDetails from "../../data/sections/project-details-takeaway.json";

const ProjectDetailsTakaway = () => {
    return (
        <section className="services box lficon section-padding position-re">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                        <div className="sec-head  text-center">
                            <h6 className="wow fadeIn" data-wow-delay=".2s">
                                Takeaway
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {featuresDetails.map((item, index) => (
                        <div
                            className="col-lg-6 wow fadeInLeft"
                            data-wow-delay={
                                index == 0
                                    ? ".2s"
                                    : index == 1
                                        ? ".4s"
                                        : index === 2
                                            ? ".6s"
                                            : ".5s"
                            }
                            key={item.id}
                        >
                            <div className="item-box no-curve">
                                <div>
                                    <span className={`icon ${item.icon}`}></span>
                                </div>
                                <div className="cont">
                                    <h6>{item.title}</h6>
                                    <p>{item.content}</p>
                                    <p>{item.quote}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectDetailsTakaway;
