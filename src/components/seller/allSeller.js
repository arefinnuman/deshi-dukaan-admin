import Link from "next/link";

export default function AllSellerPage({ data }) {
  console.log(data);
  return (
    <div>
      <h1>All the Sellers are Here</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Details</th>
              <th>Mail</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((seller) => {
              return (
                <tr key={seller.S_Id}>
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
                        <div className="font-bold">{seller.S_Name}</div>
                        <div className="text-sm opacity-50">
                          {seller.S_Uuid}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {seller.S_Phone}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {seller.S_Address ? seller.S_Address : " Not Available"}
                    </span>
                  </td>
                  <td>{seller.S_Email}</td>
                  <th>
                    <Link
                      className="btn btn-ghost btn-xs"
                      href={`sellers/${seller.S_Uuid}`}
                    >
                      details
                    </Link>
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
