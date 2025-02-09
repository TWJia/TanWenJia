import "animate.css";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";
import headerImg from "../assets/Profile.png";
import "./TopPage.css";

export default function TopPage() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100 - Math.random() * 30);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "IT Project Manager",
    "PMO",
    "Product Manager",
    "Scrum Master",
    "QA Tester",
    "UI/UX Designer",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    // if (isDeleting) {
    //   setDelta((prevDelta) => prevDelta / 2);
    // }

    if (isDeleting) {
      setDelta(75);
    } else {
      setDelta(100); 
    }


    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center ">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span> 
                  <h1>
                    {`Hello! I'm Wen Jia`}{" "}
                    <span className="wave" role="img" aria-labelledby="wave">
                      👋🏻
                    </span>
                    <br></br>
                    <span
                      className="txt-rotate"
                      dataperiod="1000"
                      data-rotate='[ "IT Project Manager","PMO","Product Manager","Scrum Master","QA Tester", "UI/UX Designer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                  Results-driven IT Project Manager with hands-on experience in overseeing project lifecycles, ensuring timely service delivery, 
                  and managing client relationships. Skilled in project planning, risk management, stakeholder coordination, and financial 
                  milestone tracking. Proven ability to lead cross-functional teams, optimize workflows, and deliver high-quality solutions 
                  aligned with client expectations. 
                  Experienced in handling RFI/Tenders, developing implementation plans, and facilitating User Acceptance Testing (UAT) for software projects. 
                  Passionate about driving project success through strategic planning, effective communication, and adaptability in dynamic environments.
                  Seeking new opportunities to contribute my expertise in project management and service delivery within a dynamic, collaborative organization.
                  </p>
                  <button
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/wen-jia-tan-27904521b",
                        "_blank"
                      )
                    }
                  >
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                  <a 
  href="https://drive.google.com/uc?export=download&id=10IXofVvN7nhELJbWaY77uRxS_NfcI_cV" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="download-btn">
    Download CV
  </button>
</a>

                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img
                    src={headerImg}
                    alt="Header Img"
                    // style={{ width: "25%", height: "auto" }}
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
