import BreadCrumb from "../../../../components/BreadCrumb";
import Table from "../../../../components/table/Index";
import Link from "next/link";

const API_URL =
  process.env.NEXT_PUBLIC_PROD_API_URL || "https://api-prana.prana24.in/api";

const Index = () => {
  const columns = [
    { dataField: "amount", text: "Amount" },
    {
      dataField: "description",
      text: "Description",
    },
    {
      dataField: "name",
      text: "User",
    },
    {
      dataField: "name",
      text: "Payment Method",
    },
    {
      dataField: "name",
      text: "Payment Status",
    },
    {
      dataField: "name",
      text: "Updated At",
    },
  ];

  const buttons = [
    // {
    //   text: "Add Doctor Appointment",
    //   url: "/a/doctors/doctorAppointment/create",
    //   color: "dark",
    //   type: "button",
    //   size: "sm",
    // },
  ];

  return (
    <div>
      <BreadCrumb
        items={[
          { text: "Dashboard", url: "/a/dashboard" },
          { text: "Payments List", url: "/a/payments/list" },
        ]}
      />

      <Table
        columns={columns}
        url="/paymentsList"
        buttons={buttons}
        title="Doctors"
      />
    </div>
  );
};

Index.layout = "Admin";
export default Index;
