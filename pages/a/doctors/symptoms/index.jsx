import BreadCrumb from "../../../../components/BreadCrumb";
import Table from "../../../../components/table/Index";
import Link from "next/link";

const API_URL =
  process.env.NEXT_PUBLIC_PROD_API_URL || "http://localhost:4000/api/v1";

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
      text: "Add Doctor Symptoms",
      url: "/a/doctors/symptoms/create",
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
          { text: "Doctor Symptoms", url: "/a/doctors" },
        ]}
      />

      <Table
        columns={columns}
        url="/doctor/symptoms"
        buttons={buttons}
        title="Doctors"
      />
    </div>
  );
};

Index.layout = "Admin";
export default Index;
