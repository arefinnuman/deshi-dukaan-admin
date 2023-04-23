import Link from "next/link";

export default function AllProductsPage({ data }) {
  return (
    <div>
      <h1>Products</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Details</th>
              <th>Description</th>
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
                            src="https://plus.unsplash.com/premium_photo-1675129626434-867201a9374d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80"
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
                  <td>
                    {product.P_Desc.length > 50
                      ? product.P_Desc.slice(0, 50) + "..."
                      : product.P_Desc}
                    <br />
                    <span className="badge badge-ghost mr-2 badge-sm">
                      {product.category.CategoryName}
                    </span>

                    <span className="badge mr-2 badge-sm">
                      {product.seller.S_Name}
                    </span>
                  </td>
                  <th>
                    <Link
                      className="btn btn-ghost btn-xs"
                      href={`products/${product.P_Uuid}`}
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
