import {SiAltiumdesigner} from 'react-icons/si'
import {BsCodeSlash} from 'react-icons/bs'
import {SiGoogletagmanager} from 'react-icons/si'
import {Link} from 'react-router-dom'
export const services = [
    {
        id:1,
        title: 'Unique Design',
        desc: '  Bring the best experience to the user. Have fun. ',
        icon: <SiAltiumdesigner/>,
        link: <Link to='/'>More</Link>
        
    },
    {
        id:2,
        title: 'Clean Code',
        desc: '  Building app with simple and readable codes. ',
        icon: <BsCodeSlash/>,
        link: <Link to='/'>More</Link>
        
    },
    {
        id:3,
        title: 'Scalable',
        desc: ' lorem epsum gibhno feingm  ',
        icon: <SiGoogletagmanager/>,
        link: <Link to='/'>More</Link>
        
    },
    {
        id: 4,
        title: 'Modern Technologys',
        desc: ' Using the best stack to fit the needs.  ',
        icon: <SiAltiumdesigner/>,
        link: <Link to='/'>More</Link>
        
    },
]

