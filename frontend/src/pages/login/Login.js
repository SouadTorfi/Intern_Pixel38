import React from "react";
import "./Login.css";
import { useQuery, gql } from "@apollo/client";

const GET_USERS = gql`
  {
    users {
      name
      email
    }
  }
`;
function Login() {
  const { data, error } = useQuery(GET_USERS);
  console.log("data", data);
  console.log("error", error);

  return (
    <div>
      <div className="loginPage">
        <h2>Login Page</h2>
        <form className="loginForm">
          <input type="text" placeholder="email" />
          <input type="password" placeholder="password" />
          <button type="submit" className="loginbtn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
