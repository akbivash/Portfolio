import React, { useState } from "react";
import "./projects.css";
import { Link } from "react-router-dom";
import { projects } from "../../assets/projects";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const Projects = () => {
  const [index, setIndex] = useState(0);
const [width, setWidth] = useState(0)

  function handleNext(e) {

    index === projects.length - 2 ? setIndex(0) : setIndex((prev) => prev + 1);
  setWidth(e.clientX)
  }

  function handlePrev(e) {
    index === 0 ? setIndex(projects.length - 2) : setIndex((prev) => prev - 1);
    setWidth(e.clientX)
  }

  return (
    <div className="projects_container">
      <div className="latest">
        <h3 >Latest Project</h3>
        <div className="content">
          <div className="info">
            <h2>Fashio Nepal</h2>
            <p>
              Combine with ideas of owner, Anonymous . Designed an awesome
              E-commerce app with super exciting features.
            </p>
          </div>
          <Link to="/" className="link">
            <img
              src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/08/30/10/onlineshoppingclothing.jpg?width=1200"
              alt=""
            />
          </Link>
        </div>
      </div>

      <h3 >More Projects</h3>
      <div className="more_projects">
        

        <div className="projects">
          {projects.map((project, ind) => {
    
         
             return (
                <div className='project' key={ind}
                style={{transform:`translateX(-${index * 100}%)`}}
                
                >
                <div className="info">
                <h2 style={{color:'var(--primary-1)'}}>{project.name}</h2>
                  <p style={{letterSpacing:'2px'}}>{project.desc}</p>
                </div>
                  <div className="img_container">
                    <img src={project.img} alt="img" />
                    <a href={project.link}>See project</a>
                  </div>
                </div>
              );
          })}
        </div>
        <div className="icons">
          <AiFillCaretLeft onClick={handlePrev} />
          <AiFillCaretRight onClick={handleNext} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
