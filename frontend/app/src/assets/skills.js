import { FaReact ,FaConnectdevelop} from "react-icons/fa"
import {MdDesignServices, MdReadMore} from 'react-icons/md'
import{AiFillApi} from 'react-icons/ai'
export const skills = [
    {   id:1,
        img:<MdDesignServices/>,
        name: 'UI/UX Design',
        stacks:['Mobile app design', 'Landing pages', 'Prototyping']
    }  ,
    {   id:2,
        img:<FaConnectdevelop/>,
        name: 'Frontend development',
        stacks:['HTML/CSS', 'JavaScript', 'React', 'Animation']
    }  ,
    {   id:3,
        img:<AiFillApi/>,
        name: 'REST Api',
        stacks:['Node JS', 'Express']
    }  ,
    
    {   id:4,
        img:<MdReadMore/>,
        name: 'Additional Skills',
        stacks:['Github','ReduxJS/Toolkit', 'MongoDB', 'Firebase']
    }  
]