import Head from "next/head";

import Layout from "../components/layout";

import type { ReactElement } from "react";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url('/funbackground.png')",
        backgroundSize: "128px 128px",
        width: "100vw",
        height: "calc(100vh - 130px)",
      }}
    >
      <Head>
        <title>Nicole Couture</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>main</main>

      <footer>footer</footer>
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
