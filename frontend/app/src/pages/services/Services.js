import React from 'react'
import './services.css'
import { services } from '../../assets/services'
import {motion} from 'framer-motion'
const Services = () => {
  return (
    <div className="service_container">
    <h2 className='heading'>Why Choose Me</h2>
   <div className="services">
   {services.map((service) => {
        return  <motion.div 
              whileInView={{opacity:[0, 1]}}
              transition={{duration:.5}}
              key={service.id}
           
              >
             <div className="service" key={service.id}>
            <h4 style={{color: 'var(--primary-3)'}}>{service.title}</h4>
            <p>{service.desc}</p>
            <i>{service.icon}</i>
            {/* <a href="#">{service.link}</a> */}
        </div>
              </motion.div>
       
    })}
   </div>
    </div>
  )
}

export default Services