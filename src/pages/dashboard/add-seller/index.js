import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export default function AddSeller() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Clicked");
  };

  return (
    <div>
      <h1>Add a seller</h1>
      <div className="min-h-screen justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form-data"
          action="#"
        >
          <div className="form-control w-full max-w-xl">
            <label htmlFor="S_Name" className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              {...register("S_Name", { required: true })}
              id="S_Name"
              type="text"
              placeholder="Shahrukh Khan"
              className="input input-bordered w-full max-w-xl"
            />
            {errors.S_Name && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>

          <div className="form-control w-full max-w-xl">
            <label htmlFor="S_Email" className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("S_Email", { required: true })}
              id="S_Email"
              type="email"
              placeholder="sunny@gmail.com"
              className="input input-bordered w-full max-w-xl"
            />
            {errors.S_Email && (
              <span className="text-error text-xs">
                {errors.S_Email.type === "required"
                  ? "Email is required"
                  : "Email is invalid"}
              </span>
            )}
          </div>

          <div className="form-control w-full max-w-xl">
            <label htmlFor="S_Phone" className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              {...register("S_Phone", {
                required: true,
                minLength: 11,
                maxLength: 11,
                pattern: /^[0-9]+$/i,
              })}
              id="S_Phone"
              type="text"
              placeholder="01825333535"
              className="input input-bordered w-full max-w-xl"
            />
            {errors.S_Phone && (
              <span className="text-error text-xs">
                {errors.S_Phone.type === "required"
                  ? "Phone Number is required"
                  : errors.S_Phone.type === "minLength"
                  ? "Phone Number must be 11 digits"
                  : errors.S_Phone.type === "maxLength"
                  ? "Phone Number must be 11 digits"
                  : "Phone Number is invalid"}
              </span>
            )}
          </div>

          <div className="form-control w-full max-w-xl">
            <label htmlFor="S_Dob" className="label">
              <span className="label-text">Date of Birth</span>
            </label>
            <input
              {...register("S_Dob", { required: true })}
              id="S_Dob"
              type="date"
              placeholder="Date of Birth"
              className="input input-bordered w-full max-w-xl"
            />
            {errors.S_Dob && (
              <span className="text-error text-xs">
                {errors.S_Dob.type === "required"
                  ? "Date of Birth is required"
                  : "Date of Birth is invalid"}
              </span>
            )}
          </div>

          <div className="form-control w-full max-w-xl">
            <label htmlFor="S_Gender" className="label">
              <span className="label-text">Gender</span>
            </label>

            <input
              {...register("S_Gender", { required: true })}
              id="S_Gender"
              type="text"
              placeholder="Male"
              className="input input-bordered w-full max-w-xl"
            />
            {errors.S_Gender && (
              <span className="text-error text-xs">Gender Is Required</span>
            )}
          </div>

          <div className="form-control w-full max-w-xl">
            <label htmlFor="S_CompanyName" className="label">
              <span className="label-text">Company Name</span>
            </label>

            <input
              {...register("S_CompanyName", { required: true })}
              id="S_CompanyName"
              type="text"
              placeholder="Uzumaki Group Ltd."
              className="input input-bordered w-full max-w-xl"
            />
            {errors.S_CompanyName && (
              <span className="text-error text-xs">
                Company Name Is Required
              </span>
            )}
          </div>

          <div className="form-control w-full max-w-xl">
            <label htmlFor="S_Status" className="label">
              <span className="label-text">Status</span>
            </label>

            <input
              {...register("S_Status", { required: true })}
              id="S_Status"
              type="text"
              value="Pending"
              placeholder="Pending."
              disabled
              className="input input-bordered w-full max-w-xl"
            />
          </div>

          <div className="form-control w-full max-w-xl">
            <label htmlFor="S_Password" className="label">
              <span className="label-text">Password</span>
            </label>

            <input
              {...register("S_Password", {
                required: true,
                minLength: 8,
                maxLength: 20,
              })}
              id="S_Password"
              type="password"
              placeholder="********"
              className="input input-bordered w-full max-w-xl"
            />
            {errors.S_Password && (
              <span className="text-error text-xs">
                {errors.S_Password.type === "required"
                  ? "Password is required"
                  : errors.S_Password.type === "minLength"
                  ? "Password must be 8 characters"
                  : errors.S_Password.type === "maxLength"
                  ? "Password must be 20 characters"
                  : "Password is invalid"}
              </span>
            )}
          </div>

          <button className="btn w-full max-w-xl my-5" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
