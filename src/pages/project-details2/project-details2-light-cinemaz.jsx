import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import LightTheme from "../../layouts/Light";
import ProjectDetails2HeaderCinemaz from "../../components/Project-details2-header/project-details2-header-cinemaz";
import ProjectDate from "../../data/project-details2-cinemaz.json";
import ProjectIntroductionCinemaz from "../../components/Project-introduction/project-introduction-cinemaz";
import ProjectGalleryCinemaz from "../../components/Project-gallery/project-gallery-cinemaz";
import ProjectDescriptionCinemaz from "../../components/Project-description/project-description-cinemaz";
import ProjectVideo from "../../components/Project-video/project-video";
import NextProjectCinemaz from "../../components/Next-project/next-project-cinemaz";
import ProjectGalleryLandscape6 from "../../components/Project-gallery/project-gallery-landscape6";
import ProjectGalleryLandscape7 from "../../components/Project-gallery/project-gallery-landscape7";
import ProjectGalleryLandscape8 from "../../components/Project-gallery/project-gallery-landscape8";
import ProjectGalleryLandscape9 from "../../components/Project-gallery/project-gallery-landscape9";
import ProjectGalleryLandscape10 from "../../components/Project-gallery/project-gallery-landscape10";


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
                <ProjectDetails2HeaderCinemaz projectHeaderDataCinemaz={ProjectDate} />
                <ProjectIntroductionCinemaz projectIntroductionDataCinemaz={ProjectDate.intro} />
                <ProjectGalleryLandscape6 />
                <ProjectGalleryLandscape7 />
                <ProjectGalleryLandscape8 />
                <ProjectGalleryLandscape9 />
                <ProjectGalleryLandscape10 />
                <ProjectDescriptionCinemaz projectDescriptionDataCinemaz={ProjectDate.description} />
                {/*<ProjectVideo projectVideoDate={ProjectDate} /> */}
                <NextProjectCinemaz />
                <Footer />
            </div>
        </LightTheme>
    );
};

export default ProjectDetails2Light;
