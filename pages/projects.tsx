import Layout from "../components/layout";
import { styled } from "../stitches.config";

import type { ReactElement } from "react";

const Projects = () => {
  return (
    <div
      style={{
        padding: "0px 32px",
      }}
    >
      <h1>Projects</h1>
      <ProjectContainer>
        <ProjectTitle>
          <h4>
            Microbial Ecology Fact Sheets{" "}
            <span style={{ color: "#F76808" }}>↓</span>
          </h4>
        </ProjectTitle>
        <CardContainer>
          <Card>
            <CardTitle>
              Quick Guide to Understanding Microbial Ecology
            </CardTitle>
            <h4>Read More ↗︎</h4>
          </Card>
          <Card style={{ marginLeft: "200px", zIndex: "1" }}>
            <CardTitle>Foundations of Microbial Ecology</CardTitle>
            <h4>Read More ↗︎</h4>
          </Card>
          <Card style={{ marginLeft: "400px", zIndex: "2" }}>
            <CardTitle>Microbial Interactions</CardTitle>
            <h4>Read More ↗︎</h4>
          </Card>
          <Card style={{ marginLeft: "600px", zIndex: "3" }}>
            <CardTitle>Cells as Components of a Community</CardTitle>
            <h4>Read More ↗︎</h4>
          </Card>
          <Card style={{ marginLeft: "800px", zIndex: "4" }}>
            <CardTitle>Microbes in Aquatic Systems</CardTitle>
            <h4>Read More ↗︎</h4>
          </Card>
          <Card style={{ marginLeft: "1000px", zIndex: "5" }}>
            <CardTitle>
              Who are the Agriculturally Important Microflora?
            </CardTitle>
            <h4>Read More ↗︎</h4>
          </Card>
        </CardContainer>
      </ProjectContainer>
    </div>
  );
};

export default Projects;

Projects.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

const ProjectContainer = styled("div", {
  display: "grid",
});

const CardContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "250px 1fr",
  width: "100vw",
  maxWidth: "100vw",
  overflowX: "scroll",
  transform: "translateX(-32px)",
});

const Card = styled("div", {
  margin: "32px",
  width: "256px",
  height: "256px",
  backgroundColor: "#FFF1E7",
  borderRadius: "12px",
  border: "1px solid #FFDCC3",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "24px",
  paddingRight: "68px",
  gridArea: "1 / 1 / 2 / 2",
  boxShadow: "0px 0px 10px rgba(69, 30, 17, 0.1)",
  transition: "all 0.1s ease-in-out",

  "&:hover": {
    boxShadow: "0px 0px 25px rgba(69, 30, 17, 0.2)",
    transform: "translateX(-24px) translateY(-6px)",
    cursor: "pointer",
  },
});

const CardTitle = styled("h4", {
  fontFamily: "$serif",
  color: "#F76808",
  textTransform: "none",
  fontSize: "20px",
});

const ProjectTitle = styled("div", {
  marginTop: "32px",
  width: "calc(100vw - 64px)",
  backgroundColor: "rgb(69, 30, 17)",
  borderRadius: "12px",
  display: "flex",
  flexDirection: "column",
  padding: "12px",
  paddingLeft: "18px",
  gridArea: "1 / 1 / 2 / 2",
  marginRight: "32px",

  h4: {
    fontSize: "28px",
    // fontWeight: "bold",
    color: "white",
    textTransform: "none",
  },
});
