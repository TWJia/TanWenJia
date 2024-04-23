import "animate.css";
import React from "react";
import { Chrono } from "react-chrono";
import "./Achievements.css";

const Achievements = () => {
  const items = [
    {
      title: "2024",
      cardTitle: "HackOMania – GovTech",
      // url: "http://www.history.com",
      // cardSubtitle:
      //   "Men of the British Expeditionary Force (BEF) wade out to..",
      // cardDetailedText:
      //   "Men of the British Expeditionary Force (BEF) wade out to..",
      // media: {
      //   type: "IMAGE",
      //   source: {
      //     url: "http://someurl/image.jpg",
      //   },
      // },
    },
    {
      title: "2023",
      cardTitle: "AWS Academy Cloud Foundation",
    },
    {
      title: "2023",
      cardTitle: "Design Excellence Award",
    },
    {
      title: "2018 / 2019",
      cardTitle: "Design Excellence Award",
    },
    {
      title: "2017",
      cardTitle: "MAD in Singapore",
    },
    {
      title: "2013",
      cardTitle: "NYAA Bronze",
    },
  ];
  return (
    <div className="achievements-container">
      <div className="animate__animated animate__fadeInDown">
        <h1 className="project-heading">
          Achievements <strong className="darkPink">& Awards </strong>
        </h1>
      </div>
      <Chrono
        items={items}
        mode="HORIZONTAL"
        showAllCardsHorizontal
        cardWidth={170}
        cardHeight={90}
        fontSizes={{
          title: "1rem",
        }}
        slideShow
        theme={{
          primary: "pink",
          secondary: "palevioletred",
          // cardBgColor: "yellow",
          titleColor: "black",
          titleColorActive: "black",
          cardTitleColor: "black",
        }}
        disableToolbar
      />
    </div>
  );
};

export default Achievements;
