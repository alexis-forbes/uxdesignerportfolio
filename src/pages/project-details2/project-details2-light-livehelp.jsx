import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import LightTheme from "../../layouts/Light";
import ProjectDetails2HeaderLiveHelp from "../../components/Project-details2-header/project-details2-header-livehelp";
import ProjectDate from "../../data/project-details2-livehelp.json";
import ProjectIntroductionLiveHelp from "../../components/Project-introduction/project-introduction-livehelp";
import ProjectGalleryLiveHelp from "../../components/Project-gallery/project-gallery-livehelp";
import ProjectDescriptionLiveHelp from "../../components/Project-description/project-description-livehelp";
import ProjectVideo from "../../components/Project-video/project-video";
import NextProjectLiveHelp from "../../components/Next-project/next-project-livehelp";
import ProjectGalleryLandscape3 from "../../components/Project-gallery/project-gallery-landscape3";
import ProjectGalleryLandscape4 from "../../components/Project-gallery/project-gallery-landscape4";
import ProjectGalleryLandscape5 from "../../components/Project-gallery/project-gallery-landscape5";
import ProjectGalleryLiveHelp1 from "../../components/Project-gallery/project-gallery-livehelp1";

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
                <ProjectDetails2HeaderLiveHelp projectHeaderDataLiveHelp={ProjectDate} />
                <ProjectIntroductionLiveHelp projectIntroductionDataLiveHelp={ProjectDate.intro} />
                <ProjectGalleryLandscape3 />
                <ProjectGalleryLandscape4 />
                <ProjectGalleryLandscape5 />
                <ProjectGalleryLiveHelp />
                <ProjectDescriptionLiveHelp projectDescriptionDataLiveHelp={ProjectDate.description} />
                <ProjectGalleryLiveHelp1 />
                {/*<ProjectVideo projectVideoDate={ProjectDate} /> */}
                <NextProjectLiveHelp />
                <Footer />
            </div>
        </LightTheme>
    );
};

export default ProjectDetails2Light;
