import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import Dashbaord from "./dashboard/Dashboard";

const GET_PROJECTS_NUMBERS = gql`
  query GetProject {
    projects {
      title
      description
      user {
        first_name
      }
    }
  }
`;
function Pie() {
  const { loading, error, data } = useQuery(GET_PROJECTS_NUMBERS);
  // const { loading, error, data } = useQuery(GET_TASKS_PROGRESS);

  console.log("first", data);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <div>
      <Dashbaord />
      <div className="dashboardPage">
        <div className="PieChart">
          <h4>Task Progress</h4>

          <PieChart
            data={[
              { title: "Pending", value: 5, color: "#59a14f" },
              { title: "Done", value: 15, color: "#e15759" },
            ]}
          />
          <figcaption>
            {" "}
            Pending<span className="pending-span"></span>
            <br></br>
            Done<span className="done-span"></span>
          </figcaption>
        </div>

        <div className="project-count">
          <div className="project-count-content">
            <h1>Project Number</h1>
            <br></br>
            {data.projects &&
              data.projects.map((project) => (
                <div key={project.id}>
                  <h4> {project.title}</h4>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pie;
