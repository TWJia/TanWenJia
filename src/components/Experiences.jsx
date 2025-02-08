import React from "react";
import Navbar from "./Navbar";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from "@mui/icons-material/Work";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ChairIcon from "@mui/icons-material/Chair";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import "./Education/Education.css";
import ScrollToTop from "./ScrollToTop";
import Footer from "./Footer";
const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

const ExperienceCard = ({ experience }) => {
  const { title, company_name, icon: Icon, iconBg, date, points } = experience;
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#ed95ca",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid #ed95ca" }}
      date={
        <span style={{ color: "black", fontWeight: "bold", fontSize: "16px" }}>
          {experience.date}
        </span>
      }
      iconStyle={{ background: experience.iconBg }}
      icon={<Icon />}
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-black text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>

        <ul
          className="mt-5 list-disc ml-5 space-y-2"
          style={{ padding: "10px" }}
        >
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};
const Experiences = () => {
  const experiences = [
    {
      title: "IT Project Manager",
      company_name: "BEENET Singapore Pte Ltd",
      icon: GroupIcon,
      iconBg: "#985ae7",
      date: "June 2024 - Current",
      points: [
        "Led the completion of multiple high-priority projects, ensuring timely delivery and alignment with client requirements, achieving consistent project success and client satisfaction.",
        "Created and implemented efficient communication plans, Gantt charts, and detailed implementation plans for RFI/Tender responses, improving the clarity and organization of project proposals.",
        "Consistently ensured the on-time and on-budget completion of projects by effectively tracking and managing project performance, contributing to improved client satisfaction and repeat business.",
        "Successfully developed detailed RFI/Tender proposals, leading to the company’s ability to secure competitive contracts and strengthen its reputation within the industry.",
        "Managed ongoing post-implementation relationships with clients, ensuring high levels of satisfaction and fostering long-term partnerships through consistent follow-up and support.",
        "Successfully tracked financial milestones and scheduling for training, custom software development, and service engagements, ensuring all projects were completed on time and within budget.",
        "Collaborated closely with BEENET software developers to ensure User Acceptance Testing (UAT) for custom software was effectively planned, executed, and met client requirements, securing services delivery sign-offs.",
        "Worked with technical consultants to ensure that all services engagements were delivered according to client specifications, achieving successful client outcomes.",
        "Coordinated with BEENET trainers to ensure all training services were scheduled and delivered on time, supporting clients’ needs and increasing training satisfaction."
      ],
    },
    {
      title: "PMO Intern",
      company_name: "VIPSHOP Singapore Pte Ltd",
      icon: WorkIcon,
      iconBg: "#745ad1",
      date: "Sept 2023 - March 2024",
      points: [
        "Orchestrated successful market entry into Southeast Asia, collaborating with experts from Singapore and China.",
        "Facilitated seamless cross-functional collaboration between commercial customer service, operation teams, and other stakeholders, supporting daily PMO operations.",
        "Drove the planning and execution of project milestones for successful new country launches in Southeast Asia and other targeted markets.",
        "Identified and resolved challenges at their source, providing innovative solutions for enhanced efficiency across all targeted markets.",
        "Collaborated closely with experienced professionals from various regions, ensuring a dynamic work environment and leveraging diverse expertise for successful market entries.",
        "Demonstrated versatility by actively participating in various tasks beyond core responsibilities, such as organizing payment platforms for markets in Southeast Asia, engaging in business communication and price coordination to reduce costs, and assisting in backend payment platform management, including data extraction and analysis.",
      ],
    },
    {
      title: "Interior Designer",
      company_name: "Traartgroup Pte Ltd",
      icon: DesignServicesIcon,
      iconBg: "#e364ca",
      date: "Aug 2019 - Sept 2021",
      points: [
        "Design Concept, Space Planning, 3D modeling, Drafting, Preparation of presentation and submission.",
        "Applied design principles and creative thinking to develop innovative concepts and solutions.",
        "Collaborated with cross-functional teams to ensure successful project execution and client satisfaction.",
        "Adapted quickly to changing project requirements and deadlines, demonstrating flexibility and adaptability.",
        "Effectively communicated with stakeholders and team members to facilitate seamless collaboration and project progress.",
      ],
    },
    {
      title: "Interior Designer Intern",
      company_name: "Exsto Asia Pte Ltd",
      icon: ChairIcon,
      iconBg: "#d15a84",
      date: "April 2018 - June 2018",
      points: [
        "Design drafting, making changes to website, design poster, layout plans",
      ],
    },
  ];

  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <>
        <div className="bg_pink">
          <motion.div variants={textVariant()}>
            <h2 className="project-heading">
              Work <strong className="darkPink">Experience</strong>
            </h2>
          </motion.div>

          <div className="mt-20 flex flex-col">
            <VerticalTimeline>
              {experiences.map((experience, index) => (
                <ExperienceCard key={index} experience={experience} />
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </>
      <Footer />
    </div>
  );
};

export default Experiences;
