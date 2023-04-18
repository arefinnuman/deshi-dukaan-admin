import Link from "next/link";

export default function AllCustomerPage({ data }) {
  console.log(data);
  return (
    <div>
      <div>
        <h1>Customers {data.length} </h1>

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
                              src="https://plus.unsplash.com/premium_photo-1675129626434-867201a9374d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80"
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
                      <>
                        <Link
                          className="btn btn-ghost btn-xs"
                          href={`customers/${customer.C_Uuid}`}
                        >
                          details
                        </Link>
                      </>
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
