import { useRouter } from "next/router";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RiArrowGoBackFill } from "react-icons/ri";

export default function ProductPage({ data }) {
  const router = useRouter();
  const { D_Uuid, D_Photo, D_Name, D_Email, D_Address, D_Phone, D_Gender } =
    data;
  return (
    <div>
      <div className="hero min-h-screen">
        <div className=" hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://picsum.photos/seed/picsum/600/600"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="">
            <h1 className="text-5xl font-bold">{D_Name}</h1>
            <p className="py-2">{D_Email} </p>
            <p className="py-2">Address: {D_Address}</p>
            <p className="py-2">Phone Number: {D_Phone}</p>
            <p className="py-2">Gender: {D_Gender}</p>

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
    </div>
  );
}
