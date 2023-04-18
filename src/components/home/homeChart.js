import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function HomeChart({
  customerData,
  sellerData,
  adminData,
  orderData,
  productData,
  paymentTypeData,
}) {
  const numberOfCustomer = customerData.length;
  const numberOfSeller = sellerData.length;
  const numberOfAdmin = adminData.length;
  const numberOfOrder = orderData.length;
  const numberOfProduct = productData.length;
  const numberOfPaymentMethod = paymentTypeData.length;

  const data = {
    labels: [
      "Customer",
      "Seller",
      "Admin",
      "Order",
      "Product",
      "Payment Method",
    ],
    datasets: [
      {
        label: "number of items",
        data: [
          numberOfCustomer,
          numberOfSeller,
          numberOfAdmin,
          numberOfOrder,
          numberOfProduct,
          numberOfPaymentMethod,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1.5,
      },
    ],
  };

  return (
    <div className="w-2/6">
      <Pie data={data} />
    </div>
  );
}
