import SideNavbar from "@/components/dashboard/SideNavbar";
import FirstDashboardPage from "@/components/dashboard/dashboardPage";
import Head from "next/head";
import Footer from "../layouts/footer";
import Header from "../layouts/header";

export default function Dashboard() {
  return (
    <div>
      <FirstDashboardPage />
    </div>
  );
}

Dashboard.getLayout = function getLayout(page) {
  return (
    <>
      <Head>
        <title>Dashboard | Deshi Dukaan</title>
        <meta name="description" content="Dashboard" />
      </Head>
      <Header />
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-1">
          <SideNavbar />
        </div>
        <div className="col-span-5">{page}</div>
      </div>
      <Footer />
    </>
  );
};
