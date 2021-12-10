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
      }}
    >
      <div style={{ paddingRight: "128px" }}>
        <h1>About Me</h1>
        <p>
          I'm originally a transfer student from the University of California,
          Santa Cruz. Though I was thrilled to be going to a UC, I quickly
          discovered the hands-on research I was so desperately eager to
          participate in was reserved for graduate students. Thankfully, I soon
          found my place at Utah Valley University where I was given numerous
          opportunities to get my hands dirty and ended up excelling in both my
          biotechnology and microbiology courses. <br /> <br /> Though I
          obviously thoroughly enjoy my schooling, I am also happy to share my
          life with my new husband whom I've been dating for six years, and
          recently married in May 2021 and our dog named Piper. My favorite
          season to spend with them is the Fall. This is the best time of year
          for us all to go hiking and enjoy pumpkin flavored treats.{" "}
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
