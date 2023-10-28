import { useEffect, useState } from "react";
import Title from "../components/react/text/Title";
import ThemeSwitchButton from "../components/react/button/ThemeSwitchButton";
import Subtitle from "../components/react/text/Subtitle";

const Container = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Detect system-based dark mode
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
    }
  }, []);

  return (
    <>
      <Title text="GPSPic is a web developer" />
      <Subtitle text="Explore his projects, websites and apps, one might be right for you. If not, he can create it!" />
      <ThemeSwitchButton darkMode={darkMode}/>
    </>
  );
};

export default Container;
