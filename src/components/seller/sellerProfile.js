import Link from "next/link";
import { useRouter } from "next/router";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RiArrowGoBackFill } from "react-icons/ri";

export default function SellerProfile({ data }) {
  console.log(data[0]);
  const router = useRouter();
  const {
    S_Uuid,
    S_Photo,
    S_Name,
    S_Email,
    S_Address,
    S_Phone,
    S_Gender,
    S_CreatedAt,
    S_Dob,
    S_ModifiedAt,
  } = data[0];

  // Translating Date to human readable format
  const date = new Date(S_CreatedAt);
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
    <div className="md:grid md:grid-cols-3 gap-5">
      <div className="col-span-2">
        <div className="mt-10 hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://picsum.photos/seed/picsum/600/600"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="">
            <h1 className="text-5xl font-bold">{S_Name}</h1>
            <p className="py-2">{S_Email} </p>
            <p className="py-2">Address: {S_Address}</p>
            <p className="py-2">Phone Number: {S_Phone}</p>
            <p className="py-2">Gender: {S_Gender}</p>
            <p className="py-2">Joining Date: {humanReadableDate}</p>

            <div className="flex items-center gap-2 my-5">
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
      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold">Assigned Seller</h1>
        {data[0].products.map((product) => {
          return (
            <div key={product.P_Id} className="card w-96 bg-secondary m-5">
              <div className="card-body">
                <h2 className="card-title">{product.P_Name}</h2>
                <p className="text-semibold">
                  {product.P_Desc.slice(0, 80)}....
                </p>
                <p className="text-bold">Price: {product.P_Price} Tk</p>
                <p className="text-bold">Waranty: {product.P_Waranty}</p>
                <p className="text-bold">Number of Quantity: {product.P_Qty}</p>
                <div className="card-actions justify-end">
                  <Link
                    href={`/dashboard/sellers/${product.P_Uuid}`}
                    className="btn btn-outline"
                  >
                    View Products
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
