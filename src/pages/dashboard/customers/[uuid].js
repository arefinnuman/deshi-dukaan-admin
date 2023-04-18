import CustomerProfilePage from "@/components/customer/customerProfile";
import axios from "axios";

export default function CustomerPage({ data }) {
  return (
    <div>
      <CustomerProfilePage data={data} />
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const uuid = context.params.uuid;
    const response = await axios.get(
      `http://localhost:3333/admin/customer/${uuid}`
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
