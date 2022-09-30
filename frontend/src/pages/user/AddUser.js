import React from "react";
import "./AddUser.css";
import { useState } from "react";
import Dashbaord from "../dashboard/Dashboard";
import { gql, useQuery, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ADD_USERS = gql`
  mutation createUser(
    $first_name: String!
    $last_name: String!
    $email: String!
    $password: password
  ) {
    createUser(
      input: {
        first_name: $first_name
        last_name: $LastName
        email: $email
        password: $password
      }
    ) {
      fisrt_name
      last_name
      email
      password
    }
  }
`;
function AddUser() {
  const navigate = useNavigate();
  const [create] = useMutation(ADD_USERS);

  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    role_id: "",
  });

  const handleChange = (e) => {
    e.persist();
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    create({
      variables: {
        first_name: state.first_name,
        last_name: state.last_name,
        email: state.email,
        password: state.password,
        role_id: state.role_id,
      },
      onCompleted: ({ signup }) => {
        navigate("/dashboard");
      },
    });
  };

  return (
    <div>
      <Dashbaord />
      <div className="add-user">
        {" "}
        <div id="addUser-container">
          <h1>Add User</h1>
          <div className="addUser-underline"></div>
          <form id="addUser_form" onSubmit={{ handleSubmit }}>
            <div className="addUser-name">
              <label for="name"></label>
              <input
                type="text"
                placeholder="FirstName"
                name="first_name"
                id="password_input"
                onChange={handleChange}
                value={state.first_name}
                required
              />
            </div>

            <div className="addUser-telephone">
              <label for="name"></label>
              <input
                type="text"
                placeholder="LastName"
                name="last_name"
                id="telephone_input"
                onChange={handleChange}
                value={state.last_name}
                required
              />
            </div>
            <div className="addUser-name">
              <label for="name"></label>
              <input
                type="text"
                placeholder="Password"
                name="password"
                id="password_input"
                onChange={handleChange}
                value={state.password}
                required
              />
            </div>
            <div className="addUser-telephone">
              <label for="name"></label>
              <input
                type="text"
                placeholder="Email"
                name="email"
                id="email_input"
                onChange={handleChange}
                value={state.email}
                required
              />
            </div>
            {/* <div className="addUser-name">
              <label for="name"></label>
              <input
                type="text"
                placeholder="Role"
                name="role_id"
                id="password_input"
                onChange={handleChange}
                value={state.role_id}
                required
              />
            </div> */}

            <div className="addUser-submit">
              <input type="submit" value="Add" id="form_button-addUser" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default AddUser;
