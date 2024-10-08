import React, { useState } from "react";
import Link from "next/link";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

const Sidebar = (props) => {
  const [items, setItems] = useState([
    {
      name: "Dashboard",
      icon: "bx bx-home",
      url: "/a/dashboard",
    },
    {
      name: "Brands",
      icon: "bx bx-purchase-tag-alt",
      url: "",
      show: false,
      items: [
        {
          name: "Add Brand",
          url: "/a/brands/create",
        },
        {
          name: "Brands",
          url: "/a/brands",
        },
      ],
    },
    {
      name: "Categories",
      icon: "bx bx-category",
      url: "",
      show: false,
      items: [
        {
          name: "Add Category",
          url: "/a/categories/create",
        },
        {
          name: "Categories",
          url: "/a/categories",
        },
      ],
    },
    {
      name: "Banners",
      icon: "bx bx-photo-album",
      url: "",
      show: false,
      items: [
        {
          name: "Add Banners",
          url: "/a/banners/create",
        },
        {
          name: "Banners",
          url: "/a/banners",
        },
      ],
    },
    {
      name: "Coupons",
      icon: "bx bxs-coupon",
      url: "",
      show: false,
      items: [
        {
          name: "Add Coupon",
          url: "/a/coupons/create",
        },
        {
          name: "Coupons",
          url: "/a/coupons",
        },
      ],
    },
    {
      name: "Products",
      icon: "bx bx-capsule",
      url: "",
      show: false,
      items: [
        {
          name: "Add Product",
          url: "/a/products/create",
        },
        {
          name: "Products",
          url: "/a/products",
        },
      ],
    },
    {
      name: "Orders",
      icon: "bx bx-plus-medical",
      url: "/a/orders",
      show: false,
    },
    {
      name: "Doctors",
      icon: "bx bx-user-circle",
      url: "",
      show: false,
      items: [
        {
          name: "Add Doctor",
          url: "/a/doctors/create",
        },
        {
          name: "Symptoms",
          url: "/a/doctors/symptoms",
        },
        {
          name: "Doctors",
          url: "/a/doctors",
        },
        {
          name: "Doctors Reviews",
          url: "/a/doctors/reviews",
        },
        {
          name: "Doctor Approvals",
          url: "/a/doctors/doctorApprovals",
        },
        {
          name: "Doctor Dashboard",
          url: "/a/doctors/doctorDashboard",
        },
        {
          name: "Doctors Departments",
          url: "/a/doctors/doctorDepartment",
        },
        {
          name: "Doctors Appointments",
          url: "/a/doctors/appointments",
        },
      ],
    },
    {
      name: "Hospitals",
      icon: "bx bx-plus-medical",
      url: "",
      show: false,
      items: [
        {
          name: "Add Hospitals",
          url: "/a/hospitals/create",
        },
        {
          name: "All Hospitals",
          url: "/a/hospitals",
        },
      ],
    },
    {
      name: "Assistants",
      icon: "bx bx-group",
      url: "",
      show: false,
      items: [
        {
          name: "Add Assistants",
          url: "/a/assistants/create",
        },
        {
          name: "All Assistants",
          url: "/a/assistants",
        },
      ],
    },
    {
      name: "Organizations",
      icon: "bx bx-buildings",
      url: "",
      show: false,
      items: [
        {
          name: "Add Organization",
          url: "/a/organizations/create",
        },
        {
          name: "Organizations",
          url: "/a/organizations",
        },
      ],
    },
    {
      name: "Lab",
      icon: "bx bx-test-tube",
      url: "",
      show: false,
      items: [
        {
          name: "Lab Dashboard",
          url: "/a/labs/dashboard",
        },
        {
          name: "Lab",
          url: "/a/labs",
        },
        {
          name: "Lab Packages",
          url: "/a/labPackages",
        },
        {
          name: "Tests",
          url: "/a/tests",
        },
        {
          name: "Bookings",
          url: "/a/labbookings",
        },
        {
          name: "Home Lab Bookings",
          url: "/a/labbookings/homeLabBookings",
        },
      ],
    },
    // {
    //   name: "Lab Packages",
    //   icon: "bx bx-package",
    //   url: "",
    //   show: false,
    //   items: [
    //     {
    //       name: "Add Lab Packages",
    //       url: "/a/labPackages/create",
    //     },
    //     {
    //       name: "Lab Packages",
    //       url: "/a/labPackages",
    //     },
    //   ],
    // },
    // {
    //   name: "Tests",
    //   icon: "bx bx-test-tube",
    //   url: "",
    //   show: false,
    //   items: [
    //     {
    //       name: "Add Test",
    //       url: "/a/tests/create",
    //     },
    //     {
    //       name: "Tests",
    //       url: "/a/tests",
    //     },
    //   ],
    // },
    // {
    //   name: "Lab Bookings",
    //   icon: "bx bx-test-tube",
    //   url: "",
    //   show: false,
    //   items: [
    //     {
    //       name: "Bookings",
    //       url: "/a/labbookings",
    //     },
    //     {
    //       name: "Home Lab Bookings",
    //       url: "/a/labbookings/homeLabBookings",
    //     },
    //   ],
    // },
    // {
    //   name: "Lab Bookings",
    //   icon: "bx bx-calendar-check",
    //   url: "/a/labbookings",
    //   show: false,
    // },
    {
      name: "Users",
      icon: "bx bx-user",
      url: "/a/users",
      show: false,
    },
    {
      name: "Order Reports",
      icon: "bx bx-file-blank",
      url: "/a/orderReports",
      show: false,
    },
    {
      name: "Sales Reports",
      icon: "bx bx-file-blank",
      url: "/a/salesReports",
      show: false,
    },
    {
      name: "Rental Info",
      icon: "bx bx-info-circle",
      url: "/a/rentalInfo",
      show: false,
    },
    // {
    //   name: "Home Health Care",
    //   icon: "bx bx-user",
    //   url: "/a/homeHealthCare",
    //   show: false,
    // },
    {
      name: "Home Health Care",
      icon: "bx bx-home",
      url: "",
      show: false,
      items: [
        {
          name: "Add HealthCare Categories",
          url: "/a/homeHealthCare/addCategories",
        },
        {
          name: "Add HealthCare subCategories",
          url: "/a/homeHealthCare/addSubCategories",
        },
        {
          name: "All Sub-Categories",
          url: "/a/homeHealthCare/allSubCategories",
        },
        {
          name: "Healthcare Reports",
          url: "/a/homeHealthCare",
        },
      ],
    },
    {
      name: "Payments",
      icon: "bx bx-money-withdraw",
      url: "",
      show: false,
      items: [
        {
          name: "Payments List",
          url: "/a/payments/list",
        },
        {
          name: "Payments Method",
          url: "/a/payments/method",
        },
        {
          name: "Payments Statuses",
          url: "/a/payments/statuses",
        },
        {
          name: "Clinic Payouts",
          url: "/a/payments/clinicPayouts",
        },
      ],
    },
    {
      name: "Wallet",
      icon: "bx bx-wallet",
      url: "",
      show: false,
      items: [
        {
          name: "Wallet List",
          url: "/a/wallet/list",
        },
        {
          name: "Wallet Transactions",
          url: "/a/wallet/transactions",
        },
      ],
    },
    {
      name: "FAQS",
      icon: "bx bx-question-mark",
      url: "",
      show: false,
      items: [
        {
          name: "FAQS",
          url: "/a/faqs/faqs",
        },
        {
          name: "FAQS Specialties",
          url: "/a/faqs/faqSpecialties",
        },
      ],
    },
    {
      name: "Notification",
      icon: "bx bx-bell",
      url: "",
      show: false,
      items: [
        {
          name: "Notify Users",
          url: "/a/notifications/users/create",
        },
        {
          name: "Notify Doctors",
          url: "/a/notifications/doctors/create",
        },
      ],
    },
    {
      name: "Earnings",
      icon: "bx bx-user",
      url: "/a/earnings",
      show: false,
    },
  ]);

  const handleShow = (item) => {
    items.map((i) => {
      if (i.name === item.name) {
        i.show = !i.show;
      }
    });
    setItems([...items]);
  };

  return (
    <div className="layout__admin__sidebar col-12 col-md-auto">
      <SimpleBar style={{ maxHeight: "100vh", minWidth: "35vh" }}>
        <div className="layout__admin__content h-100 p-3">
          <div className="layout__sidebar">
            <div className="d-flex justify-content-end d-md-none">
              <button
                className="btn btn-transparent common__outline__none"
                onClick={() => props.setIsOpen(false)}
              >
                <i className="bx bx-x bx-md"></i>
              </button>
            </div>
            <div className="d-flex justify-content-center mb-3">
              <h5>PRANA</h5>
            </div>
            {items.map((item, key) => (
              <div key={key} className="">
                <div
                  className={`
                layout__sidebar__item__header
                d-flex justify-content-between align-items-center
                rounded
                p-2
                cursor__pointer
              `}
                  onClick={() => handleShow(item)}
                >
                  <div>
                    <Link href={item.url}>
                      <span className="d-inline-flex align-items-center">
                        <i className={`${item.icon} fs-5 me-2`}></i>
                        <span className="fs-6">{item.name}</span>
                      </span>
                    </Link>
                  </div>
                  <div className="d-inline-flex">
                    {item.items && item.items.length > 0 && (
                      <i
                        className={`bx bx-chevron-down fs-5 me-2 ${
                          item.show ? "bx-rotate-180" : ""
                        }`}
                      ></i>
                    )}
                  </div>
                </div>
                {item.show && item.items && (
                  <div className="ps-4 ms-2">
                    {item.items.map((child, childKey) => (
                      <div
                        className="
                      layout__sidebar__item__header 
                      d-flex align-items-center
                      rounded  
                      p-1 ps-2
                      cursor__pointer
                    "
                        key={childKey}
                      >
                        <Link href={child.url}>
                          <span className="fs-6">{child.name}</span>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </SimpleBar>
    </div>
  );
};

export default Sidebar;
