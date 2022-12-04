import React, { useState } from "react";
import "./projects.css";
import { projects } from "../../assets/projects";
import { useEffect } from "react";
import {motion} from 'framer-motion'


const Projects = () => {
  const [index, setIndex] = useState(0);
const[isMoving, setIsMoving] = useState(false)
const[isDown, setIsDown] = useState(false)
const[clientX, setClientX] = useState(0)

function mouseDown(e){
  setIsDown(true)

console.log('click')
}

function mouseMove(){

// isClicked && setIsMoving(true)
isDown && console.log('move')
}
function mouseUp(e){
  setIsDown(false)
// setIsMoving(false)

// setClientX(prev => prev - e.clientX)
// console.log('up')
// console.log(clientX)
}

function mouseLeave(){
  setIsDown(false)
}


const letter = {
  animate: {
    transition:{
      delayChildren:0.4,
      staggerChildren:0.1
    }
  }
}

  return (
    <div className="projects_container"
 
    >
      {/* <h2 className="heading">Projects</h2> */}
      <div className="latest">
        <div className="content" variants={letter}>
          <span>LATEST PROJECT</span>
          <motion.h2 
          initial={{
            x:-100, opacity:0
          }}
          transition={{duration:.5}}
          whileInView={{x:0, opacity:1}}
          >Fashio Nepal</motion.h2>
          <motion.p 
          initial={{opacity:0, x:100}}
        transition={{ duration:.5, delay:.4}}

        whileInView={{opacity:1, x:0}}
        
          >
            Combine with ideas of owner, Anonymous . Designed an awesome
            E-commerce app with super exciting features.
          </motion.p>
          <a href="">See project </a>
        </div>
      </div>
      <h2 className="more_projects_heading">More Projects</h2>

      <div className="more_projects">
        <div
          className="projects"
          onClick={mouseDown}
          onMouseMove={mouseMove}
          onMouseUp={mouseUp}

          onMouseLeave={mouseLeave}
          // style={{width:`${projects.length * 400}px`}}
        >
          {projects.map((project, ind) => {
            return (
              <motion.div
              initial={{opacity:0}}
              whileInView={{opacity:1}}
              transition={{duration:.4}}
                className="project"
                key={ind}
                style={{transform:`translateX(-${index * 100}%)`}}
              >
                <div className="info">
                  <h2 style={{ color: "var(--primary-1)" }}>{project.name}</h2>
                  <p style={{ letterSpacing: "2px" }}>{project.desc}</p>
                </div>
                <div className="img_container">
                  <img src={project.img} alt="img" />
                  <a href={project.link}>See project</a>
                </div>
              </motion.div>
            );
          })}

        
        </div>
       <div className="dots">
       {projects.map(((p, index) => {
            return <span className="dot" key={index}></span>
          }))}
       </div>
      </div>
    </div>
  );
};

export default Projects;
