import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import LightTheme from "../../layouts/Light";
import ProjectDetails2HeaderSitAndEat from "../../components/Project-details2-header/project-details2-header-sitandeat";
import ProjectDate from "../../data/project-details2-sitandeat.json";
import ProjectIntroductionSitAndEat from "../../components/Project-introduction/project-introduction-sitandeat";
import ProjectGallerySitAndEat from "../../components/Project-gallery/project-gallery-sitandeat";
import ProjectDescriptionSitAndEat from "../../components/Project-description/project-description-sitandeat";
import ProjectDescriptionSitAndEatWireFrames from "../../components/Project-description/project-description-sitandeat-wireframes";
import ProjectDescriptionSitAndEatWireFramesExtra from "../../components/Project-description/project-description-sitandeat-wireframesExtra";
import ProjectDescriptionSitAndEatPrototype from "../../components/Project-description/project-description-sitandeat-prototype";
import ProjectVideo from "../../components/Project-video/project-video";
import NextProjectSitAndEat from "../../components/Next-project/next-project-sitandeat";
import NextProjectSitAndEatCaseStudy from "../../components/Next-project/next-project-sitandeat-casestudy";
import ProjectGalleryLandscape from "../../components/Project-gallery/project-gallery-landscape";
import ProjectGalleryLandscape1 from "../../components/Project-gallery/project-gallery-landscape1";
import ProjectDetailsColumns from "../../components/Services5/project-details-columns";
import ProjectDetailsOneTwoThree from "../../components/Services2/project-details-onetwothree";
import ProjectDetailsFindings from "../../components/Services2/project-details-findings";
import ProjectDetailsAccessibility from "../../components/Services2/project-details-accessibility";
import ProjectDetailsTakaway from "../../components/Services5/project-details-takeaway";
import ProjectGalleryLandscape11 from "../../components/Project-gallery/project-gallery-landscape11";


const ProjectDetails2Light = () => {
    const navbarRef = React.useRef(null);
    const logoRef = React.useRef(null);

    React.useEffect(() => {
        var navbar = navbarRef.current,
            logo = logoRef.current;
        if (window.pageYOffset > 300) {
            navbar.classList.add("nav-scroll");
        } else {
            navbar.classList.remove("nav-scroll");
        }
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                navbar.classList.add("nav-scroll");
            } else {
                navbar.classList.remove("nav-scroll");
            }
        });
    }, [navbarRef]);
    return (
        <LightTheme>
            <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
            <div className="wrapper">
                <ProjectDetails2HeaderSitAndEat projectHeaderDataSitAndEat={ProjectDate} />
                <ProjectIntroductionSitAndEat projectIntroductionDataSitAndEat={ProjectDate.intro} />
                <ProjectGalleryLandscape1 />
                <ProjectDetailsColumns />
                <ProjectDescriptionSitAndEat projectDescriptionDataSitAndEat={ProjectDate.description} />
                <NextProjectSitAndEatCaseStudy />
                <ProjectDetailsOneTwoThree />
                {/*<ProjectVideo projectVideoDate={ProjectDate} />*/}
                <ProjectGallerySitAndEat />
                <ProjectDescriptionSitAndEatWireFrames projectDescriptionDataSitAndEatWireframes={ProjectDate.wireframes} />
                <ProjectDescriptionSitAndEatWireFramesExtra projectDescriptionDataSitAndEatWireframesExtra={ProjectDate.wireframesExtra} />
                <ProjectDetailsFindings />
                <ProjectGalleryLandscape />
                <ProjectDescriptionSitAndEatPrototype projectDescriptionDataSitAndEatPrototype={ProjectDate.prototype} />
                <ProjectGalleryLandscape11 />
                <ProjectDetailsAccessibility />
                <ProjectDetailsTakaway />
                <NextProjectSitAndEat />
                <Footer />
            </div>
        </LightTheme>
    );
};

export default ProjectDetails2Light;
