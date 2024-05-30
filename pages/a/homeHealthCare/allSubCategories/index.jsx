import BreadCrumb from "../../../../components/BreadCrumb";
import Table from "../../../../components/table/Index";
import Link from "next/link";

const Index = () => {
  const columns = [
    { dataField: "serial_number", text: "S.N." },
    {
      dataField: "uuid",
      text: "Id",
    },
    {
      dataField: "name",
      text: "Category Name",
    },
    {
      dataField: "null",
      text: "Sub-Category Name",
      type: "render",
      render: (item) => {
        if (item?.parent) {
          return (
            <Link href={`/a/homeHealthCare/${item?.parent?.uuid}`}>
              <a className="text-dark">{item?.parent?.name}</a>
            </Link>
          );
        }
        return "";
      },
    },
    {
      dataField: "createdAt",
      text: "Created At",
      type: "datetime",
    },
    {
      dataField: "updatedAt",
      text: "Updated At",
      type: "datetime",
    },
    {
      dataField: null,
      text: "Actions",
      type: "render",
      render: (item) => (
        <div>
          <Link href={`/a/homeHealthCare/${item.uuid}`}>
            <a className="btn btn-dark btn-sm">View Details</a>
          </Link>
        </div>
      ),
    },
  ];

  const buttons = [
    {
      text: "Add HomeHealth-Care Category",
      url: "/a/homeHealthCare/addCategories",
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
          {
            text: "HealthCare Categories",
            url: "/a/homeHealthCare/addCategories",
          },
        ]}
      />

      <Table
        columns={columns}
        url="/filterds/table"
        buttons={buttons}
        title="Categories"
      />
    </div>
  );
};

Index.layout = "Admin";
export default Index;
