import { useRouter } from "next/router";
import * as Yup from "yup";
import BreadCrumb from "../../../components/BreadCrumb";
import Form from "../../../components/form/update";
import { getOptions } from "../../../helpers/common/dropdownHelper";

const Category = ({ filters, types }) => {
  const schema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    type: Yup.string().required("Type is required"),
    image: Yup.mixed().required("Image is required"),
  });

  const values = [
    {
      name: "user_id",
      label: "User ID",
      type: "text",
      placeholder: "Enter user id",
      value: "",
      customClass: "col-6",
    },
    {
      name: "amount",
      label: "Amount",
      type: "text",
      placeholder: "Enter amount",
      value: "",
      customClass: "col-6",
    },
    {
      name: "shipping_charge",
      label: "Shipping Charge",
      type: "text",
      placeholder: "Enter shipping charge",
      value: "",
      customClass: "col-6",
    },
    {
      name: "tax_percentage",
      label: "Tax Percentage",
      type: "text",
      placeholder: "Enter tax percentage",
      value: "",
      customClass: "col-6",
    },
    {
      name: "tax_amount",
      label: "Tax Amount",
      type: "text",
      placeholder: "Enter tax amount",
      value: "",
      customClass: "col-6",
    },
    {
      name: "total_amount",
      label: "Total Amount",
      type: "text",
      placeholder: "Enter total amount",
      value: "",
      customClass: "col-6",
    },
    {
      name: "payment_method",
      label: "Payment Method",
      type: "text",
      placeholder: "Enter payment method",
      value: "",
      customClass: "col-6",
    },
    {
      name: "transaction_id",
      label: "Transaction ID",
      type: "text",
      placeholder: "Enter transaction id",
      value: "",
      customClass: "col-6",
    },
    {
      name: "shipping_address",
      label: "Shipping Address",
      type: "text",
      placeholder: "Enter shipping address",
      value: "",
      customClass: "col-6",
    },
    {
      name: "billing_address",
      label: "Billing Address",
      type: "text",
      placeholder: "Enter billing address",
      value: "",
      customClass: "col-6",
    },
    {
      name: "status",
      label: "Status",
      type: "text",
      placeholder: "Enter status",
      value: "",
      customClass: "col-6",
    },
  ];

  return (
    //react hook form
    <div>
      <BreadCrumb
        items={[
          { text: "Dashboard", url: "/a/dashboard" },
          { text: "Home lab bookings", url: "/a/labbookings" },
        ]}
      />
      <Form
        values={values}
        schema={schema}
        isMultiPart={false}
        redirectUrl="/a/home"
        api={{
          update: { method: "post", url: `/filters` },
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
