import BreadCrumb from "../../../../components/BreadCrumb";
import Table from "../../../../components/table/Index";
import Link from "next/link";

const API_URL =
  process.env.NEXT_PUBLIC_PROD_API_URL || "https://api-prana.prana24.in/api";

const Index = () => {
  const columns = [
    { dataField: "serial_number", text: "S.N." },
    {
      dataField: "name",
      text: "Doctor Name",
    },
    {
      dataField: "name",
      text: "Clinic",
    },
    {
      dataField: "name",
      text: "Patient Name",
    },
    {
      dataField: "name",
      text: "Type",
    },
    {
      dataField: "name",
      text: "Address",
    },
    {
      dataField: "status",
      text: "Status",
    },
    {
      dataField: null,
      text: "Actions",
      type: "render",
      render: (item) => (
        <div>
          <Link href={`/a/doctors/appointments/${item.id}`}>
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
          { text: "Doctors appointment", url: "/a/doctors" },
        ]}
      />

      <Table
        columns={columns}
        url="/doctor/department"
        buttons={buttons}
        title="Doctors"
      />
    </div>
  );
};

Index.layout = "Admin";
export default Index;
