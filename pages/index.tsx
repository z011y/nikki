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
          justifyItems: "center",
          marginBottom: "32px",
        }}
      >
        <Head>
          <title>Nicole Couture</title>
          <link rel="icon" href="/favicon.png" />
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
                // color: "#F76809",
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
          // minHeight: "calc(100vh - 72px)",
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
        <h4>
          ○ Associate of Science in Biology <em>(recieved May 2021)</em>{" "}
        </h4>

        <h4>
          ○ Bachelor of Science in Biotechnology, Minor in Biology{" "}
          <em>(expected May 2022)</em>
        </h4>
        <h1
          style={{ color: "#F76809", marginBottom: "12px", marginTop: "32px" }}
        >
          University of California Santa Cruz
        </h1>
        <h4>○ Proposed Major: Biochem & Molecular Biology</h4>
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
          EXPERIENCE ↓
        </h2>
        <h1 style={{ color: "#F76809", marginBottom: "12px" }}>InnovaBio</h1>
        <h4>○ Research & Development Intern </h4>
        <p style={{ marginBlockStart: "0" }}>
          - Studied the development of Alzheimer’s caused by mutations in
          amyloid precursor proteins through protein-protein interaction
          networks
          <br />
          - Performed cellular and molecular biology techniques such as
          transfection, mutagenesis, qPCR, PCR, and nucleic acid purification
          <br />
          - Prepared technical reports, summaries, protocols, and quantitative
          analyses
          <br />- Maintained hepatocellular carcinoma and COS adhesion cell
          lines
        </p>
        <h4>○ Cell-Based Assay Development</h4>
        <p style={{ marginBlockStart: "0" }}>
          - Performed cell-based viability assays on essential oil compounds
          <br />
          - Maintained cultures of multiple human dermal fibroblast cells lines
          <br />
          - Troubleshot and optimized assays through data interpretation
          <br />- Independently planned and executed experiments
        </p>
        <h4>○ Laboratory Research Assistant</h4>
        <p style={{ marginBlockStart: "0" }}>
          - Operated and maintained an anaerobic chamber
          <br />
          - Prepared vaginal microbial samples for analysis
          <br />
          - Developed lab protocols and SOP’s
          <br />- Maintained detailed logs of experiments and reported
          scientific findings
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
  transform: "translateY(-32px)",
  // backgroundColor: "#FFF1E7",
  // border: "1px solid #FFDCC3",
  borderRadius: "16px",
  width: "fit-content",
  // padding: "32px",
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
