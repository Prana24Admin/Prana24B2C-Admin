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
      name: "image",
      label: "Image",
      type: "file",
      placeholder: "Upload Category image",
      value: "",
      isSingle: true,
    },
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Enter name",
      value: "",
      customClass: "col-6",
    },
    {
      name: "name",
      label: "Description",
      type: "text",
      placeholder: "Enter Description name",
      value: "",
      customClass: "col-6",
    },
    {
      name: "name",
      label: "Route Name",
      type: "text",
      placeholder: "Enter Route name",
      value: "",
      customClass: "col-6",
    },
    {
      name: "name",
      label: "Order",
      type: "text",
      placeholder: "Enter order name",
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
          { text: "Payment Method", url: "/a/payments/method" },
        ]}
      />
      <Form
        values={values}
        schema={schema}
        isMultiPart={false}
        redirectUrl="/a/payments/method"
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
