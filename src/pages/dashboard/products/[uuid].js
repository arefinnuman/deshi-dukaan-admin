import ProductProfilePage from "@/components/products/productPage";
import axios from "axios";

export default function ProductPage({ data }) {
  return (
    <div>
      <ProductProfilePage data={data} />
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const uuid = context.params.uuid;
    const response = await axios.get(
      `http://localhost:3333/admin/product/${uuid}`
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
