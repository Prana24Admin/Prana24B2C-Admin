import { useState, useEffect } from "react";
import axios from "axios";
import BreadCrumb from "../../../../components/BreadCrumb";
import Table from "../../../../components/table/Index";
import Link from "next/link";

const API_URL =
  process.env.NEXT_PUBLIC_PROD_API_URL || "http://localhost:4000/api";

const Index = () => {
  // State to manage order status and table URL
  const [orderStatus, setOrderStatus] = useState("all");
  const [tableUrl, setTableUrl] = useState(`${API_URL}/doctor/approval`);
  const [refreshKey, setRefreshKey] = useState(0);
  const [orderCounts, setOrderCounts] = useState({
    all: 0,
    pendingDoctors: 0,
    approvedDoctors: 0,
    bannedDoctors: 0,
  });

  // Fetch order data and count orders by status
  useEffect(() => {
    const fetchOrderCounts = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("Token not found");
        return;
      }

      try {
        const response = await axios.get(`${API_URL}/doctor/approval`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = response.data;

        console.log("data", data.data.length); // Debugging line to check the data
        if (data.success) {
          const counts = {
            all: data.data.length,
            pendingDoctors: 0,
            approvedDoctors: 0,
            bannedDoctors: 0,
          };

          data.data.forEach((order) => {
            switch (order.status.toUpperCase()) {
              case "PENDING":
                counts.pendingDoctors++;
                break;
              case "APPROVED":
                counts.approvedDoctors++;
                break;
              case "BANNED":
                counts.bannedDoctors++;
                break;
              default:
                break;
            }
          });

          setOrderCounts(counts);
        } else {
          console.error("Error: Data fetch was not successful");
        }
      } catch (error) {
        console.error("Error fetching order data:", error);
      }
    };

    fetchOrderCounts();
  }, []);

  // Effect to update the table URL based on the selected order status
  useEffect(() => {
    let url;
    switch (orderStatus) {
      case "pendingDoctors":
        url = `${API_URL}/doctor/approval?status=PENDING`;
        break;
      case "approvedDoctors":
        url = `${API_URL}/doctor/approval?status=APPROVED`;
        break;
      case "bannedDoctors":
        url = `${API_URL}/doctor/approval?status=BANNED`;
        break;
      default:
        url = `${API_URL}/doctor/approval`;
    }
    setTableUrl(url);
    // Increment refreshKey to trigger re-render of the Table component
    setRefreshKey((prevKey) => prevKey + 1);
  }, [orderStatus]);

  // Button data
  const buttons = [
    { text: `All doctors (${orderCounts.all})`, status: "all" },
    {
      text: `Pending doctors (${orderCounts.pendingDoctors})`,
      status: "pendingDoctors",
    },
    {
      text: `Approved doctors (${orderCounts.approvedDoctors})`,
      status: "approvedDoctors",
    },
    {
      text: `Banned Doctors (${orderCounts.bannedDoctors})`,
      status: "bannedDoctors",
    },
  ];

  // Handle button click to set the order status
  const handleButtonClick = (status) => {
    setOrderStatus(status);
  };

  // Table columns definition
  const columns = [
    { dataField: "serial_number", text: "S.N." },
    { dataField: "uuid", text: "Id" },
    { dataField: "first_name", text: "First Name" },
    { dataField: "title", text: "Title" },
    { dataField: "createdAt", text: "Created At", type: "datetime" },
    { dataField: "updatedAt", text: "Updated At", type: "datetime" },
    {
      dataField: null,
      text: "Actions",
      type: "render",
      render: (item) => (
        <div>
          <a
            className="btn btn-dark btn-sm"
            style={{ marginLeft: "10px" }}
            onClick={() => handleApprove(item.uuid)}
          >
            Approve
          </a>
          <a
            className="btn btn-dark btn-sm"
            style={{ marginLeft: "10px" }}
            onClick={() => handleDeny(item.uuid)}
          >
            Deny
          </a>
        </div>
      ),
    },
  ];

  // Placeholder functions for actions
  const handleApprove = (uuid) => {
    console.log("Approve clicked for:", uuid);
    // Add actual approval logic here
  };

  const handleDeny = (uuid) => {
    console.log("Deny clicked for:", uuid);
    // Add actual denial logic here
  };

  return (
    <div>
      <BreadCrumb
        items={[
          { text: "Dashboard", url: "/a/dashboard" },
          { text: "Doctors", url: "/a/doctors" },
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

      <Table
        key={refreshKey}
        columns={columns}
        url={tableUrl}
        buttons={[]}
        title="Orders"
      />
    </div>
  );
};

Index.layout = "Admin";
export default Index;
