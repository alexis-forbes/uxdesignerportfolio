import React from "react";
import featuresDetails from "../../data/sections/project-details-columns.json";

const ProjectDetailsColumns = () => {
    return (
        <section className="services box lficon section-padding position-re">
            <div className="container">
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
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectDetailsColumns;
