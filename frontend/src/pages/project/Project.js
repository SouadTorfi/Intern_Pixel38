import React from "react";
import Dashbaord from "../dashboard/Dashboard";
import "./Project.css";
import { gql, useQuery, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";

const GET_PROJECTS = gql`
  query GetUsers {
    projects {
      title
      description
      user {
        first_name
      }
    }
  }
`;

const DELETE_PROJECTS = gql`
  mutation {
    deleteProject(id: "2") {
      id
      title
    }
  }
`;

function Project() {
  const { loading, error, data } = useQuery(GET_PROJECTS);
  const [Delete] = useMutation(DELETE_PROJECTS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <Dashbaord />
      <div className="project-page">
        <h1>Table Projects</h1>
        <br></br>
        <table id="projects-table">
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>User</th>
            <th>Action</th>
          </tr>
          {data.projects &&
            data.projects.map((u) => (
              <tr key={u.id}>
                <td>{u.title}</td>
                <td>{u.description}</td>
                <td>{u.user.first_name}</td>
                <td>
                  <div className="delete update_button">
                    <Link to={"/editproject/" + u.id}>
                      <button>Update</button>
                    </Link>
                  </div>
                  <button onClick={() => Delete(u.id)}>Delete</button>
                  <div className="delete"></div>
                </td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
}

export default Project;
