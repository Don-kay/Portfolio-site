import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [TargetAxis, setTargetAxis] = useState(false);
  const [navAxis, setnavAxis] = useState(false);

  const AxisSuccess = () => {
    setTargetAxis(true);
  };
  const AxisFailed = () => {
    setTargetAxis(false);
  };
  const NavSuccess = () => {
    setnavAxis(true);
  };
  const NavFailed = () => {
    setnavAxis(false);
  };

  const openSideBar = () => {
    setSideBarOpen(true);
  };
  const closeSideBar = () => {
    setSideBarOpen(false);
  };

  const openSubMenu = (text, cordinates) => {
    setLocation(cordinates);
    setSubmenuOpen(true);
  };
  const closeSubMenu = () => {
    setSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        navAxis,
        sideBarOpen,
        submenuOpen,
        TargetAxis,
        AxisSuccess,
        AxisFailed,
        NavSuccess,
        NavFailed,
        openSideBar,
        closeSideBar,
        openSubMenu,
        closeSubMenu,
        location,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
