import Layout from "../components/layout";
import { styled } from "../stitches.config";

import Link from "next/link";

import type { ReactElement } from "react";

const About = () => {
  return (
    <div
      style={{
        padding: "0px 32px",
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gridGap: "128px",
        height: "calc(100vh - 106px)",
      }}
    >
      <div>
        <h1>About Me</h1>
        <p style={{ fontSize: "20px" }}>
          I’m a Biotechnology undergrad student at Utah Valley University and I
          am expected to graduate in Spring of 2022! When I’m not studying or at
          my internship at InnovaBio, I spend much of my free-time with my
          husband, Cameron, and playing with my dog, Piper! I’m originally from
          Northern California and though I do miss the sequoia trees and the
          warm beach days, Utah surprisingly feels like home.
          <br /> <br />
          My next steps for the future are to graduate with my B.S. in
          Biotechnology and a Minor in Biology from UVU and then I plan to move
          to Salt Lake City to pursue further education at the University of
          Utah!
        </p>
        <Link href="/projects">
          <a>
            <AboutLink style={{ color: "#F76809", marginTop: "12px" }}>
              see my projects →
            </AboutLink>
          </a>
        </Link>
      </div>
      <div>
        <img src="/about.jpg" style={{ width: "100%", borderRadius: "32px" }} />
      </div>
    </div>
  );
};

export default About;

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

const AboutLink = styled("h4", {
  transition: "0.2s ease-in-out",
  width: "fit-content",
  "&:hover": {
    cursor: "pointer",
    transform: "translateX(4px)",
  },
});
