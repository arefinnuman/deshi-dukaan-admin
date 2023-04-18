import Lottie from "lottie-react";
import Link from "next/link";
import homeAdmin from "../../../public/homeAdminLottie.json";

export default function FirstDashboardPage() {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row ">
        <Lottie animationData={homeAdmin} />
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">
            Welcome to the Admin Dashboard!
          </h1>
          <p className="py-6">
            This dashboard provides you with access to a range of tools and
            features that will help you manage your web application more
            effectively. From here, you can monitor your system's performance,
            manage user accounts, and view important analytics data.
          </p>
          <>
            <Link className="btn btn-primary" href="/dashboard/admins">
              Get Started{" "}
            </Link>
          </>
        </div>
      </div>
    </div>
  );
}
