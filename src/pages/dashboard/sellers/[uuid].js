import SellerProfile from "@/components/seller/sellerProfile";
import axios from "axios";

export default function SellerPage({ data }) {
  return (
    <div>
      <SellerProfile data={data} />
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const uuid = context.params.uuid;
    const response = await axios.get(
      `http://localhost:3333/admin/seller/${uuid}`
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
