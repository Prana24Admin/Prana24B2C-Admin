import BreadCrumb from "../../../../components/BreadCrumb";
import Table from "../../../../components/table/Index";
import Link from "next/link";

const API_URL =
  process.env.NEXT_PUBLIC_PROD_API_URL || "https://api-prana.prana24.in";

const Index = () => {
  const columns = [
    { dataField: "serial_number", text: "S.N." },
    {
      dataField: "name",
      text: "Name",
    },
    {
      dataField: "name",
      text: "Description",
    },
    {
      dataField: "status",
      text: "Status",
    },
    {
      dataField: "updatedAt",
      text: "Last Update",
    },
    {
      dataField: null,
      text: "Actions",
      type: "render",
      render: (item) => (
        <div>
          <Link href={`/a/doctors/${item.uuid}`}>
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
    {
      text: "Add Doctor Department",
      url: "/a/doctors/doctorDepartment/create",
      color: "dark",
      type: "button",
      size: "sm",
    },
  ];

  return (
    <div>
      <BreadCrumb
        items={[
          { text: "Dashboard", url: "/a/dashboard" },
          { text: "Doctors Department", url: "/a/doctors" },
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
