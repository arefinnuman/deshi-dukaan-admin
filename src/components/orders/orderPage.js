import { useRouter } from "next/router";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RiArrowGoBackFill } from "react-icons/ri";

export default function OrderPage({ data }) {
  const router = useRouter();
  const { O_Uuid, O_Photo, O_Name, O_Email, O_Address, O_Phone, O_Gender } =
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
            <h1 className="text-5xl font-bold">{O_Name}</h1>
            <p className="py-2">{O_Email} </p>
            <p className="py-2">Address: {O_Address}</p>
            <p className="py-2">Phone Number: {O_Phone}</p>
            <p className="py-2">Gender: {O_Gender}</p>

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
