import "animate.css";
import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Skills.css";
export default function Skills() {
  return (
    <div>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <div className="animate__animated animate__fadeInDown">
          <h1 className="project-heading">
            Technical <strong className="darkPink"> Skills </strong>
          </h1>
        </div>
        <Col xs={4} md={2} className="tech-icons">
          {/* <DiHtml5 /> */}
          <img
            src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"
            alt=""
          />
          {/* <h6>HTML</h6> */}
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          {/* <DiCss3 /> */}
          <img
            src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
            alt=""
          />
          {/* <h6>CSS</h6> */}
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img
            src="https://i0.wp.com/theicom.org/wp-content/uploads/2016/03/js-logo.png?fit=500%2C500&ssl=1&w=640"
            alt=""
          />
          {/* <DiJavascript1 />
        
        <h6>Javascript</h6> */}
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          {/* <DiJava />
        <h6>Java</h6> */}
          <img
            src="https://www.logo.wine/a/logo/Java_(programming_language)/Java_(programming_language)-Logo.wine.svg"
            alt=""
          />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          {/* <DiJava />
        <h6>C++</h6> */}
          <img
            src="https://www.freeiconspng.com/uploads/c--logo-icon-0.png"
            alt=""
          />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img
            src="https://miro.medium.com/v2/resize:fit:900/1*TY9uBBO9leUbRtlXmQBiug.png"
            alt=""
          />
          {/* <DiNodejs />

        <h6>NodeJS</h6> */}
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img
            src="https://d2ooyrflu7lhqd.cloudfront.net/Express_JS_390db1e6f2.jpeg"
            alt=""
          />
          {/* <SiExpress />
        <h6>ExpressJS</h6> */}
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          {/* <DiReact />
        <h6>React</h6> */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVdhgNmO7S3eiXiNreVtpQo85HDVqwr9m3ee6TeT7FLA&s"
            alt=""
          />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          {/* <DiMongodb />
        <h6>MongoDB</h6> */}
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-mongodb-5-1175140.png?f=webp"
            alt=""
          />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          {/* <DiLinux />
        <h6>Linux</h6> */}
          <img
            src="https://static-00.iconduck.com/assets.00/linux-icon-2048x2048-sy06t4un.png"
            alt=""
          />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          {/* <SiOracle />
        <h6>Oracle Virtual Machine</h6> */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Virtualbox_logo.png"
            alt=""
          />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          {/* <DiMysql />
        <h6>MySQL</h6> */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1U-MvnogIOkGUViM2gOxcFYI3BZcDgKFUwGhbhCwDow8i62F_nHdtwZk3HVK9eu139f0&usqp=CAU"
            alt=""
          />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          {/* <GrHadoop />
        <h6>Hadoop</h6> */}
          <img
            src="https://www.logolynx.com/images/logolynx/42/4221d30310ddf511642099bb8bd888c3.png"
            alt=""
          />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          {/* <SiApachehive />
        <h6>HiveQL</h6> */}
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/1*vQ3ynmWVM-V3mpRyVEKufg.png"
            alt=""
          />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          {/* <SiApachespark />
                <h6>Spark</h6> */}
          <img
            src="https://cdn-images-1.medium.com/max/992/1*jVbktJTKWfDTPBxE3EpnHQ.png"
            alt=""
          />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          {/* <SiConfluence /> */}
          <img
            src="https://seeklogo.com/images/C/confluence-logo-D9B07137C2-seeklogo.com.png"
            alt=""
          />
          <h6>Confluence</h6>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Microsoft_Visio_Logo_%282013-2019%29.png"
            alt="Visio"
          />
          <h6>Visio</h6>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxZn8znccy9GlMBl20wC13KNeH-T9rJSoC9mxJL4aQAQ&s"
            alt="ProcessOn"
          />
          <h6>ProcessOn</h6>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          {/* <DiIllustrator />
        <h6>Illustrator</h6> */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx3oIWklG9BKfwh_LOAMpf_Hia1EI5mBqZwsgpWQcTfQ&s"
            alt=""
          />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          {/* <DiPhotoshop />
        <h6>Photoshop</h6> */}
          <img
            src="https://w7.pngwing.com/pngs/301/722/png-transparent-adobe-logo-logos-photoshop-logos-and-brands-icon.png"
            alt=""
          />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          {/* <SiAdobepremierepro />
        <h6>Premiere Pro</h6> */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Adobe_Premiere_Pro_Logo.svg/1200px-Adobe_Premiere_Pro_Logo.svg.png"
            alt="Premiere Pro"
          />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          {/* <SiFigma />
        <h6>Figma</h6> */}
          <img
            src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png"
            alt="Figma"
          />{" "}
          <h6>Figma</h6>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          {/* <SiAutocad />
        <h6>Autocad</h6> */}
          <img
            src="https://i0.wp.com/sthua.edu.sg/wp-content/uploads/2018/03/autocad-logo-e1519976982331.png?fit=300%2C300&ssl=1"
            alt="Autocad"
          />
        </Col>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <div className="animate__animated animate__fadeInDown">
          <h1 className="project-heading">
            Work Place <strong className="darkPink"> Skills </strong>
          </h1>
        </div>
        <Col xs={4} md={2} className="tech-icons">
          <h6>Bilingual: English, Chinese</h6>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <h6>Agile Project Management</h6>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <h6>Independent worker</h6>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <h6>Team player</h6>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <h6>Positive attitude</h6>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <h6>Organized</h6>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <h6>Passion</h6>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <h6>Commitment</h6>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <h6>Patience</h6>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <h6>Adaptable</h6>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <h6>Effective communication</h6>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <h6>Empathy</h6>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <h6>Humility</h6>
        </Col>
      </Row>
    </div>
  );
}
