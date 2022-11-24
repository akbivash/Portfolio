import React, { useContext , useState} from "react"
const AppContext = React.createContext()

const AppProvider = ({children}) =>{
    const[isMenuOpen, setIsMenuOpen] = useState(false)


    const handleMenu = () => {
        setIsMenuOpen(prev => !prev)
    }

    const closeMenu = () =>{
        setIsMenuOpen(false)
    }

    return <AppContext.Provider value ={{
        handleMenu,
        isMenuOpen,
        closeMenu
       
    }} >
        {children}
    </AppContext.Provider>
}
// custom hook 
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}
