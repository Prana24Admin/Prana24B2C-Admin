import BreadCrumb from "../../../../components/BreadCrumb";
import Table from "../../../../components/table/Index";
import Link from "next/link";

const API_URL =
  process.env.NEXT_PUBLIC_PROD_API_URL || "https://api-prana.prana24.in/api";

const Index = () => {
  const columns = [
    { dataField: "amount", text: "Logo" },
    {
      dataField: "description",
      text: "Name",
    },
    {
      dataField: "name",
      text: "Description",
    },
    {
      dataField: "name",
      text: "Route name",
    },
    {
      dataField: "name",
      text: "Order",
    },
    {
      dataField: "name",
      text: "Is Default?",
    },
    {
      dataField: "name",
      text: "Enabled",
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
          <Link href={`/a/paymentsList/${item.uuid}`}>
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
      text: "Add Payment Method",
      url: "/a/payments/method/create",
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
          { text: "Payments Method", url: "/a/payments/method" },
        ]}
      />

      <Table
        columns={columns}
        url="/paymentsMethod"
        buttons={buttons}
        title="paymentsMethod"
      />
    </div>
  );
};

Index.layout = "Admin";
export default Index;
