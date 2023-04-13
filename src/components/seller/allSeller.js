export default function AllSellerPage({ data }) {
  return (
    <div>
      <h1>All the Sellers are Here</h1>

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
            {data.map((seller) => {
              return (
                <tr key={seller.S_Id}>
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
                      {seller.S_Gemder}
                    </span>
                  </td>
                  <td>{seller.S_Email}</td>
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
