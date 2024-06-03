import BreadCrumb from "../../../components/BreadCrumb";
import Table from "../../../components/table/Index";
import Link from "next/link";

const API_URL =
  process.env.NEXT_PUBLIC_PROD_API_URL || "https://api-prana.prana24.in";

const Index = () => {
  const columns = [
    { dataField: "amount", text: "Doctor" },
    {
      dataField: "description",
      text: "Clinic",
    },
    {
      dataField: "name",
      text: "Total Appointments",
    },
    {
      dataField: "name",
      text: "Total Earnings",
    },
    {
      dataField: "name",
      text: "Doctor Earnings",
    },
    {
      dataField: "name",
      text: "Admin Earnings",
    },
    {
      dataField: "name",
      text: "Clinic Earnings",
    },
    {
      dataField: "name",
      text: "Taxes",
    },
    {
      dataField: "name",
      text: "Updated At",
    },
    {
      dataField: null,
      text: "Actions",
      type: "render",
      render: (item) => (
        <div>
          <Link href={`/a/paymentsStatuses/${item.uuid}`}>
            <a className="btn btn-dark btn-sm">View Details</a>
          </Link>
          {/* <a
                className="btn btn-dark btn-sm"
                style={{ marginLeft: "10px" }}
                onClick={() => handleApprove(item.id)}
              >
                Approve
              </a> */}
        </div>
      ),
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
          { text: "Earnings", url: "/a/earnings" },
        ]}
      />

      <Table
        columns={columns}
        url="/earnings"
        buttons={buttons}
        title="earnings"
      />
    </div>
  );
};

Index.layout = "Admin";
export default Index;
