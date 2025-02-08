import React, { useState } from "react";
import Navbar from "../Navbar";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import home from "../../assets/Pet/Home.png";
import pet1 from "../../assets/Pet/Adopt.png";
import pet2 from "../../assets/Pet/AdoptForm.png";
import AdoptList from "../../assets/Pet/AdoptList.png";
import AdoptList2 from "../../assets/Pet/AdoptList2.png";
import Filter from "../../assets/Pet/Filter.png";
import Form from "../../assets/Pet/Form.png";
import Login from "../../assets/Pet/Login.png";
import "./PetAdopt.css";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";

const PetAdopt = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const images = [
    {
      original: home,
      thumbnail: home,
      description: "Home Page",
    },
    {
      original: Filter,
      thumbnail: Filter,
      description: "Filter dogs Function",
    },
    {
      original: pet1,
      thumbnail: pet1,
      description: "Sign Up",
    },
    {
      original: Login,
      thumbnail: Login,
      description: "Login",
    },
    {
      original: Form,
      thumbnail: Form,
      description: "Form To Release pets",
    },
    {
      original: AdoptList2,
      thumbnail: AdoptList2,
      description: "Adopt List",
    },
    {
      original: AdoptList,
      thumbnail: AdoptList,
      description: "Detailed information",
    },
    {
      original: pet2,
      thumbnail: pet2,
      description: "Form To Adopt Pet",
    },
  ];

  const handleImageClick = (event, index) => {
    event.preventDefault();
    setFullscreenImage(event.target.src);
  };

  const handleCloseFullscreenImage = () => {
    setFullscreenImage(null);
  };
  return (
    <div><ScrollToTop />
      <Navbar />
      <div className="achievements-container">
        <div className="animate__animated animate__fadeInDown">
          <h1 className="project-heading">
            Pet Adoption <strong className="darkPink">Application </strong>
          </h1>
        </div>
        <table className="table_box">
          <tr>
            <th>Project Summary</th>
          </tr>
          <tr>
          <td>
          •	Application used: ReactJS
          </td>
          </tr>
          <tr>
            <td>
            •	Includes additional features such as search bar, signup and login/logout.
            </td>
          </tr>
          <tr>
            <td>
            •	Created reusable component. 
            </td>
          </tr>
          <tr>
            <td>
            •	Used local storage for storing data.
            </td>
          </tr>
        </table>
        <br></br>
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
      </div>
      <Footer />
    </div>
  );
};

export default PetAdopt;
