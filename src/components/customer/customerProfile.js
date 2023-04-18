import Link from "next/link";
import { useRouter } from "next/router";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RiArrowGoBackFill } from "react-icons/ri";

export default function CustomerProfilePage({ data }) {
  const {
    C_Uuid,
    C_Photo,
    C_Name,
    C_Email,
    C_Address,
    C_Phone,
    C_Gender,
    C_CreatedAt,
  } = data[0];

  const router = useRouter();

  // human readable date
  const date = new Date(C_CreatedAt);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const dt = date.getDate();
  const realDate = year + "-" + month + "-" + dt;

  const humanReadableDate = new Date(realDate).toDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen md:grid md:grid-cols-3 gap-5">
      <div className="hero col-span-2">
        <div className=" hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://picsum.photos/seed/picsum/600/600"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="">
            <h1 className="text-5xl font-bold">{C_Name}</h1>
            <p className="py-2">{C_Email} </p>
            <p className="py-2">
              Address:
              {C_Address ? C_Address : " Not Provided"}
            </p>
            <p className="py-2">Phone Number: {C_Phone}</p>
            <p className="py-2">Gender: {C_Gender}</p>
            <p className="py-2">Joining Date: {humanReadableDate}</p>

            <div className="flex  items-center gap-2 my-5">
              <button className="btn btn-info">
                <FaUserEdit className="text-xl mx-2" /> Edit
              </button>
              <button className="btn btn-error">
                <MdDelete className="text-xl mx-1 " /> Delete
              </button>
            </div>
            <button
              onClick={() => router.back()}
              className="btn btn-secondary btn-outline px-16"
            >
              <RiArrowGoBackFill className="text-xl mx-2" /> Go Back
            </button>
          </div>
        </div>

        <div></div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-semibold">Assigned Seller</h1>
        {data[0].orders.map((order) => {
          return (
            <div key={order.O_Id} className="card w-96 bg-secondary m-5">
              <div className="card-body">
                <h2 className="card-title">Order Id: {order.OrderCode}</h2>
                <p className="text-semibold badge">{order.OrderStatus}</p>
                <p className="text-bold"></p>
                <p className="text-bold">Phone: {order.OrderPhone}</p>
                <p className="text-bold">
                  Location:
                  {/* Checking Location is avialable or not  */}
                  {order.OrderAddress ? order.OrderAddress : " Not Available"}
                </p>
                <div className="card-actions justify-end">
                  <Link
                    href={`/dashboard/sellers/${order.O_Uuid}`}
                    className="btn"
                  >
                    View Order
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
