import BreadCrumb from "../../../../components/BreadCrumb";
import Table from "../../../../components/table/Index";
import Link from "next/link";

const API_URL =
  process.env.NEXT_PUBLIC_PROD_API_URL || "https://api-prana.prana24.in/api";

const Index = () => {
  const columns = [
    { dataField: "serial_number", text: "Question" },
    {
      dataField: "name",
      text: "Answer",
    },
    {
      dataField: "updatedAt",
      text: "Faq Category",
    },
    {
      dataField: "updatedAt",
      text: "Updated At",
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
      text: "Add FAQS",
      url: "/a/faqs/faqs/create",
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
          { text: "Faqs", url: "/a/faqs" },
        ]}
      />

      <Table columns={columns} url="/faqs" buttons={buttons} title="Doctors" />
    </div>
  );
};

Index.layout = "Admin";
export default Index;
