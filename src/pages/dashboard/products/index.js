import SideNavbar from "@/components/dashboard/SideNavbar";
import AllProductsPage from "@/components/products/allProducts";
import Footer from "@/pages/layouts/footer";
import Header from "@/pages/layouts/header";
import axios from "axios";

export default function AllProducts({ data }) {
  return (
    <div>
      <AllProductsPage data={data} />
    </div>
  );
}

export async function getStaticProps() {
  const response = await axios.get("http://localhost:3333/admin/products");
  const data = await response.data;

  return { props: { data } };
}

AllProducts.getLayout = function getLayout(page) {
  return (
    <>
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
