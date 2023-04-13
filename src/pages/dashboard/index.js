import SideNavbar from "@/components/dashboard/SideNavbar";
import Footer from "../layouts/footer";
import Header from "../layouts/header";

export default function Dashboard() {
  return <div>Dashboard</div>;
}

Dashboard.getLayout = function getLayout(page) {
  return (
    <>
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
