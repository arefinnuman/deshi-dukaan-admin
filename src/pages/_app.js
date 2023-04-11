import "@/styles/globals.css";
import Footer from "./layouts/footer";
import Header from "./layouts/header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className="max-w-[1440px] mx-auto">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
