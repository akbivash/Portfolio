import React, { useContext, useState } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  function handleLinksClick(e) {
    e.preventDefault();
    // setIsMenuOpen(prev => !prev)
    setIsMenuOpen(false)
    let id = e.target.getAttribute("href").slice(1);
    var elem = document.getElementById(id);
    const location = elem.offsetTop - 90;
    window.scrollTo({
      left: 0,
      top: location,
      behavior: "smooth",
    });
  }

  return (
    <AppContext.Provider
      value={{
        handleMenu,
        isMenuOpen,
        closeMenu,
        handleLinksClick,
        setIsLoading,
        isLoading,
        setEmailSent,
        emailSent,
        setShowMessage,
        showMessage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
