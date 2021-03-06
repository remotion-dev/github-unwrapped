import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <meta property="og:image" content="/flash.png" />
        <meta
          property="og:image"
          content="https://www.githubunwrapped.com/flash.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
