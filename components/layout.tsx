import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { styled } from "../stitches.config";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const activeStyle = {
    color: "#F76808",
  };

  return (
    <div>
      <Header>
        <Link href="/">
          <a>
            <Logo>NIKKI</Logo>
          </a>
        </Link>
        <LinksWrapper>
          <Link href="/">
            <a style={router.pathname === "/" ? activeStyle : {}}>Home</a>
          </Link>
          <Link href="/about">
            <a style={router.pathname === "/about" ? activeStyle : {}}>About</a>
          </Link>
          <Link href="/projects">
            <a style={router.pathname === "/projects" ? activeStyle : {}}>
              Projects
            </a>
          </Link>
        </LinksWrapper>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <Link href="/">
          <a>
            <Logo>NIKKI</Logo>
          </a>
        </Link>
        <LinksWrapper>
          <Link href="/">
            <a style={router.pathname === "/" ? activeStyle : {}}>Home</a>
          </Link>
          <Link href="/about">
            <a style={router.pathname === "/about" ? activeStyle : {}}>About</a>
          </Link>
          <Link href="/projects">
            <a style={router.pathname === "/projects" ? activeStyle : {}}>
              Projects
            </a>
          </Link>
        </LinksWrapper>
      </Footer>
    </div>
  );
};

export default Layout;

const Main = styled("main", {
  display: "flex",
  flexDirection: "column",

  "@bp1": {
    paddingTop: "114px",
  },
});

const LinksWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  a: {
    fontSize: "14px",
    marginLeft: "32px",
  },
});

const Header = styled("header", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "32px",
  paddingBottom: "16px",
  backgroundColor: "$accent",
  borderBottom: "1px solid #FFDCC3",
  color: "$text",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: 1,
});

const Logo = styled("h1", {
  color: "$primary",
  fontSize: "18px",
  letterSpacing: "-1px",
});

const Footer = styled("footer", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "64px",
  backgroundColor: "$accent",
  borderTop: "1px solid #FFDCC3",
  height: "33vh",

  "a:first-child": {
    margin: "0px",
  },
});
