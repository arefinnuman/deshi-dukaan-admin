import HomeChartSection from "@/components/home/HomeChartSection";
import HomeStats from "@/components/home/homeStats";
import axios from "axios";

export default function Home({
  customerData,
  sellerData,
  adminData,
  orderData,
  productData,
  paymentTypeData,
}) {
  return (
    <div>
      <HomeStats customerData={customerData} orderData={orderData} />
      <HomeChartSection
        customerData={customerData}
        sellerData={sellerData}
        adminData={adminData}
        orderData={orderData}
        productData={productData}
        paymentTypeData={paymentTypeData}
      />
    </div>
  );
}

export async function getServerSideProps() {
  const customerResponse = await axios.get(
    "http://localhost:3333/admin/customers"
  );
  const customerData = await customerResponse.data;

  const sellerResponse = await axios.get("http://localhost:3333/admin/sellers");
  const sellerData = await sellerResponse.data;

  const adminResponse = await axios.get("http://localhost:3333/admin/admins");
  const adminData = await adminResponse.data;

  const orderResponse = await axios.get("http://localhost:3333/admin/orders");
  const orderData = await orderResponse.data;

  const productResponse = await axios.get(
    "http://localhost:3333/admin/products"
  );
  const productData = await productResponse.data;

  const paymentTypeResponse = await axios.get(
    "http://localhost:3333/admin/payments-types"
  );
  const paymentTypeData = await paymentTypeResponse.data;

  return {
    props: {
      customerData,
      sellerData,
      adminData,
      orderData,
      productData,
      paymentTypeData,
    },
  };
}
