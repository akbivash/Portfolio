import React from "react";
import "./about.css";
import {motion} from 'framer-motion'



const About = () => {
  return (
    <div className="about"
 
    >
      <div className="left">
      <motion.img src="https://img.freepik.com/free-photo/call-me-please-optimistic-attractive-young-man-asks-dial-his-number-contact-by-phone_273609-18673.jpg?w=2000" alt=""
        initial={{opacity:0, x:-100}}
   whileInView={{opacity:1, x:0}}
   transition={{duration:.4}}
       />
      </div>
      <motion.div className="right"  
           initial={{opacity:0}}
   whileInView={{opacity:1}}
   transition={{duration:.4, delay:.4}}
      >
        <h2>Dipshikha Adhikari</h2>

        <div className="info">
          <span>An exceptional web developer</span>
          <p>
            I am in web development from more than 2 years and have been
            developed project including landing page, animation, whole frontend
            design along with my own fullstack E-commerce site.

          </p>
         
        </div>
      </motion.div>
    </div>
  );
};

export default About;
