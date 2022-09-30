import React from "react";
import "./EditUser.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";

const GET_SINGLE_USERS = gql`
  query GetUsers {
    user(id: 7) {
      id
      email
      first_name
      last_name
      password
      role {
        name
      }
    }
  }
`;

function EditUser() {
  const { loading, error, data } = useQuery(GET_SINGLE_USERS);
  const id = useParams();

  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    role_id: "",
    password: "",
  });
  const handleChange = (e) => {
    e.persist();
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="edit-user">
      <div>
        <div id="editUser-container">
          <h1>Edit User</h1>
          <div className="editUser-underline"></div>
          <form id="editUser_form">
            <div className="editUser-name">
              <label for="name"></label>
              <input
                type="text"
                placeholder="FirstName"
                name="first_name"
                id="name_input"
                onChange={handleChange}
                value={data.user.first_name}
                required
              />
            </div>

            <div className="editUser-telephone">
              <label for="name"></label>
              <input
                type="text"
                placeholder="LastName"
                name="last_name"
                id="telephone_input"
                onChange={handleChange}
                value={data.user.last_name}
                required
              />
            </div>
            <div className="editUser-name">
              <label for="name"></label>
              <input
                type="text"
                placeholder="Password"
                name="password"
                id="password_input"
                onChange={handleChange}
                value={data.user.password}
                required
              />
            </div>
            <div className="editUser-telephone">
              <label for="name"></label>
              <input
                type="text"
                placeholder="Role"
                name="role_id"
                id="address_input"
                onChange={handleChange}
                // value={state.user.role}
                required
              />
            </div>
            <div className="editUser-email">
              <label for="email"></label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                id="email_input"
                onChange={handleChange}
                value={data.user.email}
                required
              />
            </div>
            <div className="editUser-submit">
              <input
                type="submit"
                value="save change"
                id="form_button-editUser"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default EditUser;
