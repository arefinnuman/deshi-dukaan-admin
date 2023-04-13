export default function AllProductsPage({ data }) {
  return (
    <div>
      <h1>Products</h1>

      {/* {
        "P_Id": 13,
        "P_Uuid": "c7d482ae-79e9-43af-bbeb-da4b1872db1a",
        "P_Name": "Note 12 Pro",
        "P_Desc": "Best gaming phone",
        "P_Qty": 5,
        "P_Waranty": "1 year",
        "P_Price": 58000,
        "P_CreatedAt": "2023-03-13T02:43:45.772Z",
        "P_ModifiedAt": "2023-03-13T02:43:45.772Z"
    }, */}

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
            {data.map((product) => {
              return (
                <tr key={product.P_Id}>
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
                        <div className="font-bold">{product.P_Name}</div>
                        <div className="text-sm opacity-50">
                          {product.P_Uuid}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {product.P_Price} TK
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {product.P_Waranty}
                    </span>
                    <span className="badge badge-ghost badge-sm">
                      {product.P_Qty} pcs
                    </span>
                  </td>
                  <td>{product.P_Desc}</td>
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
