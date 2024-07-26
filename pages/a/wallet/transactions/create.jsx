import { useRouter } from "next/router";
import * as Yup from "yup";
import BreadCrumb from "../../../../components/BreadCrumb";
import Form from "../../../../components/form/update";
import { getOptions } from "../../../../helpers/common/dropdownHelper";

const Category = ({ filters, types }) => {
  const schema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    type: Yup.string().required("Type is required"),
    image: Yup.mixed().required("Image is required"),
  });

  const values = [
    {
      name: "name",
      label: "Amount",
      type: "text",
      placeholder: "Enter Amount",
      value: "",
      customClass: "col-6",
    },
    {
      name: "type",
      label: "Action",
      type: "select",
      placeholder: "Enter Currency",
      defaultValue: null,
      value: "",
      // options: types,
    },
    {
      name: "name",
      label: "Description",
      type: "text",
      placeholder: "Enter Description",
      value: "",
      customClass: "col-6",
    },
    {
      name: "type",
      label: "Wallet",
      type: "select",
      placeholder: "Enter Customer Name",
      defaultValue: null,
      value: "",
      // options: types,
    },
  ];

  return (
    //react hook form
    <div>
      <BreadCrumb
        items={[
          { text: "Dashboard", url: "/a/dashboard" },
          { text: "Wallet Transactions", url: "/a/wallet/transactions" },
        ]}
      />
      <Form
        values={values}
        schema={schema}
        isMultiPart={false}
        redirectUrl="/a/wallet"
        api={{
          update: { method: "post", url: `/` },
        }}
      />
    </div>
  );
};
export async function getServerSideProps(context) {
  const [filters, types] = await Promise.all([
    await getOptions("filters/list", "name", "uuid", false),
    await getOptions("filters/types", "name", "value", true),
  ]);

  return {
    props: {
      filters: filters,
      types: types,
    },
  };
}
Category.layout = "Admin";
export default Category;
