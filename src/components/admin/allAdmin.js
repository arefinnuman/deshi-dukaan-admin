export default function AllAdminPage({ data }) {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-semibold my-4 ">Our Honourable Admins</h1>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Details</th>
              <th>Mail</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((admin) => {
              return (
                <tr key={admin.A_Id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src="/tailwind-css-component-profile-2@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{admin.A_Name}</div>
                        <div className="text-sm opacity-50">{admin.A_Uuid}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {admin.A_Phone}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {admin.A_Gemder}
                    </span>
                  </td>
                  <td>{admin.A_Email}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

{
  /* <h1>{admin.A_Role}</h1>

            <h1>{admin.A_CreatedAt}</h1> */
}
