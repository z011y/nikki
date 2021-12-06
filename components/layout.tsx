import React from "react";
import Link from "next/link";
import { styled, theme } from "../stitches.config";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header>
        <h1 style={{ color: theme.colors.primary, fontSize: "24px" }}>NIKKI</h1>
        <LinksWrapper>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </LinksWrapper>
      </Header>
      <Main>{children}</Main>
    </div>
  );
};

export default Layout;

const Main = styled("main", {
  display: "flex",
  flexDirection: "column",

  "@bp1": {
    paddingTop: "130px",
    paddingLeft: "32px",
  },
});

const LinksWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "256px",

  a: {
    fontSize: "14px",
  },
});

const Header = styled("header", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "32px",
  backgroundColor: "$accent",
  color: "$text",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
});
