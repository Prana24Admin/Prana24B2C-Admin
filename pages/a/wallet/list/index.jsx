import BreadCrumb from "../../../../components/BreadCrumb";
import Table from "../../../../components/table/Index";
import Link from "next/link";

const API_URL =
  process.env.NEXT_PUBLIC_PROD_API_URL || "https://api-prana.prana24.in/api";

const Index = () => {
  const columns = [
    { dataField: "amount", text: "Name" },
    {
      dataField: "description",
      text: "Balance",
    },
    {
      dataField: "name",
      text: "Currency",
    },
    {
      dataField: "name",
      text: "Customer",
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
    {
      text: "Add wallet list",
      url: "/a/wallet/list/create",
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
          { text: "Wallet List", url: "/a/wallet/list" },
        ]}
      />

      <Table
        columns={columns}
        url="/walletList"
        buttons={buttons}
        title="walletsList"
      />
    </div>
  );
};

Index.layout = "Admin";
export default Index;
