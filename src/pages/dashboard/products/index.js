import SideNavbar from "@/components/dashboard/SideNavbar";
import AllProductsPage from "@/components/products/allProducts";
import Footer from "@/pages/layouts/footer";
import Header from "@/pages/layouts/header";
import axios from "axios";
import Head from "next/head";

export default function AllProducts({ data }) {
  return (
    <div>
      <AllProductsPage data={data} />
    </div>
  );
}

export async function getServerSideProps() {
  const response = await axios.get("http://localhost:3333/admin/products");
  const data = await response.data;

  return { props: { data } };
}

AllProducts.getLayout = function getLayout(page) {
  return (
    <>
      <Head>
        <title>Dashboard | Deshi Dukaan</title>
        <meta name="description" content="Dashboard" />
      </Head>

      <Header />
      <div className="grid grid-cols-6 gap-5">
        <div className="col-span-1">
          <SideNavbar />
        </div>
        <div className="col-span-5">{page}</div>
      </div>
      <Footer />
    </>
  );
};
