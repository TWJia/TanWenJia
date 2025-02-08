import React, { useState } from "react";
import "animate.css";
import { Chrono } from "react-chrono";
import Navbar from "../Navbar";
import UserStory from "../../assets/MovieApplication/UserStory.png";
import UserDiagram from "../../assets/MovieApplication/UserDiagram.png";
import UCDescription from "../../assets/MovieApplication/UCDescription.png";
import BCE from "../../assets/MovieApplication/BCE.png";
import sequence from "../../assets/MovieApplication/sequence.png";
import TestPlan from "../../assets/MovieApplication/TestPlan.png";
import Testcase from "../../assets/MovieApplication/Testcase.png";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./Movie.css";
import Final1 from "../../assets/MovieApplication/Final1.jpg";
import Final3 from "../../assets/MovieApplication/mainhomepage.png";
import Login from "../../assets/MovieApplication/loggin.png";
import editmovie from "../../assets/MovieApplication/editmovie.png";
import createadmin from "../../assets/MovieApplication/create.png";
import MovieTheatre from "../../assets/MovieApplication/Movie.png";
import register from "../../assets/MovieApplication/register.png";
import cart from "../../assets/MovieApplication/Cart.png";
import Rewards from "../../assets/MovieApplication/Rewards.png";
import Review from "../../assets/MovieApplication/Review.png";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";

const Movie = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const images = [
    {
      original: Final1,
      thumbnail: Final1,
      description: "Home Page",
    },
    {
      original: Final3,
      thumbnail: Final3,
      description: "Main Home Page",
    },
    {
      original: Login,
      thumbnail: Login,
      description: "Login",
    },
    {
      original: register,
      thumbnail: register,
      description: "Register",
    },
    {
      original: createadmin,
      thumbnail: createadmin,
      description: "Create New Admin",
    },
    {
      original: editmovie,
      thumbnail: editmovie,
      description: "Edit Movie theatre size",
    },
    {
      original: MovieTheatre,
      thumbnail: MovieTheatre,
      description: "Create Movie theatre",
    },
    {
      original: cart,
      thumbnail: cart,
      description: "Cart out",
    },
    {
      original: Rewards,
      thumbnail: Rewards,
      description: "Rewards",
    },
    {
      original: Review,
      thumbnail: Review,
      description: "Review",
    },
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log(`Section with id ${sectionId} not found.`);
    }
  };

  const toggleFullscreen = (imageSrc) => {
    if (fullscreenImage === imageSrc) {
      setFullscreenImage(null);
    } else {
      setFullscreenImage(imageSrc);
    }
  };

  const isFullscreen = (imageSrc) => {
    return fullscreenImage === imageSrc;
  };

  // const handleItemSelected = (data) => {
  //   if (data.title === "User Stories") {
  //     scrollToSection("UserStory");
  //   } else if (data.title === "Other Diagrams") {
  //     scrollToSection("OtherDiagrams");
  //   } else if (data.title === "Test Cases/Plan") {
  //     scrollToSection("TestCasesPlan");
  //   } else if (data.title === "Final Website") {
  //     scrollToSection("FinalWebsite");
  //   }
  // };

  const items = [
    {
      title: "User Stories",
      cardTitle: "Identify actors & user stories",
      cardSubtitle: ["System Admin", "Staff", "Manager", "Customer"],
      media: { type: "IMAGE", source: { url: UserStory } },
      sectionId: "UserStory"
    },
    {
      title: "Other Diagrams",
      cardTitle: "Come up with the different Diagrams",
      cardSubtitle: [
        "User Diagrams",
        "Use Case Description",
        "B-C-E Diagram",
        "Sequence Diagram",
      ],
      media: { type: "IMAGE", source: { url: UserDiagram } },
    },
    {
      title: "Test Cases/Plan",
      cardTitle: "Conduct test cases/plan to ensure functions work well",
      cardSubtitle: ["Test Cases", "Test Plan"],
      media: { type: "IMAGE", source: { url: TestPlan } },
    },
    {
      title: "Final Website",
      cardTitle: "Final Website with working functions",
      cardSubtitle: ["Functions Completed", "No Errors", "Hosted"],
      media: { type: "IMAGE", source: { url: Final1 } },
    },
  ];

  return (
    <><ScrollToTop />
      <Navbar />
      <div className="achievements-container" id="achievements-container">
        <div className="animate__animated animate__fadeInDown">
          <h1 className="project-heading">
            Ticket Booking Movie
            <strong className="darkPink">Application </strong>
          </h1>
        </div>
        <table className="table_box">
          <tr>
            <th>Key Contributions</th>
          </tr>
          <tr>
            <td>
          •	Application used: ReactJS (frontend), Java Spring Boot (backend),MongoDB (database).
          </td>
          </tr>
          <tr>
            <td>
            •	Demonstrated exceptional leadership skills by effectively leading the team through the brainstorming process and ensuring the timely completion of the project.
            </td>
          </tr>
          <tr>
            <td>
            •	Led the end-to-end development of a comprehensive movie application, taking a primary role in designing and implementing the frontend components and ensuring an intuitive and visually appealing UI/UX for the website.
            </td>
          </tr>
          <tr>
            <td>
            •	Used GitHub for source repository, GitLab for CI/CD and employed Taiga for efficient project management.
            </td>
          </tr>
        </table>
        <br></br>
        <h5 className="project-heading">
       Timeline
        </h5>
        <Chrono
          items={items.map((item) => ({
            ...item,
            cardSubtitle: (
              <ul>
                {item.cardSubtitle.map((subtitle, index) => (
                  <li key={index}>{subtitle}</li>
                ))}
              </ul>
            ),
          }))}
          // onItemSelected={handleItemSelected}
          onItemSelected={(data) => {
            console.log("Item selected:", data.title); 
            scrollToSection(data.sectionId);
          }}
          mode="HORIZONTAL"
          showAllCardsHorizontal
          fontSizes={{
            title: "1rem",
          }}
          slideShow
          theme={{
            primary: "pink",
            secondary: "palevioletred",
            titleColor: "black",
            titleColorActive: "black",
            cardTitleColor: "black",
          }}
          disableToolbar
          // onClick={(chronoItem) => {
          //   if (chronoItem.title == "User Stories") {
          //     scrollToSection("UserStory");
          //   } else if (chronoItem.title == "Other Diagrams") {
          //     scrollToSection("OtherDiagrams");
          //   } else if (chronoItem.title == "Test Cases/Plan") {
          //     scrollToSection("TestPlan");
          //   }
          // }}
        />
        <h5 className="project-heading">Final Website</h5>
        <ImageGallery
          items={images}
          showPlayButton={false}
          showFullscreenButton={false}
          autoPlay={true}
          slideInterval={4800}
          slideOnThumbnailOver={true}
          showIndex={true}
          infinite={true}
          width="50px"
          height="50px"
        />
        <h5 id="UserStory" className="project-heading">
          Some User Stories Examples:
        </h5><div className="centered-img-container">
        <img
          style={{
            cursor: "pointer",
            width: isFullscreen(UserStory) ? "100%" : "auto",
            height: isFullscreen(UserStory) ? "100%" : "auto",
          }}
          src={UserStory}
          alt="User Story"
          onClick={() => toggleFullscreen(UserStory)}
        /></div>
        <h5 id="OtherDiagrams" className="project-heading">
          User Diagrams
        </h5><div className="centered-img-container">
        <img
          style={{
            cursor: "pointer",
            width: isFullscreen(UserDiagram) ? "100%" : "auto",
            height: isFullscreen(UserDiagram) ? "100%" : "auto",
          }}
          src={UserDiagram}
          alt="User Diagram"
          onClick={() => toggleFullscreen(UserDiagram)}
        /></div>
        <h5 className="project-heading">Use case Description</h5>
        <div className="centered-img-container">
        <img
          style={{
            cursor: "pointer",
            width: isFullscreen(UCDescription) ? "100%" : "auto",
            height: isFullscreen(UCDescription) ? "100%" : "auto",
          }}
          src={UCDescription}
          alt="UCDescription"
          onClick={() => toggleFullscreen(UCDescription)}
        /></div>
        <h5 className="project-heading">BCE Diagram</h5>
        <div className="centered-img-container">
        <img
          style={{
            cursor: "pointer",
            width: isFullscreen(BCE) ? "100%" : "auto",
            height: isFullscreen(BCE) ? "100%" : "auto",
          }}
          src={BCE}
          alt="BCE"
          onClick={() => toggleFullscreen(BCE)}
        /></div>
        <h5 className="project-heading">Sequence Diagram</h5>
        <div className="centered-img-container">
        <img
          style={{
            cursor: "pointer",
            width: isFullscreen(sequence) ? "100%" : "auto",
            height: isFullscreen(sequence) ? "100%" : "auto",
          }}
          src={sequence}
          alt="sequence"
          onClick={() => toggleFullscreen(sequence)}
        /></div>
        <h5 className="project-heading" id="TestPlan">
          Test Plan
        </h5>
        <div className="centered-img-container">
        <img
          style={{
            cursor: "pointer",
            width: isFullscreen(TestPlan) ? "100%" : "auto",
            height: isFullscreen(TestPlan) ? "100%" : "auto",
          }}
          src={TestPlan}
          alt="TestPlan"
          onClick={() => toggleFullscreen(TestPlan)}
        />
        </div>
        <h5 className="project-heading">Test Case</h5>
        <div className="centered-img-container">
        <img
          style={{
            cursor: "pointer",
            width: isFullscreen(Testcase) ? "100%" : "auto",
            height: isFullscreen(Testcase) ? "100%" : "auto",
          }}
          src={Testcase}
          alt="Testcase"
          onClick={() => toggleFullscreen(Testcase)}
        /></div>
      </div>
      <Footer />
    </>
  );
};

export default Movie;
