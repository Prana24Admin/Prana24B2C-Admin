import BreadCrumb from "../../../components/BreadCrumb";
import Table from "../../../components/table/Index";
import Link from "next/link";

const API_URL =
  process.env.NEXT_PUBLIC_PROD_API_URL || "http://localhost:4000/api/v1";

const Index = () => {
  const columns = [
    { dataField: "serial_number", text: "S.N." },
    {
      dataField: "first_name",
      text: "Name",
    },
    {
      dataField: "title",
      text: "Address",
    },
    {
      dataField: "title",
      text: "Telephone Number",
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
          <a
            className="btn btn-dark btn-sm"
            style={{ marginLeft: "10px" }}
            // onClick={() => handleApprove(item.id)}
          >
            Delete
          </a>
        </div>
      ),
    },
  ];

  const buttons = [
    {
      text: "Add Hospitals",
      url: "/a/hospitals/create",
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
          { text: "Hospitals", url: "/a/hospitals" },
        ]}
      />

      <Table
        columns={columns}
        url="/hospitals"
        buttons={buttons}
        title="Hospitals"
      />
    </div>
  );
};

Index.layout = "Admin";
export default Index;
