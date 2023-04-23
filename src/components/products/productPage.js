import Link from "next/link";
import { useRouter } from "next/router";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RiArrowGoBackFill } from "react-icons/ri";

export default function ProductPage({ data }) {
  const router = useRouter();
  const { P_Uuid, P_Desc, P_Name, P_Price, P_Waranty, P_CreatedAt } = data[0];
  return (
    <div className="min-h-screen md:grid md:grid-cols-3 gap-5">
      <div className="hero col-span-2">
        <div className=" hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://picsum.photos/seed/picsum/600/600"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="">
            <h1 className="text-5xl font-bold">{P_Name}</h1>
            <p className="py-2">{P_Desc} </p>
            <p className="py-2">Price: {P_Price}</p>
            <p className="py-2">Waranty: {P_Waranty}</p>
            <p className="py-2">
              CreatedAt:
              {/* Human readable Time */}
              <span> </span>
              {new Date(P_CreatedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="py-2">Category: {data[0].category.CategoryName}</p>
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
        <h1 className="text-2xl font-semibold">Seller Information</h1>
        <div className="card w-96 bg-secondary m-5">
          <div className="card-body">
            <h2 className="card-title">{data[0].seller.S_Name}</h2>
            <p className="text-semibold">{data[0].seller.S_Email}</p>
            <p className="text-bold">Company: {data[0].seller.S_CompanyName}</p>
            <p className="text-bold">Phone: {data[0].seller.S_Phone}</p>
            <p className="text-bold">
              Location:
              {/* Checking Location is avialable or not  */}
              {data[0].seller.S_Address
                ? data[0].seller.S_Address
                : " Not Available"}
            </p>
            <div className="card-actions justify-end">
              <Link href={`/dashboard/sellers/`} className="btn">
                View Seller
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
