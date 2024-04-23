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
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Fresh Graduate",
    "PMO",
    "Product Manager",
    "Web Developer",
    "Web Designer",
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

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
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
                      data-rotate='[ "Fresh Graduate","PMO","Product Manager","Web Developer","Web Designer", "UI/UX Designer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    Recent graduate with hands-on project management experience
                    from internships and collaborative group projects. Eagerly
                    seeking opportunities to apply academic knowledge and
                    leverage skills gained from past job experiences. Open to
                    roles such as Junior Project Manager, Software Developer,
                    UI/UX Designer, Frontend Developer, or Backend Developer.
                    Committed to contributing to strategic planning, risk
                    management, and the successful execution of projects while
                    being a motivated team player ready to adapt and learn
                    quickly.
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
