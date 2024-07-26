import { useRouter } from "next/router";
import * as Yup from "yup";

import BreadCrumb from "../../../../components/BreadCrumb";
import Form from "../../../../components/form/update";
import { getOptions } from "../../../../helpers/common/dropdownHelper";

const Doctor = ({ organizations }) => {
  const router = useRouter();
  const { id } = router.query;

  const schema = Yup.object().shape({
    first_name: Yup.string().required("First Name is required"),
    last_name: Yup.string().required("Last Name is required"),
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
    title: Yup.string().required("Title is required"),
    phone_ext: Yup.string().required("Phone Ext is required"),
    phone_number: Yup.string().required("Phone Number is required"),
  });

  const values = [
    //first_name
    {
      name: "name",
      label: "Department Name",
      type: "text",
      placeholder: "Enter Department name",
      value: "",
      customClass: "col-6",
    },
    {
      name: "image",
      label: "Image",
      type: "file",
      placeholder: "upload profile image",
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
          { text: "Create Doctors Department", url: "/a/doctors" },
        ]}
      />
      <Form
        values={values}
        schema={schema}
        isMultiPart={false}
        redirectUrl="/a/doctors"
        api={{
          update: { method: "post", url: `/doctor` },
        }}
      />
    </div>
  );
};
export async function getServerSideProps(context) {
  const [options] = await Promise.all([
    await getOptions("organization", "name", "uuid", false),
  ]);
  return {
    props: {
      organizations: options,
    },
  };
}
Doctor.layout = "Admin";
export default Doctor;
