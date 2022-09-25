import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  let navLinks = links.slice(2).map((link) => {
    // console.log(link)
    return (
      <>
        <a href="#home" key="home" home={link.home}>home</a>
        <a href="#about" key="about" about={link.about}>about</a>
        <a href="#projects" key="projects" projects={link.projects}>projects</a>
      </>
    )  
  })
  console.log(navLinks);
  return <nav>{navLinks}</nav>;
}

export default NavBar;
