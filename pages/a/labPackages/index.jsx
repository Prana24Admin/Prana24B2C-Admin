import BreadCrumb from "../../../components/BreadCrumb";
import Table from "../../../components/table/Index";
import Link from "next/link";

const Index = () => {
  const columns = [
    { dataField: "serial_number", text: "ID" },
    {
      dataField: "name",
      text: "Name",
    },
    {
      dataField: "package",
      text: "Lab Code",
    },
    {
      dataField: "phone_number",
      text: "Phone Number",
    },
    {
      dataField: "website",
      text: "Site",
    },
    {
      dataField: "updatedAt",
      text: "Sample Type",
      type: "datetime",
    },
    {
      dataField: "updatedAt",
      text: "Price",
      type: "datetime",
    },
    {
      dataField: null,
      text: "Actions",
      type: "render",
      render: (item) => (
        <div>
          <Link href={`/a/labs/${item.uuid}`}>
            <a className="btn btn-dark btn-sm">View Details</a>
          </Link>
        </div>
      ),
    },
  ];

  const buttons = [
    {
      text: "Add Lab Package",
      url: "/a/labPackages/create",
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
          { text: "Labs", url: "/a/labs" },
        ]}
      />

      <Table columns={columns} url="/lab" buttons={buttons} title="Labs" />
    </div>
  );
};

Index.layout = "Admin";
export default Index;
