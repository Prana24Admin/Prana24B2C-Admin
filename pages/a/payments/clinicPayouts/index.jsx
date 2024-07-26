import BreadCrumb from "../../../../components/BreadCrumb";
import Table from "../../../../components/table/Index";
import Link from "next/link";

const API_URL =
  process.env.NEXT_PUBLIC_PROD_API_URL || "https://api-prana.prana24.in/api";

const Index = () => {
  const columns = [
    {
      dataField: "description",
      text: "Clinic",
    },
    {
      dataField: "name",
      text: "Method",
    },
    {
      dataField: "name",
      text: "Amount",
    },
    {
      dataField: "name",
      text: "Paid Date",
    },
    {
      dataField: "name",
      text: "Note",
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
          { text: "Clinic Payouts", url: "/a/payments/clinicPayouts" },
        ]}
      />

      <Table
        columns={columns}
        url="/clinicPayouts"
        buttons={buttons}
        title="clinicPayouts"
      />
    </div>
  );
};

Index.layout = "Admin";
export default Index;
