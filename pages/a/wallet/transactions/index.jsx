import BreadCrumb from "../../../../components/BreadCrumb";
import Table from "../../../../components/table/Index";
import Link from "next/link";

const API_URL =
  process.env.NEXT_PUBLIC_PROD_API_URL || "https://api-prana.prana24.in";

const Index = () => {
  const columns = [
    {
      dataField: "description",
      text: "Amount",
    },
    {
      dataField: "name",
      text: "Description",
    },
    {
      dataField: "name",
      text: "Action",
    },
    {
      dataField: "name",
      text: "Wallet",
    },
    {
      dataField: "name",
      text: "Transaction BY",
    },
    {
      dataField: "name",
      text: "Updated At",
    },
  ];

  const buttons = [
    {
      text: "Add Wallet Transaction",
      url: "/a/wallet/transactions/create",
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
          { text: "Wallet Transactions", url: "/a/wallet/transactions" },
        ]}
      />

      <Table
        columns={columns}
        url="/walletTransactions"
        buttons={buttons}
        title="walletTransactions"
      />
    </div>
  );
};

Index.layout = "Admin";
export default Index;
