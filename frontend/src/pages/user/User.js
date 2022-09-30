import React from "react";
import Dashbaord from "../dashboard/Dashboard";
import "./User.css";
import { gql, useQuery, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      email
      first_name
      last_name
      role {
        name
      }
    }
  }
`;

const DELETE_USERS = gql`
  mutation getDelete {
    deleteUser(id: ID) {
      first_name
    }
  }
`;

function User() {
  const { loading, error, data } = useQuery(GET_USERS);
  const [Delete] = useMutation(DELETE_USERS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <Dashbaord />
      <div className="user-page">
        <h1>Table Users</h1>
        <br></br>
        <Link to="/adduser">
          <button className="add-user-btn">Add User</button>
        </Link>
        <table id="users-table">
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
          {data.users &&
            data.users.map((u) => (
              <tr key={u.id}>
                <td>{u.first_name}</td>
                <td>{u.last_name}</td>
                <td>{u.email}</td>

                <td> {u && u.role ? u.role.name : "NULL"}</td>
                <td>
                  <div className="delete update_button">
                    <Link to={"/edituser/" + u.id}>
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

export default User;
