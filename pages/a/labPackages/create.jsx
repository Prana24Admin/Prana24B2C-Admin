import * as Yup from "yup";
import BreadCrumb from "../../../components/BreadCrumb";
import Form from "../../../components/form/update";
import Table from "../../../components/table/Index";
import Select from "react-select";

// Sample options for the multi-select field
const packageOptions = [
  { value: "test1", label: "Test 1" },
  { value: "test2", label: "Test 2" },
  { value: "test3", label: "Test 3" },
];

const Lab = () => {
  const schema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required"),
    phone_ext: Yup.string().required("Phone Ext is required"),
    phone_number: Yup.string().required("Phone Number is required"),
    packages: Yup.array()
      .of(Yup.string())
      .required("At least one package is required"),
  });

  const values = [
    //name
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Enter Lab Package Name",
      value: "",
      customClass: "col-3",
    },
    //website
    {
      name: "website",
      label: "Short Cut",
      type: "text",
      placeholder: "Enter Lab Package Shortcut",
      value: "",
      customClass: "col-3",
    },
    {
      name: "website",
      label: "Sample Type",
      type: "text",
      placeholder: "Enter Lab Package Type",
      value: "",
      customClass: "col-3",
    },
    //address
    {
      name: "address",
      label: "Price(INR)",
      type: "text",
      placeholder: "Enter Package Price",
      value: "",
      customClass: "col-3",
    },
    //content
    {
      name: "content",
      label: "Precautions",
      type: "textarea",
      placeholder: "Enter Precautions",
      value: "",
      customClass: "col-12",
    },
    // multi-select for packages
    {
      name: "packages",
      label: "Select Tests",
      type: "select",
      options: packageOptions,
      isMulti: true,
      placeholder: "Select Packages",
      value: [],
      customClass: "col-12",
    },
  ];

  return (
    //react hook form
    <div>
      <BreadCrumb
        items={[
          { text: "Dashboard", url: "/a/dashboard" },
          { text: "Create LabPackages", url: "/a/labPackages" },
        ]}
      />

      <Form
        values={values}
        schema={schema}
        isMultiPart={true}
        api={{
          update: { method: "post", url: `/labPackages` },
        }}
        renderField={({ field }) => {
          if (field.type === "select" && field.isMulti) {
            return (
              <div className={field.customClass} key={field.name}>
                <label>{field.label}</label>
                <Select
                  options={field.options}
                  isMulti={field.isMulti}
                  placeholder={field.placeholder}
                  name={field.name}
                  onChange={(selectedOptions) => {
                    // Update the form state with selected options
                    // Assuming you have a handleChange function to update form state
                    handleChange(
                      field.name,
                      selectedOptions
                        ? selectedOptions.map((option) => option.value)
                        : []
                    );
                  }}
                />
              </div>
            );
          }
          // Render other field types (text, textarea, etc.)
          //   return <YourCustomFieldRenderer key={field.name} field={field} />;
        }}
      />
    </div>
  );
};

Lab.layout = "Admin";
export default Lab;
