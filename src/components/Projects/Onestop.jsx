import React, { useState } from "react";
import Navbar from "../Navbar";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Home1 from "../../assets/GovTech/Home1.png";
import Home2 from "../../assets/GovTech/Home2.png";
import { Chrono } from "react-chrono";
import "animate.css";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";

const Onestop = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const images = [
    {
      original: Home1,
      thumbnail: Home1,
      description: "Cater to different users",
    },
    {
      original: Home2,
      thumbnail: Home2,
      description: "Customized Questionnaire based on different users",
    },
  ];

  const handleImageClick = (event, index) => {
    event.preventDefault();
    setFullscreenImage(event.target.src);
  };

  const handleCloseFullscreenImage = () => {
    setFullscreenImage(null);
  };
  const items = [
    {
      title: "User Story",
      cardTitle: "Identify actors & user stories",
      cardSubtitle: [
        "SME (current business Owner)",
        "Start-up Owner",
        "Business Owner",
      ],
      // media: { type: "IMAGE", source: { url: UserStory } },
    },
    {
      title: "Background research",
      cardTitle: "Come up with the different Diagrams",
    },
    {
      title: "Final Prototype",
      cardTitle: "Prototype for demo",
      cardSubtitle: ["Functions Completed", "No Errors"],
    },
  ];
  return (
    <div>
       <ScrollToTop />
      <Navbar />
      <div className="achievements-container">
        <div className="animate__animated animate__fadeInDown">
          <h1 className="project-heading">
            One Stop <strong className="darkPink">Hub</strong>
          </h1>
        </div>
        <h5 className="project-heading">
       Timeline
        </h5>
        <Chrono
          items={items.map((item) => ({
            ...item,
            cardSubtitle: item.cardSubtitle ? (
              <ul>
                {item.cardSubtitle.map((subtitle, index) => (
                  <li key={index}>{subtitle}</li>
                ))}
              </ul>
            ) : null,
          }))}
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
        />
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
          onClick={handleImageClick}
        />
        {fullscreenImage !== null && (
          <div
            className="fullscreen-image-modal"
            onClick={handleCloseFullscreenImage}
          >
            <div className="fullscreen-image-content">
              <img src={fullscreenImage} alt="Fullscreen" />
            </div>
          </div>
        )}
        <h5 id="UserStory" className="project-heading">
          Some User Stories Examples:
        </h5>
        <table className="table_box">
          <tr>
            <th>SME</th>
          </tr>
          <tr>
            <td>
              - As a SME in the manufacturing sector, I want to find
              comprehensive support and resources for expanding my business
              internationally, so that I can make informed decisions about
              international markets, export regulations etc.
            </td>
          </tr>
          <tr>
            <td>
              - As an SME owner, I want the digital system to provide insights
              into market trends and consumer behaviour so that I can tailor my
              products or services to meet evolving customer demands
              effectively.
            </td>
          </tr>
          <tr>
            <td>
              - As an SME owner, I want the digital system to facilitate access
              to funding opportunities and financing options so that I can
              secure the necessary capital to invest in business growth
              initiatives
            </td>
          </tr>
        </table>
        <br></br>
        <table className="table_box">
          <tr>
            <th>Start-up Owner</th>
          </tr>
          <tr>
            <td>
              - As a start-up owner, I want to easily find and understand what
              government schemes and services are available for starting my
              business in the financial sector, so that I can make informed
              decisions about registration, funding etc. without having to
              search multiple gov websites.
            </td>
          </tr>
          <tr>
            <td>
              - As a start-up owner, I want to easily find information on grants
              and incentives for technology development specific to my sector,
              so that I can leverage these incentives to boost my company’s
              growth and contribute to Singapore’s position as a tech hub.
            </td>
          </tr>
          <tr>
            <td>
              - As a start-up owner, I want the digital system to simplify the
              process of registering my business and obtaining necessary
              licenses and permits so that I can focus more on developing my
              product or service and less on bureaucratic hurdles.
            </td>
          </tr>
        </table>
        <br></br>
        <table className="table_box">
          <tr>
            <th>Business Owner</th>
          </tr>
          <tr>
            <td>
              - As a business owner, I want to easily navigate through the
              digital system so that I can efficiently access the necessary
              information and services without any confusion or frustration.
            </td>
          </tr>
          <tr>
            <td>
              - As a business owner, I want the digital system to provide
              personalized recommendations on growth strategies and
              opportunities for my SME so that I can make informed decisions to
              expand my business effectively.
            </td>
          </tr>
          <tr>
            <td>
              - As a business owner, I want the digital system to anticipate my
              needs based on my business profile so that I can quickly find
              relevant government services and support schemes tailored to my
              requirements.
            </td>
          </tr>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Onestop;
