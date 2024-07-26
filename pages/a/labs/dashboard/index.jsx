import React from "react";
import Link from "next/link";

const Index = () => {
  return (
    <div>
      <h1>Lab Dashboard</h1>

      <div className="d-flex align-items-center gap-3">
        <div className="bg-light rounded justify-content-center">
          <Link href={`/a/tests`}>
            <h1
              className="btn p-3 "
              style={{ backgroundColor: "#007bff", color: "#ffffff" }}
            >
              Tests
            </h1>
          </Link>
        </div>
        <div className=" rounded justify-content-center">
          <Link href={`/a/tests`}>
            <h1
              className="btn p-3"
              style={{ backgroundColor: "#007bff", color: "#ffffff" }}
            >
              Home visits
            </h1>
          </Link>
        </div>
        <div className=" rounded justify-content-center">
          <Link href={`/a/tests`}>
            <h1
              className="btn p-3"
              style={{ backgroundColor: "#007bff", color: "#ffffff" }}
            >
              Pending Tests
            </h1>
          </Link>
        </div>
        <div className=" rounded justify-content-center">
          <Link href={`/a/tests`}>
            <h1
              className="btn p-3"
              style={{ backgroundColor: "#007bff", color: "#ffffff" }}
            >
              Completed Tests
            </h1>
          </Link>
        </div>
        <div className=" rounded justify-content-center">
          <Link href={`/a/tests`}>
            <h1
              className="btn p-3"
              style={{ backgroundColor: "#007bff", color: "#ffffff" }}
            >
              Completed Reports
            </h1>
          </Link>
        </div>
        <div className=" rounded justify-content-center">
          <Link href={`/a/tests`}>
            <h1
              className="btn p-3"
              style={{ backgroundColor: "#007bff", color: "#ffffff" }}
            >
              Pending Reports
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

Index.layout = "Admin";
export default Index;
