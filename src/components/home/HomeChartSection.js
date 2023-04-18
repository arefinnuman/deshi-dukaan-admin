import Link from "next/link";
import { CgShoppingCart } from "react-icons/cg";
import { SiFonoma, SiPhpmyadmin } from "react-icons/si";
import HomeChart from "./homeChart";

export default function HomeChartSection({
  customerData,
  sellerData,
  adminData,
  orderData,
  productData,
  paymentTypeData,
}) {
  return (
    <div className="my-10">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <HomeChart
            customerData={customerData}
            sellerData={sellerData}
            adminData={adminData}
            orderData={orderData}
            productData={productData}
            paymentTypeData={paymentTypeData}
          />
          <div className="w-1/3">
            <p className="py-6">
              This dashboard provides you with access to a range of tools and
              features that will help you manage your web application more
              effectively. From here, you can monitor your system's performance,
              manage user accounts, and view important analytics data.
            </p>
            <h1 className="text-5xl font-bold">Three Types of User</h1>

            <div
              className="flex justify-between mt-6 items-center
            "
            >
              <Link href="/" className="btn btn-primary btn-outline">
                <SiPhpmyadmin className="text-lg mr-2 text-primary" />
                Admin
              </Link>
              <Link href="/" className="btn btn-primary btn-outline">
                <CgShoppingCart className="text-lg mr-2 text-primary" />
                Seller
              </Link>
              <Link href="/" className="btn btn-primary btn-outline">
                <SiFonoma className="text-lg mr-2 text-primary" />
                Customer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
