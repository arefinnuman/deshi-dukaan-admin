import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function AddAdmin() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [success, setSuccess] = useState("");

  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("A_Name", data.A_Name);
    formData.append("A_Email", data.A_Email);
    formData.append("A_Phone", data.A_Phone);
    formData.append("A_Address", data.A_Address);
    formData.append("A_Gender", data.A_Gender);
    formData.append("A_Dob", data.A_Dob);
    formData.append("A_Password", data.A_Password);
    console.log(formData);

    try {
      const response = await axios.post(
        "http://localhost:3333/admin/sign-up/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setSuccess("Admin add successfully");
      reset();
    } catch (error) {
      console.log(error.response.data.message);

      setSuccess("Admin add unsuccessfull " + error.response.data.message);
    }
  };

  return (
    <section className="min-h-screen">
      {success}
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div className="form-control w-full max-w-xs">
          <label htmlFor="A_Name" className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input
            {...register("A_Name", { required: true })}
            id="A_Name"
            type="text"
            placeholder="Shahrukh Khan"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.A_Name && (
            <span className="text-error text-xs">Name is required</span>
          )}
        </div>

        <div className="form-control w-full max-w-xs">
          <label htmlFor="A_Email" className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            {...register("A_Email", { required: true, pattern: /^\S+@\S+$/i })}
            id="A_Email"
            type="email"
            placeholder="admin@mail.com"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.A_Email && (
            <span className="text-error text-xs">
              {errors.A_Email.type === "required"
                ? "Email is required"
                : "Email is invalid"}
            </span>
          )}
        </div>

        <div className="form-control w-full max-w-xs">
          <label htmlFor="A_Phone" className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input
            {...register("A_Phone", {
              required: true,
              minLength: 11,
              maxLength: 11,
              pattern: /^[0-9]+$/i,
            })}
            id="A_Phone"
            type="text"
            placeholder="01825333535"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.A_Phone && (
            <span className="text-error text-xs">
              {errors.A_Phone.type === "required"
                ? "Phone Number is required"
                : errors.A_Phone.type === "minLength"
                ? "Phone Number must be 11 digits"
                : errors.A_Phone.type === "maxLength"
                ? "Phone Number must be 11 digits"
                : "Phone Number must be numeric"}
            </span>
          )}
        </div>

        <div className="form-control w-full max-w-xs">
          <label htmlFor="A_Address" className="label">
            <span className="label-text">Address</span>
          </label>
          <input
            {...register("A_Address", { required: true })}
            id="A_Address"
            type="text"
            placeholder="Las Vegas, Nevada"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.A_Address && (
            <span className="text-error text-xs">Address is required</span>
          )}
        </div>

        <div className="form-control w-full max-w-xs">
          <label htmlFor="A_Gender" className="label">
            <span className="label-text">Gender</span>
          </label>
          <input
            {...register("A_Gender", { required: true })}
            id="A_Gender"
            type="text"
            placeholder="Male"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.A_Gender && (
            <span className="text-error text-xs">Gender is required</span>
          )}
        </div>

        <div className="form-control w-full max-w-xs">
          <label htmlFor="A_Dob" className="label">
            <span className="label-text">Date of Birth</span>
          </label>
          <input
            {...register("A_Dob", { required: true })}
            type="text"
            placeholder="1993-04-02"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.A_Dob && (
            <span className="text-error text-xs">
              Date of Birth is required
            </span>
          )}
        </div>

        <div className="form-control w-full max-w-xs">
          <label htmlFor="A_Password" className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            {...register("A_Password", {
              required: true,
              minLength: 8,
              maxLength: 20,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i,
            })}
            type="password"
            placeholder="Azerty@123"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.A_Password && (
            <span className="text-error text-xs">
              {errors.A_Password.type === "required"
                ? "Password is required"
                : errors.A_Password.type === "minLength"
                ? "Password must be 8 characters"
                : errors.A_Password.type === "maxLength"
                ? "Password must be 20 characters"
                : "Password must contain at least one uppercase letter, one lowercase letter and one number"}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-secondary mt-5 w-full max-w-xs"
        >
          Add Admin
        </button>
      </form>
    </section>
  );
}
