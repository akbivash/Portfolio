import React, { useEffect, useState } from 'react'
import { services } from '../../assets/services'
// import { skills } from '../../assets/skills'
import './skills.css'
import {urlFor, client} from '../../client'

const Skills = () => {
  const [skills, setSkills] = useState([])

  useEffect(() => {
const query = '*[_type == "skills"]'
client.fetch(query)
.then((data) => {
  setSkills(data)
})
  }, [])
  return (
  <div className="skills_container">
    <h2 className='heading'>My Top Skills</h2>
    <div className="skills">
      {skills.map(item  => {
        return <div className="skill" key={item.name}>
        <img src={urlFor(item.icon.asset._ref)} alt="image" />
          <div className="info">
            <h2>{item.name}</h2>
            <ul>
              {item.stacks.map((i, ind) => {
                return <span key={ind}>{i}</span>
              })}
            </ul>
          </div>
        </div>
      })}
    </div>
  </div>
  )
}

export default Skills