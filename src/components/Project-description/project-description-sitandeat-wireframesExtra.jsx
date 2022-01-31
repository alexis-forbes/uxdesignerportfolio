import React from "react";

const ProjectDescriptionSitAndEatWireFramesExtra = ({ projectDescriptionDataSitAndEatWireframesExtra }) => {
    return (
        <section className="intro-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-11 offset-lg-1 col-lg-8">
                        <div className="text js-scroll__content">
                            <p className="extra-text">{projectDescriptionDataSitAndEatWireframesExtra.wireframesExtra}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDescriptionSitAndEatWireFramesExtra;
