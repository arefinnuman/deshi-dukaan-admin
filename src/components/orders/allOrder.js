import Link from "next/link";

export default function AllOrderPage({ data }) {
  console.log(data);
  return (
    <div>
      <h1>View All Orders</h1>

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
            {data.map((order) => {
              return (
                <tr key={order.OrderId}>
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
                        <div className="font-bold">{order.OrderPhone}</div>
                        <div className="text-sm opacity-50">
                          {order.OrderCode}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {order.OrderAddress}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {order.OrderStatus}
                    </span>
                  </td>
                  <td>
                    {/* Human Readable Date */}
                    {new Date(order.OrderPlacedDate).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                    , {/* Human Readable Time */}
                    {new Date(order.OrderPlacedDate).toLocaleTimeString(
                      "en-US",
                      {
                        hour: "2-digit",
                        minute: "2-digit",
                      }
                    )}
                    <br />
                    {/* Human Readable Date */}
                    {new Date(order.OrderDeliveredDate).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </td>

                  <th>
                    <Link
                      className="btn btn-ghost btn-xs"
                      href={`orders/${order.OrderId}`}
                    >
                      Details
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
