import React, { useRef, useState } from "react";
import "./home.css";
import Projects from "../projects/Projects";
import { BsFacebook } from "react-icons/bs";
import { GrGithub } from "react-icons/gr";
import {motion} from 'framer-motion'
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="homepage">
 <div className="gradient"></div>

        {/* main content  */}
        <div className="content">
          {/* left  */}
          <div className="left">
            <div className="title">
              <span className="name">
              <motion.div 
              whileInView={{opacity:[0,1]}}
              transition={{duration:0.5}}
            
              >
              <h4>Hello I'm </h4>
             
              </motion.div>
              <motion.div 
              whileInView={{opacity:[0,1]}}
              transition={{duration:1}}
              >
              
                <h2>Dip</h2>
              </motion.div>
              </span>
              <span className="moving_text">A web developer</span>
            </div>
<div className="social_icons_container">
<a href="https://github.com/akbivash"><AiOutlineGithub/></a>
<AiFillLinkedin/>
<BsFacebook/>
<span></span>
</div>
          </div>
          {/* right  */}
          <div className="right">
          <div className="icons">
            
          </div>
           <motion.div
           initial={{x:100}}
           whileInView={{opacity:[0,1], x:0}}
          viewport={{once:true}}
           transition={{ type:'tween', delay:.4, duration:.4}}
           >
           <img
              src='https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=2000'
            />
           </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
