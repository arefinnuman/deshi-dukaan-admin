import "@/styles/globals.css";
import Head from "next/head";
import Footer from "./layouts/footer";
import Header from "./layouts/header";

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Head>
        <title>Deshi Dukaan</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="max-w-[1440px] mx-auto">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
