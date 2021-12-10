import Head from "next/head";
import Link from "next/link";
import { styled } from "../stitches.config";

import Layout from "../components/layout";

import type { ReactElement } from "react";

export default function Home() {
  return (
    <>
      <section
        style={{
          backgroundImage: "url('/funbackground.png')",
          backgroundSize: "128px 128px",
          width: "100vw",
          paddingLeft: "32px",
          height: "calc(100vh - 260px)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          marginBottom: "32px",
        }}
      >
        <Head>
          <title>Nicole Couture</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Title>
          <div>
            <p
              style={{
                marginBlockStart: "0",
                marginBlockEnd: "0",
              }}
            >
              Hi, I'm{" "}
            </p>
            <h1
              style={{
                color: "#F76809",
                marginBlockStart: "0",
                marginBlockEnd: "0",
              }}
            >
              Nicole Couture
            </h1>
            <p
              style={{
                marginBlockStart: "0",
                marginBlockEnd: "0",
              }}
            >
              Biotechnology Researcher
            </p>
            <Link href="/about">
              <a>
                <AboutLink style={{ color: "#F76809", marginTop: "12px" }}>
                  more about me →
                </AboutLink>
              </a>
            </Link>
          </div>
        </Title>
        <Illustration src="/nicole.png" />
      </section>
      <section
        style={{
          backgroundColor: "#FFF1E7",
          minHeight: "calc(100vh - 72px)",
          padding: "128px 256px",
          position: "relative",
          borderTop: "1px solid #FFDCC3",
          borderBottom: "1px solid #FFDCC3",
        }}
      >
        <h2
          style={{
            position: "absolute",
            left: "32px",
            top: "32px",
            marginBlockStart: "0",
            marginBlockEnd: "0",
          }}
        >
          EDUCATION ↓
        </h2>
        <h1 style={{ color: "#F76809", marginBottom: "12px" }}>
          Utah Valley University
        </h1>
        <h4>○ Associate of Science in Biology </h4>
        <p style={{ marginBlockStart: "0" }}>
          In Spring of 2021 I received my Associate of Science degree in
          Biology. This was important for me to achieve because I spent much of
          this time focusing my studies towards cell biology and biological
          evolution during this time.
        </p>
        <h4>○ Bachelor of Science in Biotechnology</h4>
        <p style={{ marginBlockStart: "0" }}>
          I'm currently in my Senior year working towards my Bachelor's degree
          in Biotechnology. My focuses for this degree are protein purification
          and amplification, bacterial transformation, and nucleic acid
          manipulation.
        </p>
        <h4>○ Bachelor of Science with a Minor in Biology </h4>
        <p style={{ marginBlockStart: "0" }}>
          In order to receive my minor, I'm focusing my studies in relation to
          embryology and biological development. In order to do this, I've taken
          courses in relation to this topic and used chicken fetal cells in lab
          to produce results relating to their population doubling time.{" "}
        </p>
      </section>
      <section
        style={{
          minHeight: "calc(100vh - 72px)",
          padding: "128px 256px",
          position: "relative",
        }}
      >
        <h2
          style={{
            position: "absolute",
            left: "32px",
            top: "32px",
            marginBlockStart: "0",
            marginBlockEnd: "0",
          }}
        >
          ACCOMPLISHMENTS ↓
        </h2>
        <h1 style={{ color: "#F76809", marginBottom: "12px" }}>InnovaBio</h1>
        <h4>○ Research Associate Intern </h4>
        <p style={{ marginBlockStart: "0" }}>
          InnovaBio is a biotechnology laboratory on campus that has allowed me
          the opportunities to work on projects relating to the study of
          Alzheimer's Disease, testing the cell toxicity of specific solutions,
          and working with Utah CSI for a classified project.
        </p>
        <h4>○ Intern Scholarship</h4>
        <p style={{ marginBlockStart: "0" }}>
          Due to my internship being unpaid, I recently applied for an
          internship to help supply textbooks and other resources during my time
          as a student. My application was accepted and I was awarded a partial
          scholarship.
        </p>
      </section>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

const Title = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  transform: "translateY(-72px)",
});

const Illustration = styled("img", {
  width: "66%",
});

const AboutLink = styled("h4", {
  transition: "0.2s ease-in-out",
  width: "fit-content",
  "&:hover": {
    cursor: "pointer",
    transform: "translateX(4px)",
  },
});
