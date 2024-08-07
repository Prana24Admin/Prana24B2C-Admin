import { useRouter } from "next/router";
import * as Yup from "yup";

import BreadCrumb from "../../../components/BreadCrumb";
import Form from "../../../components/form/update";
import { getOptions } from "../../../helpers/common/dropdownHelper";

const Assistant = ({ Doctors }) => {
  const schema = Yup.object().shape({
    first_name: Yup.string().required("First Name is required"),
    last_name: Yup.string().required("Last Name is required"),
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),

    phone_ext: Yup.string().required("Phone Ext is required"),
    phone_number: Yup.string().required("Phone Number is required"),
  });

  const values = [
    //first_name
    {
      name: "first_name",
      label: "First Name",
      type: "text",
      placeholder: "Enter First Name",
      value: "",
    },
    //last_name
    {
      name: "last_name",
      label: "Last Name",
      type: "text",
      placeholder: "Enter Last Name",
      value: "",
    },
    //email
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter Email",
      value: "",
    },
    //password
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter Password",
      value: "",
    },
    //phone_ext
    {
      name: "phone_ext",
      label: "Phone Ext",
      type: "text",
      placeholder: "Enter Phone Ext",
      value: "",
    },
    //phone_number
    {
      name: "phone_number",
      label: "Phone Number",
      type: "text",
      placeholder: "Enter Phone Number",
      value: "",
    },

    //doctor_id
    {
      name: "doctor_id",
      label: "Doctor",
      type: "select",
      placeholder: "Select Doctor",
      value: "",
      options: Doctors,
    },
  ];

  return (
    //react hook form
    <div>
      <BreadCrumb
        items={[
          { text: "Dashboard", url: "/a/dashboard" },
          { text: "Assistants", url: "/a/assistants" },
        ]}
      />
      <Form
        values={values}
        schema={schema}
        isMultiPart={false}
        redirectUrl="/a/assistants"
        api={{
          update: { method: "post", url: `/doctor/assistant` },
        }}
      />
    </div>
  );
};
export async function getServerSideProps(context) {
  const [options] = await Promise.all([
    await getOptions("doctor", "first_name", "uuid", false),
  ]);

  return {
    props: {
      Doctors: options,
    },
  };
}
Assistant.layout = "Admin";
export default Assistant;
