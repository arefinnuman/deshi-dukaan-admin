export default function AllReviewsPage({ data }) {
  console.log(data);
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-semibold my-4 ">Our Honourable Admins</h1>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Review</th>
              <th>Customer</th>
              <th>Products</th>
            </tr>
          </thead>
          <tbody>
            {data.map((review) => {
              return (
                <tr key={review.ReviewId}>
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
                        <div className="font-bold">{review.ReviewMessage}</div>
                        <div className="text-sm">
                          {review.ReviewRating === 1
                            ? "⭐"
                            : review.ReviewRating === 2
                            ? "⭐⭐"
                            : review.ReviewRating === 3
                            ? "⭐⭐⭐"
                            : review.ReviewRating === 4
                            ? "⭐⭐⭐⭐"
                            : review.ReviewRating === 5
                            ? "⭐⭐⭐⭐⭐"
                            : "⭐"}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {review.customer.C_Name}
                    <br />
                    {review.customer.C_Email}
                    <br />
                    {review.customer.C_Address}
                    <span className="badge badge-ghost badge-sm">
                      {review.customer.C_Phone}
                    </span>
                  </td>
                  <td>
                    {review.product.P_Name}
                    <br />
                    {/* Desc in two lines */}
                    {review.product.P_Desc.length > 50
                      ? review.product.P_Desc.substring(0, 50) + "..."
                      : review.product.P_Desc}

                    <br />
                    <span className="badge badge-sm">
                      {review.product.P_Price} TK
                    </span>
                    <br />
                  </td>
                  <th></th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
