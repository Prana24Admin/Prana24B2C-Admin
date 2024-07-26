import axios from "../../../../utils/axios";
import BreadCrumb from "../../../../components/BreadCrumb";
import Table from "../../../../components/table/Index";
import { useRouter } from "next/router";
import { useState } from "react";
import SweetAlert from "../../../../components/common/SweetAlert";

const API_URL =
  process.env.NEXT_PUBLIC_PROD_API_URL || "http://localhost:4000/api";

const Index = () => {
  return (
    <div>
      <h1>Doctor Dashboard</h1>
      <div
        className="d-flex flex-wrap align-items-center gap-3"
        style={{ width: "140vh" }}
      >
        <div
          className="border rounded p-2"
          style={{ width: "15vw", backgroundColor: "#0909" }}
        >
          <h2>12</h2>
          <a>Total Doctors</a>
        </div>
        <div
          className="border rounded p-2"
          style={{ width: "15vw", backgroundColor: "#0909" }}
        >
          <h2>12</h2>
          <a>Total Pending Doctors</a>
        </div>
        <div
          className="border rounded p-2"
          style={{ width: "15vw", backgroundColor: "#0909" }}
        >
          <h2>12</h2>
          <a>Total Approved Doctors</a>
        </div>
        <div
          className="border rounded p-2"
          style={{ width: "15vw", backgroundColor: "#0909" }}
        >
          <h2>12</h2>
          <a>Total Banned Doctors</a>
        </div>
        <div
          className="border rounded p-2"
          style={{ width: "15vw", backgroundColor: "#0909" }}
        >
          <h2>12</h2>
          <a>Total Cities</a>
        </div>
        <div
          className="border rounded p-2"
          style={{ width: "15vw", backgroundColor: "#0909" }}
        >
          <h2>12</h2>
          <a>Total Departments</a>
        </div>
        <div
          className="border rounded p-2"
          style={{ width: "15vw", backgroundColor: "#0909" }}
        >
          <h2>12</h2>
          <a>Total Advertisements</a>
        </div>
        <div
          className="border rounded p-2"
          style={{ width: "15vw", backgroundColor: "#0909" }}
        >
          <h2>12</h2>
          <a>Total Subscribers</a>
        </div>
      </div>
    </div>
  );
};

Index.layout = "Admin";
export default Index;
