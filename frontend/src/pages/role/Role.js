import React from "react";
import Dashbaord from "../dashboard/Dashboard";
import "./Role.css";
import { gql, useQuery, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";

const GET_ROLES = gql`
  query GetUsers {
    roles {
      id
      name
    }
  }
`;

const DELETE_ROLES = gql`
  mutation getDelete {
    deleteRole(id: ID) {
      name
    }
  }
`;

function Role() {
  const { loading, error, data } = useQuery(GET_ROLES);
  const [Delete] = useMutation(DELETE_ROLES);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <Dashbaord />
      <div className="role-page">
        <h1>Table Roles</h1>
        <br></br>
        <table id="roles-table">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
          {data.roles &&
            data.roles.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>
                  <div className="delete update_button">
                    <Link to={"/editrole/" + u.id}>
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

export default Role;
