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
    const uuid = context.params.uuid;
    const response = await axios.get(
      `http://localhost:3333/admin/order/${uuid}`
    );
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
