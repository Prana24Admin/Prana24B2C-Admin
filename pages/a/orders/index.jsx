import { useState, useEffect } from "react";
import BreadCrumb from "../../../components/BreadCrumb";
import Table from "../../../components/table/Index";
import Link from "next/link";
import Form from "../../../components/form/update";
import * as Yup from "yup";

const API_URL =
  process.env.NEXT_PUBLIC_PROD_API_URL || "https://api-prana.prana24.in";

const Index = () => {
  const [orderStatus, setOrderStatus] = useState("asll"); // State to manage order status
  const [tableUrl, setTableUrl] = useState(`${API_URL}/order/all`); // Default API endpoint

  useEffect(() => {
    // Update the table URL based on the selected order status
    switch (orderStatus) {
      case "placed":
        setTableUrl(`${API_URL}/order/all?status=PLACED`);
        break;
      case "confirmed":
        setTableUrl(`${API_URL}/order/all?status=CONFIRMED`);
        break;
      case "processing":
        setTableUrl(`${API_URL}/order/all?status=PROCESSING`);
        break;
      case "shipped":
        setTableUrl(`${API_URL}/order/all?status=COMPLETED`);
        break;
      case "cancel":
        setTableUrl(`${API_URL}/order/all?status=CANCELLED`);
        break;
      case "shipped":
        setTableUrl(`${API_URL}/order/all?status=SHIPPED`);
        break;
      case "delivered":
        setTableUrl(`${API_URL}/order/all?status=DELIVERED`);
        break;
      case "cancel":
        setTableUrl(`${API_URL}/order/all?status=CANCEL`);
        break;
      case "return":
        setTableUrl(`${API_URL}/order/all?status=RETURN`);
        break;
      case "refund":
        setTableUrl(`${API_URL}/order/all?status=REFUND`);
        break;
      default:
        setTableUrl(`${API_URL}/order/all`);
    }
  }, [orderStatus]);

  const buttons = [
    { text: "All Orders(10)", status: "all" },
    { text: "Placed Orders(5)", status: "placed" },
    { text: "Confirmed Orders(13)", status: "confirmed" },
    { text: "Processing Orders(19)", status: "processing" },
    { text: "Shipped Orders(11)", status: "shipped" },
    { text: "Delivered Orders(12)", status: "delivered" },
    { text: "Cancelled Orders(11)", status: "cancel" },
    { text: "Returned Orders(19)", status: "return" },
    { text: "Refunded Orders(13)", status: "refund" },
  ];

  const handleButtonClick = (status) => {
    setOrderStatus(status);
  };

  const columns = [
    { dataField: "serial_number", text: "S.N." },
    { dataField: "order_id", text: "Order ID" },
    { dataField: "total_amount", text: "Total Amount" },
    { dataField: "createdAt", text: "Created At", type: "datetime" },
    { dataField: "updatedAt", text: "Updated At", type: "datetime" },
    {
      dataField: null,
      text: "Actions",
      type: "render",
      render: (item) => (
        <div>
          <Link href={`/a/orders/${item.uuid}`}>
            <a className="btn btn-dark btn-sm">View Details</a>
          </Link>
        </div>
      ),
    },
  ];

  const schema = Yup.object().shape({
    from_date: Yup.date().required("From Date is required"),
    to_date: Yup.date().required("To Date is required"),
  });

  const values = [
    {
      name: "from",
      label: "From Date",
      type: "date",
      placeholder: "Enter from date",
      value: "",
      customClass: "col-6",
    },
    {
      name: "to",
      label: "To Date",
      type: "date",
      placeholder: "Enter to date",
      value: "",
      customClass: "col-6",
    },
  ];

  return (
    <div>
      <BreadCrumb
        items={[
          { text: "Dashboard", url: "/a/dashboard" },
          { text: "Orders", url: "/a/orders" },
        ]}
      />
      <div className="button-group">
        {buttons.map((button) => (
          <button
            key={button.status}
            className={`btn mx-3 mt-3 ${
              orderStatus === button.status ? "btn-primary" : "btn-secondary"
            }`}
            onClick={() => handleButtonClick(button.status)}
          >
            {button.text}
          </button>
        ))}
      </div>
      <div className="d-flex gap-2 align-items-center mx-3 mt-3">
        <div>
          <Form
            values={values}
            schema={schema}
            isMultiPart={true}
            redirectUrl="/a/dashboard"
            formType="dashboard"
          />
        </div>
      </div>
      <Table columns={columns} url={tableUrl} buttons={[]} title="Orders" />
    </div>
  );
};

Index.layout = "Admin";
export default Index;
