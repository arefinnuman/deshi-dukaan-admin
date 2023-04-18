import OrderPage from "@/components/orders/orderPage";
import axios from "axios";

export default function Order({ data }) {
  return (
    <div>
      <OrderPage data={data} />
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const id = context.params.id;
    const response = await axios.get(`http://localhost:3333/admin/order/${id}`);
    const data = await response.data;

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        data: null,
      },
    };
  }
}
