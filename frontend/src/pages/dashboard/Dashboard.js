import React from "react";
import { Link } from "react-router-dom";
import { FaUsers, FaSignOutAlt, FaAlignJustify } from "react-icons/fa";
import { MdOutlineLocalActivity } from "react-icons/md";
import { AiOutlinePartition, AiFillDashboard } from "react-icons/ai";
import "./Dashboard.css";
import { PieChart } from "react-minimal-pie-chart";
import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

const GET_PROJECTS_NUMBERS = gql`
  query GetProject {
    projects {
      title
      description
      user {
        first_name
      }
      manager {
        first_name
      }
    }
  }
`;

const GET_TASKS_PROGRESS = gql`
  query GetTask {
    tasks {
      id
      title
      in_progress
      user {
        first_name
      }
    }
  }
`;
function Dashbaord() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href("/");
  };

  // const { loading, error, data } = useQuery(GET_PROJECTS_NUMBERS);
  // // const { loading, error, data } = useQuery(GET_TASKS_PROGRESS);

  // console.log("first", data);

  // if (loading) return "Loading...";
  // if (error) return `Error! ${error.message}`;

  return (
    <div className="dashboard-page">
      <input type="checkbox" id="nav-toggle" />
      <div className="sidebar">
        <div className="sidebar-brand">
          <h1>
            <Link to="#" className="logo-dashbaord">
              Pixel<span>System</span>
            </Link>
          </h1>
        </div>

        <div className="sidebar-menu">
          <ul>
            <li className="li-dashbaord">
              <Link to="/pie">
                <span>
                  {" "}
                  <b>
                    <AiFillDashboard />
                  </b>{" "}
                  Dashboard
                </span>
              </Link>
            </li>
            <li className="li-dashbaord">
              <Link to="/project">
                <span>
                  <b>
                    <AiOutlinePartition />
                  </b>{" "}
                  Projects
                </span>
              </Link>
            </li>

            <li className="li-dashbaord">
              <Link to="/users">
                <span>
                  <b>
                    {" "}
                    <FaUsers />
                  </b>{" "}
                  Users
                </span>
              </Link>
            </li>
            <li className="li-dashbaord">
              <Link to="/role">
                <span>
                  <b>
                    {" "}
                    <MdOutlineLocalActivity />
                  </b>{" "}
                  Roles
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="main-content">
        <header>
          <label htmlFor="nav-toggle">
            <span className="fas fa-bars">
              <FaAlignJustify />
            </span>
          </label>

          <div className="user-wrapper">
            <Link to="/" className="header_link" onClick={() => logout()}>
              <span>
                {" "}
                <b>
                  {" "}
                  <FaSignOutAlt />
                </b>{" "}
                Logout
              </span>
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Dashbaord;
