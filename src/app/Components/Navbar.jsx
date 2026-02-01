"use client";
import { useState } from "react";
import SlideBar from "./Slidebar";
import { RiMenu5Line } from "react-icons/ri";
import { HiMenuAlt4 } from "react-icons/hi";
import { Link } from "react-scroll";
import styled from "styled-components";

const StyledLink = styled.li`
  color: #d0d0d0;
  cursor: pointer;
  position: relative; /* Essential for positioning the underline */
  display: inline-block; /* Ensures width matches the text width */

  /* The transition for the text color change */
  transition: color 0.3s ease;

  /* The actual underline element */
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: #a9a9a9;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    color: #ffffff;
  }

  &:hover::after {
    transform: scaleX(1.1); /* Expand to full width */
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen((o) => !o);
  return (
    <div className="fixed top-0 left-0 z-50 w-full">
      <nav className="hidden justify-end p-2 lg:flex">
        <ul className="text-para-sm-2 flex gap-6 font-extralight">
          <StyledLink>
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-240}
              activeClass="text-[#f59e0b]"
              spy={true}
            >
              Home
            </Link>
          </StyledLink>
          <StyledLink>
            <Link
              to="whyus"
              smooth={true}
              duration={500}
              offset={-40}
              activeClass="text-[#f59e0b]"
              spy={true}
            >
              Why us
            </Link>
          </StyledLink>
          <StyledLink>
            <Link>Projects</Link>
          </StyledLink>
          <StyledLink>
            <Link>Contact us</Link>
          </StyledLink>
        </ul>
      </nav>

      <HiMenuAlt4
        onClick={handleClose}
        className="fixed right-4 bottom-4 block rounded-md bg-[#aaaaaa] text-4xl text-white md:text-5xl lg:hidden"
      />
      <SlideBar
        className="lg:hidden"
        isOpen={isOpen}
        direction="right"
        onClose={handleClose}
        title="Sarthak Construction Co."
      >
        <nav></nav>
      </SlideBar>
    </div>
  );
}
export default Navbar;
