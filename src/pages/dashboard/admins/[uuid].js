import AdminProfilePage from "@/components/admin/adminProfile";
import axios from "axios";

export default function AdminPage({ data }) {
  return (
    <div>
      <AdminProfilePage data={data} />
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const uuid = context.params.uuid;
    const response = await axios.get(
      `http://localhost:3333/admin/admin/${uuid}`
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
