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
      name: "user_id",
      label: "Client Name",
      type: "text",
      placeholder: "Enter Client Name",
      value: "",
      customClass: "col-6",
    },
    {
      name: "amount",
      label: "Phone Number",
      type: "text",
      placeholder: "Enter Phone Number",
      value: "",
      customClass: "col-6",
    },
    {
      name: "shipping_charge",
      label: "Gender",
      type: "text",
      placeholder: "Enter Gender",
      value: "",
      customClass: "col-6",
    },
    {
      name: "tax_percentage",
      label: "Address",
      type: "text",
      placeholder: "Enter Address",
      value: "",
      customClass: "col-6",
    },
    {
      name: "tax_amount",
      label: "Email",
      type: "text",
      placeholder: "Enter Email",
      value: "",
      customClass: "col-6",
    },
    {
      name: "expiry_date",
      label: "Date Of Birth",
      type: "date",
      placeholder: "Enter expiry date",
      value: "",
      customClass: "col-6",
    },
    {
      name: "expiry_date",
      label: "Visit Date",
      type: "date",
      placeholder: "Enter expiry date",
      value: "",
      customClass: "col-6",
    },
    {
      name: "image",
      label: "Image",
      type: "file",
      placeholder: "Upload Category image",
      value: "",
      isSingle: true,
    },
  ];

  return (
    //react hook form
    <div>
      <BreadCrumb
        items={[
          { text: "Dashboard", url: "/a/dashboard" },
          { text: "Home lab bookings", url: "/a/labbookings/homeLabBookings" },
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
