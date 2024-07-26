import { useRouter } from "next/router";
import * as Yup from "yup";
import BreadCrumb from "../../../../components/BreadCrumb";
import Form from "../../../../components/form/update";

const LabOrder = () => {
  const router = useRouter();
  const { id } = router.query;
  //"id": 1,
  //     "uuid": "9af6cfff-e30b-4131-9b15-a2af38bd4147",
  //     "lab_order_id": "9146970803",
  //     "amount": "9.20",
  //     "shipping_charge": "1.00",
  //     "discount": 0,
  //     "tax_percentage": 10,
  //     "tax_amount": "1.00",
  //     "total_amount": "9.20",
  //     "payment_method": "COD",
  //     "transaction_id": null,
  //     "shipping_address": "{}",
  //     "billing_address": "{}",
  //     "status": "COMPLETED",
  //     "user_id": 1,

  const values = [
    {
      name: "user_id",
      label: "Client Name",
      type: "text",
      placeholder: "Enter Client Name",
      value: "",
      customClass: "col-12",
    },
    {
      name: "amount",
      label: "Phone Number",
      type: "text",
      placeholder: "Enter Phone Number",
      value: "",
      customClass: "col-12",
    },
    {
      name: "shipping_charge",
      label: "Gender",
      type: "text",
      placeholder: "Enter Gender",
      value: "",
      customClass: "col-12",
    },
    {
      name: "tax_percentage",
      label: "Address",
      type: "text",
      placeholder: "Enter Address",
      value: "",
      customClass: "col-12",
    },
    {
      name: "tax_amount",
      label: "Email",
      type: "text",
      placeholder: "Enter Email",
      value: "",
      customClass: "col-12",
    },
    {
      name: "total_amount",
      label: "Date Of Birth",
      type: "text",
      placeholder: "Enter Date Of Birth",
      value: "",
      customClass: "col-12",
    },
    {
      name: "payment_method",
      label: "Visit Date",
      type: "text",
      placeholder: "Enter Visit Date",
      value: "",
      customClass: "col-12",
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

  const schema = Yup.object().shape({
    user_id: Yup.string().required("User ID is required"),
  });

  return (
    //react hook form
    <div>
      <BreadCrumb
        items={[
          { text: "Dashboard", url: "/a/dashboard" },
          { text: "Home Lab Bookings", url: "/a/labbookings" },
        ]}
      />
      {id != undefined && (
        <Form
          values={values}
          schema={schema}
          isMultiPart={true}
          api={{
            get: { method: "get", url: `/orders/laborders/labbookings/${id}` },
            // update: { method: "patch", url: `/orders/laborders/${id}` },
          }}
        />
      )}
    </div>
  );
};
LabOrder.layout = "Admin";
export default LabOrder;
