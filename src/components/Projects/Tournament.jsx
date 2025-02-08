import React, { useState } from "react";
import "animate.css";
import "react-image-gallery/styles/css/image-gallery.css";
import "./Movie.css";
import "./Tournament.css";
import { Chrono } from "react-chrono";
import ImageGallery from "react-image-gallery";
import Navbar from "../Navbar";
import Homepage from "../../assets/TournaHub_FYP/Homepage.png";
import Homepage3 from "../../assets/TournaHub_FYP/Homepage3.png";
import toSignUp from "../../assets/TournaHub_FYP/toSignUp.png";
import UserHome from "../../assets/TournaHub_FYP/UserHome.png";
import UserHome2 from "../../assets/TournaHub_FYP/UserHome2.png";
import ProfilePage from "../../assets/TournaHub_FYP/ProfilePage.png";
import UserSchedule from "../../assets/TournaHub_FYP/UserSchedule.png";
import TournamentList from "../../assets/TournaHub_FYP/TournamentList.png";
import TournamentDetails from "../../assets/TournaHub_FYP/TournamentDetails.png";
import TournamentDetails3 from "../../assets/TournaHub_FYP/TournamentDetails3.png";
import TournamentDetails4 from "../../assets/TournaHub_FYP/TournamentDetails4.png";
import Rating from "../../assets/TournaHub_FYP/Rating.png";
import RatingHistory from "../../assets/TournaHub_FYP/RatingHistory.png";
import Application from "../../assets/TournaHub_FYP/Application.png";
import Application2 from "../../assets/TournaHub_FYP/Application2.png";
import ApplicationStatus from "../../assets/TournaHub_FYP/ApplicationStatus.png";
import Sponsorships from "../../assets/TournaHub_FYP/Sponsorships.png";
import Sponsorships2 from "../../assets/TournaHub_FYP/Sponsorships2.png";
import Sponsorships3 from "../../assets/TournaHub_FYP/Sponsorships3.png";
import TOhome from "../../assets/TournaHub_FYP/TOhome.png";
import TOWriteArticle from "../../assets/TournaHub_FYP/TOWriteArticle.png";
import TOEditArticle from "../../assets/TournaHub_FYP/TOEditArticle.png";
import article1 from "../../assets/TournaHub_FYP/article1.png";
import article2 from "../../assets/TournaHub_FYP/article2.png";
import TOManageTournament from "../../assets/TournaHub_FYP/TOManageTournament.png";
import TOCollabStatus from "../../assets/TournaHub_FYP/TOCollabStatus.png";
import UDSA from "../../assets/TournaHub_FYP/UDSA.png";
import UDSU from "../../assets/TournaHub_FYP/UDSU.png";
import UDTO from "../../assets/TournaHub_FYP/UDTO.png";
import UDS from "../../assets/TournaHub_FYP/UDS.png";
import Description from "../../assets/TournaHub_FYP/Description.png";
import BCE from "../../assets/TournaHub_FYP/BCE.png";
import sequence from "../../assets/TournaHub_FYP/sequence.png";
import TestPlan from "../../assets/TournaHub_FYP/TestPlan.png";
import TestCase from "../../assets/TournaHub_FYP/TestCase.png";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";

const Tournament = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const images = [
    {
      original: Homepage,
      thumbnail: Homepage,
      description: "Home Page",
    },
    {
      original: Homepage3,
      thumbnail: Homepage3,
      description: "Home",
    },
    {
      original: toSignUp,
      thumbnail: toSignUp,
      description: "Sign Up",
    },
    {
      original: UserHome,
      thumbnail: UserHome,
      description: "Login Home page",
    },
    {
      original: UserHome2,
      thumbnail: UserHome2,
      description:
        "User Home page, article customised based on their interested sports",
    },
    {
      original: ProfilePage,
      thumbnail: ProfilePage,
      description: "Profile Page",
    },
    {
      original: UserSchedule,
      thumbnail: UserSchedule,
      description: "View Tournament Schedule",
    },
    {
      original: TournamentList,
      thumbnail: TournamentList,
      description: "Tournament List",
    },
    {
      original: TournamentDetails,
      thumbnail: TournamentDetails,
      description: "Tournament Details",
    },
    {
      original: TournamentDetails3,
      thumbnail: TournamentDetails3,
      description: "Tournament Match details",
    },
    {
      original: TournamentDetails4,
      thumbnail: TournamentDetails4,
      description: "Tournament Statistic & Ranking table",
    },
    {
      original: Rating,
      thumbnail: Rating,
      description: "Leave a Rating",
    },
    {
      original: RatingHistory,
      thumbnail: RatingHistory,
      description: "Rating History",
    },
    {
      original: Application,
      thumbnail: Application,
      description: "Tournament Application customised based on skill level",
    },
    {
      original: Application2,
      thumbnail: Application2,
      description: "Tournament Application",
    },
    {
      original: ApplicationStatus,
      thumbnail: ApplicationStatus,
      description: "Tournament Application Status",
    },
    {
      original: Sponsorships,
      thumbnail: Sponsorships,
      description: "Sponsorships",
    },
    {
      original: Sponsorships2,
      thumbnail: Sponsorships2,
      description: "Payment using Stripe",
    },
    {
      original: Sponsorships3,
      thumbnail: Sponsorships3,
      description: "Type of sponsorship: Sponsor Logo",
    },
    {
      original: TOhome,
      thumbnail: TOhome,
      description: "Admin Home page",
    },
    {
      original: TOWriteArticle,
      thumbnail: TOWriteArticle,
      description: "Write Article",
    },
    {
      original: TOEditArticle,
      thumbnail: TOEditArticle,
      description: "Edit Article",
    },
    {
      original: article1,
      thumbnail: article1,
      description: "Article",
    },
    {
      original: article2,
      thumbnail: article2,
      description: "Share Article on other social media & write comment",
    },
    {
      original: TOManageTournament,
      thumbnail: TOManageTournament,
      description: "Manage Tournament",
    },
    {
      original: TOCollabStatus,
      thumbnail: TOCollabStatus,
      description: "Collaboration Status",
    },
  ];

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

  const items = [
    {
      title: "User Stories",
      cardTitle: "Identify actors & user stories",
      cardSubtitle: ["System Admin", "User", "Tournament Organizer", "Sponsor"],
      // media: { type: "IMAGE", source: { url: UserStory } },
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
      // media: { type: "IMAGE", source: { url: UserDiagram } },
    },
    {
      title: "Test Cases/Plan",
      cardTitle: "Conduct test cases/plan to ensure functions work well",
      cardSubtitle: ["Test Cases", "Test Plan"],
      // media: { type: "IMAGE", source: { url: TestPlan } },
    },
    {
      title: "Final Website",
      cardTitle: "Final Website with working functions",
      cardSubtitle: ["Functions Completed", "No Errors"],
      media: { type: "IMAGE", source: { url: Homepage } },
    },
  ];

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <div className="achievements-container">
        <div className="animate__animated animate__fadeInDown">
          <h1 className="project-heading">
            Tournament Management
            <strong className="darkPink"> Platform </strong>
          </h1>
        </div>
        <table className="table_box">
          <tr>
            <th>Key Contributions</th>
          </tr>
          <tr>
            <td>
            •	Application used: (MERN Stack) ReactJS (frontend), ExpressJS & NodeJS(backend), MongoDB (database).
            </td>
          </tr>
          <tr>
            <td>
            •	Led a team in the development of a tournament management system, assigning tasks and ensuring project milestones were met.
            </td>
          </tr>
          <tr>
            <td>
            •	Utilized Jira and Kanban methodologies for streamlined project management and efficient task tracking.
            </td>
          </tr>
          <tr>
            <td>
            •	Spearheaded both backend and frontend development, showcasing expertise across the entire project spectrum.
            </td>
          </tr>
          <tr>
            <td>
            •	Employed the MERN (MongoDB, Express.js, React, Node.js) stack to build a robust and scalable application.
            </td>
          </tr>
          <tr>
            <td>
            •	Managed source code efficiently using GitHub, ensuring collaborative development and version control.
            </td>
          </tr>
          <tr>
            <td>
            •	Executed the UI/UX design for the tournament management system website, ensuring an intuitive and user-friendly interface.
            </td>
          </tr>
          <tr>
            <td>
            •	Successfully hosted the tournament management system website using Render, ensuring a reliable and scalable online presence.
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
          // onClick={handleImageClick}
        />
        <h5 id="UserStory" className="project-heading">
          Some User Stories Examples:
        </h5>
        <table className="table_box">
          <tr>
            <th>System Administrator</th>
          </tr>
          <tr>
            <td>
              - As a System Administrator, I want to be able to approve
              Tournament Organizer and Sponsor accounts so that they can access
              the platform after their account is verified.
            </td>
          </tr>
          <tr>
            <td>
              - As a System Administrator, I want to be able to create sports,
              so that users can set up tournaments with that particular sport
              option.
            </td>
          </tr>
          <tr>
            <td>
              - As a System Administrator, I want to be able to view the
              verification documents of non-verified Tournament Organizer and
              Sponsor accounts, so that I can verify the authenticity of their
              identities.
            </td>
          </tr>
        </table>
        <br></br>
        <table className="table_box">
          <tr>
            <th>User</th>
          </tr>
          <tr>
            <td>
              - As an User, I want to be able to view player statistics so that
              I can understand how the team/players are performing in more
              detail.
            </td>
          </tr>
          <tr>
            <td>
              - As an User, I want to be able to view the newsfeed so that I can
              read news about the on-going tournaments.
            </td>
          </tr>
          <tr>
            <td>
              - As an User, I want to be able to share the published news about
              a tournament on other social media platforms so that I can share
              tournament news with my friends.
            </td>
          </tr>
        </table>
        <br></br>
        <table className="table_box">
          <tr>
            <th>Tournament Organizer</th>
          </tr>
          <tr>
            <td>
              - As a Tournament Organizer, I want to be able to send an invite
              to other organizers so that we can manage the tournament together.
            </td>
          </tr>
          <tr>
            <td>
              - As a Tournament Organizer, I want to be able to create a
              tournament so that I can organize a tournament.
            </td>
          </tr>
          <tr>
            <td>
              - As a Tournament Organizer, I want to be able to accept players'
              requests to play for the tournaments so that they can play in the
              tournament.
            </td>
          </tr>
        </table>
        <br></br>
        <table className="table_box">
          <tr>
            <th>Sponsor</th>
          </tr>
          <tr>
            <td>
              - As a Sponsor, I want to be able to sponsor a tournament so that
              I can increase my brand exposure.
            </td>
          </tr>
          <tr>
            <td>
              - As a Sponsor, I want to be able to view available sponsorship
              models so that I can select a suitable one to increase exposure
              for my brand.
            </td>
          </tr>
          <tr>
            <td>
              - As a Sponsor, I want to be able to view player statistics so
              that I can understand how the team/players are performing in more
              detail.
            </td>
          </tr>
        </table>
        <h5 className="project-heading">User Diagrams</h5>
        <div className="container_to">
          <img className="responsive-img" src={UDSA} alt="UDSA" />
          <img className="responsive-img" src={UDS} alt="UDS" />
          <img className="responsive-img" src={UDSU} alt="UDSU" />
          <img className="responsive-img" src={UDTO} alt="UDTO" />
        </div>
        
        <h5 className="project-heading">Use Case Description</h5>
        <div className="centered-img-container">
        <img className="responsive-img" src={Description} alt="Description" />
        </div>
        <h5 className="project-heading">BCE Diagram</h5>
        <div className="centered-img-container">
        <img className="responsive-img" src={BCE} alt="BCE" />
        </div>
        <h5 className="project-heading">Sequence Diagram</h5>
        <div className="centered-img-container">
        <img className="responsive-img" src={sequence} alt="sequence" />
        </div>
        <h5 className="project-heading">Test Plan</h5>
        <div className="centered-img-container">
        <img className="responsive-img" src={TestPlan} alt="TestPlan" />
        </div>
        <h5 className="project-heading">Test Case</h5>
        <div className="centered-img-container">
        <img className="responsive-img" src={TestCase} alt="TestCase" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Tournament;
