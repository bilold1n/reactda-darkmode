import React, { useContext } from "react";
import Header from "../../components/header";
import { DarkMode } from "../../context/context";
function About() {
  const {
    state: { lanuage },
  } = useContext(DarkMode);
  return <></>;
}
export default About;
