import Link from "next/link";
import { useRouter } from "next/router";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RiArrowGoBackFill } from "react-icons/ri";

export default function AdminProfilePage({ data }) {
  const router = useRouter();
  const {
    A_Uuid,
    A_Photo,
    A_Name,
    A_Email,
    A_Address,
    A_Phone,
    A_Gender,
    A_CreatedAt,
    A_Dob,
    A_ModifiedAt,
  } = data[0];

  // Translating Date to human readable format
  const date = new Date(A_CreatedAt);
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
      <div className="mt-10 col-span-2">
        <div className=" hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://picsum.photos/seed/picsum/600/600"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="">
            <h1 className="text-5xl font-bold">{A_Name}</h1>
            <p className="py-2">{A_Email} </p>
            <p className="py-2">Address: {A_Address}</p>
            <p className="py-2">Phone Number: {A_Phone}</p>
            <p className="py-2">Gender: {A_Gender}</p>
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
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-semibold">Assigned Seller</h1>
        {data[0].sellers.map((seller) => {
          return (
            <div key={seller.S_Id} className="card w-96 bg-secondary m-5">
              <div className="card-body">
                <h2 className="card-title">{seller.S_Name}</h2>
                <p className="text-semibold">{seller.S_Email}</p>
                <p className="text-bold">Company: {seller.S_CompanyName}</p>
                <p className="text-bold">Phone: {seller.S_Phone}</p>
                <p className="text-bold">
                  Location:
                  {/* Checking Location is avialable or not  */}
                  {seller.S_Location ? seller.S_Location : " Not Available"}
                </p>
                <div className="card-actions justify-end">
                  <Link
                    href={`/dashboard/sellers/${seller.S_Uuid}`}
                    className="btn"
                  >
                    View Seller
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
