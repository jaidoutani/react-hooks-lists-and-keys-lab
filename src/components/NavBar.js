import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navLinks = links.map((link) => {
    console.log(link)
    return <a href={`#${link}`} key={link} >{link}</a>
  })
  // console.log(navLinks);
  return <nav>{navLinks}</nav>;
}

export default NavBar;
