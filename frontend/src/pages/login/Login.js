import React from "react";
import "./Login.css";
import { useQuery, gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const GET_USERS = gql`
  mutation GetUser {
    users {
      email
      password
    }
  }
`;
function Login() {
  const navigate = useNavigate();
  const [GetUser, { data, error }] = useMutation(GET_USERS);

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const loginHandleChange = (e) => {
    let { name, value } = e.target;

    setLogin({ ...login, [name]: value });
  };

  const loginHandleSubmit = (e) => {
    e.preventDefault();
    GetUser({
      variables: {
        email: login.email,
        password: login.password,
      
      },
    });
  navigate("/home")
  };

  return (
    <div>
      <div className="loginPage">
        <h2>Login Page</h2>
        <form className="loginForm" onSubmit={loginHandleSubmit}>
          <input
            type="text"
            placeholder="email"
            name="email"
            onChange={loginHandleChange}
            value={login.email}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={loginHandleChange}
            value={login.password}
          />
          <button type="submit" className="loginbtn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
