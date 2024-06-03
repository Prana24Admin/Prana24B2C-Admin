import BreadCrumb from "../../../../components/BreadCrumb";
import Table from "../../../../components/table/Index";
import Link from "next/link";

const API_URL =
  process.env.NEXT_PUBLIC_PROD_API_URL || "https://api-prana.prana24.in";

const Index = () => {
  const columns = [
    {
      dataField: "description",
      text: "Status",
    },
    {
      dataField: "name",
      text: "Order",
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
          { text: "Payments Statuses", url: "/a/payments/statuses" },
        ]}
      />

      <Table
        columns={columns}
        url="/paymentsStatuses"
        buttons={buttons}
        title="paymentsStatuses"
      />
    </div>
  );
};

Index.layout = "Admin";
export default Index;
