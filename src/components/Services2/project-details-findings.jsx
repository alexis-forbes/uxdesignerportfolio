import React from 'react'

const ProjectDetailsFindings = () => {
    return (
        <section className="services section-padding position-re">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                        <div className="sec-head  text-center">
                            <h6 className="wow fadeIn" data-wow-delay=".5s">
                                USABILITY STUDY: FINDINGS
                            </h6>
                            <h7 className="wow fadeIn">
                                I conducted two rounds of usability studies. Findings from the first study helped guide the designs from wireframes to mockups. The second study used a high-fidelity prototype and revealed what aspects of the mockups needed refining.
                            </h7>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
                        <div className="step-item xtop">
                            <h6>Round 1 Findings</h6>
                            <p>
                                <li>1. Users want to book a restaurant near them.</li>
                                <li>2. Users also want to order.</li>
                                <li>3. Users want to make a reservation in a very short period of time.</li>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                        <div className="step-item xtop">
                            <h6>Round 2 Findings</h6>
                            <p>
                                <li>1. Have a section of favorite restaurants to facilitate the search.</li>
                                <li>2. I added the basket button to access the information and modify the order.</li>
                                <li>3. Cancel option.</li>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectDetailsFindings;