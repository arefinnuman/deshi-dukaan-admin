import Link from "next/link";
import { useRouter } from "next/router";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RiArrowGoBackFill } from "react-icons/ri";

export default function OrderPage({ data }) {
  const router = useRouter();
  const {
    OrderAddress,
    OrderCode,
    OrderPhone,
    OrderPlacedDate,
    OrderStatus,
    OrderDeliveredDate,
  } = data[0];

  return (
    <div className="min-h-screen md:grid md:grid-cols-3 gap-5">
      <div className="hero mt-10 col-span-2">
        <div className=" hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://picsum.photos/seed/picsum/600/600"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="">
            <h1 className="text-5xl font-bold">{OrderCode}</h1>
            <p className="py-2">{} </p>
            <p className="py-2">Address: {OrderAddress}</p>
            <p className="py-2">Phone Number: {}</p>
            <p className="py-2">Gender: {}</p>
            <p className="py-2">Order Date: {}</p>

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
      </div>

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-semibold">Assigned Seller</h1>

        <div className="card w-96 bg-secondary m-5">
          <div className="card-body">
            <h2 className="card-title">{data[0].customer.C_Name}</h2>
            <p className="badge badge-ghost badge-sm">
              {data[0].customer.C_Uuid}
            </p>
            <p className="text-semibold">{data[0].customer.C_Email}</p>
            <p className="text-bold">{}</p>
            <p className="text-bold">Phone: {data[0].customer.C_Phone}</p>
            <p className="text-bold">
              Location:
              {/* Checking Location is avialable or not  */}
              {data[0].customer.C_Address
                ? data[0].customer.C_Address
                : " Not Available"}
            </p>
            <div className="card-actions justify-end">
              <Link
                href={`/dashboard/sellers/${data[0].customer.C_Uuid}`}
                className="btn"
              >
                View Seller
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
