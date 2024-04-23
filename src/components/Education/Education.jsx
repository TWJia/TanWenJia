// import React from "react";
// import "./Education.css";
// import Navbar from "../Navbar";

// const Card = (props) => {
//   const { uiColor } = props;
//   return (
//     <div className={`Card ${props.className}`} style={{ borderColor: uiColor }}>
//       {props.children}
//     </div>
//   );
// };

// const EducationData = {
//   collegeName: "University Of Wollongong",
//   courseName: "Bachelor of Computer Science (Big Data)",
//   couseStartYear: "2021",
//   courseEndYear: "2024",
//   details: [
//     "Cumulative Average: 72.6",
//     "Relevant Coursework/ Academic Achievements:",
//     "AWS Academy Cloud Foundation(2023)",
//     "ISIT204- Principles of eBusiness/ High Distinction",
//     "CSIT214- IT Project Management/ Distinction (Project Manager)",
//     "ISIT207- Frontend Web Programming/ Distinction",
//     "CSIT128- Introduction to Web Technology/ Credit",
//     "CSIT314- Software Development Methodologies/ Credit",
//   ],
// };

// const Education = () => {
//   const uiColor = "#000";
//   const nonThemeColor = "#000";

//   return (
//     <div>
//       <Navbar>
//         <div className="degreeMain">
//           <h1 style={{ color: nonThemeColor }}>Degree Pursuing</h1>
//           <div className="degreeCard">
//             <div
//               className="degreeImage centered"
//               style={{ borderColor: uiColor }}
//             >
//               <img
//                 src="https://www.uow.edu.au/assets/curated/brand-playbook/logo/logo-primary.png"
//                 alt="degree"
//                 srcSet=""
//               />
//             </div>
//             <Card className="degreeWrapper">
//               <div className="degreeInfo">
//                 <h3 style={{ color: nonThemeColor }}>
//                   {EducationData.couseStartYear} - {EducationData.courseEndYear}
//                 </h3>
//                 <h1 style={{ color: uiColor }}>{EducationData.collegeName}</h1>
//                 <h2 style={{ color: nonThemeColor }}>
//                   {EducationData.courseName}
//                 </h2>
//               </div>
//               <ul className="details">
//                 {EducationData.details.map((item, index) => (
//                   <li key={index}>{item}</li>
//                 ))}
//               </ul>
//             </Card>
//           </div>
//         </div>
//       </Navbar>
//     </div>
//   );
// };

// export default Education;
//className="animate__animated animate__fadeIn"
//....................................................................................

import { motion } from "framer-motion";
import React from "react";
import { GrCertificate } from "react-icons/gr";
import { HiAcademicCap, HiMiniBuildingOffice } from "react-icons/hi2";
import Footer from "../Footer";
import Navbar from "../Navbar";
import ScrollToTop from "../ScrollToTop";
import styles from "./Education.module.css";
const containerR = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const educationData = [
  {
    institution: "University Of Wollongong",
    icon: HiAcademicCap,
    course: "Bachelor of Computer Science (Big Data)",
    startYear: "2021",
    endYear: "2024",
    details: [
      "Cumulative Average: 72.6",
      "Relevant Coursework/ Academic Achievements:",
      "AWS Academy Cloud Foundation(2023)",
      "ISIT204- Principles of eBusiness/ High Distinction",
      "CSIT214- IT Project Management/ Distinction (Project Manager)",
      "ISIT207- Frontend Web Programming/ Distinction",
      "CSIT128- Introduction to Web Technology/ Credit",
      "CSIT314- Software Development Methodologies/ Credit",
    ],
  },
  {
    institution: "Nanyang Polytechnic",
    icon: GrCertificate,
    course: "Specialist Diploma & Diploma in Spatial Design",
    startYear: "2016",
    endYear: "2020",
    details: [],
  },
  {
    institution: "Gan Eng Seng School",
    icon: HiMiniBuildingOffice,
    course: "GCE ‘O’ Level Certificate",
    startYear: "2011",
    endYear: "2015",
    details: [],
  },
];

const Education = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <h2 className="project-heading">
        Education
        <strong className="darkPink"> History</strong>
      </h2>
      <section className={styles.container} id="experience">
        <motion.ul
          className="containerR"
          variants={containerR}
          initial="hidden"
          animate="visible"
        >
          <div className={styles.history}>
            {educationData.map((education, index) => (
              <motion.ul key={index} className="item" variants={item}>
                <p className={styles.historyItemDetails}>
                  {education.startYear} - {education.endYear}
                </p>
                <div className={styles.historyItem}>
                  <education.icon style={{ fontSize: 30 }} />
                  <h1>{education.institution}</h1>
                  <h3>{education.course}</h3>
                  <ul>
                    {education.details.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.ul>
            ))}
          </div>
        </motion.ul>
      </section>
      <Footer />
    </>
  );
};

export default Education;
