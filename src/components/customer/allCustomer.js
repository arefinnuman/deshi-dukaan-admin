export default function AllCustomerPage({ data }) {
  return (
    <div>
      <div>
        <h1>Customers</h1>

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
              {data.map((customer) => {
                return (
                  <tr key={customer.C_Id}>
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
                          <div className="font-bold">{customer.C_Name}</div>
                          <div className="text-sm opacity-50">
                            {customer.C_Uuid}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {customer.C_Phone}
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        {customer.C_Gemder}
                      </span>
                    </td>
                    <td>{customer.C_Email}</td>
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
    </div>
  );
}

// {
//     "C_Id": 2,
//     "C_Uuid": "811e0d71-bc89-4d3f-9111-7cfd934ca764",
//     "C_Photo": null,
//     "C_Name": "ZBM Zubayer",
//     "C_Email": "zbm.abir148025@gmail.com",
//     "C_Phone": "0181080131",
//     "C_Address": null,
//     "C_Dob": "2000-01-27T18:00:00.000Z",
//     "C_Gender": "Male",
//     "C_Password": "$2b$10$XRC/nlkHRrPZ7aVDmEN/OO59BRXItMfYsN5fvFJG8SQHi1DjMJKAC",
//     "Role": null,
//     "C_Verified": null,
//     "C_CreatedAt": "2023-03-12T13:34:03.192Z",
//     "C_ModifiedAt": "2023-03-12T13:34:03.192Z"
// },
