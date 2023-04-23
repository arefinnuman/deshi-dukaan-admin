import Link from "next/link";

export default function SideNavbar() {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex justify-center ">
          <label
            htmlFor="my-drawer-2"
            className="drawer-button btn btn-sm btn-outline lg:hidden"
          >
            View Sidebar
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link href="/dashboard/admins">View All Admins</Link>
            </li>

            <li>
              <Link href="/dashboard/customers">View All Customer</Link>
            </li>

            <li>
              <Link href="/dashboard/sellers">View All Sellers</Link>
            </li>

            <li>
              <Link href="/dashboard/products">View All Products</Link>
            </li>

            <li>
              <Link href="/dashboard/orders">View All Orders</Link>
            </li>

            <li>
              <Link href="/dashboard/reviews">View All Feedbacks</Link>
            </li>

            <li>
              <Link href="/dashboard/add-admin">Add Admin</Link>
            </li>

            <li>
              <Link href="/dashboard/add-seller">Add Seller</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
