import React from "react";
import "./Login.css";
import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;
function Login() {
  const navigate = useNavigate();
  const [LoginMutation] = useMutation(LOGIN_MUTATION);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const loginHandleSubmit = (e) => {
    e.preventDefault();
    LoginMutation({
      variables: {
        email: formState.email,
        password: formState.password,
      },
      onCompleted: ({ signup }) => {
        localStorage.setItem("token", formState.token);
        navigate("/dashboard");
      },
    });
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
            value={formState.email}
            onChange={(e) =>
              setFormState({
                ...formState,
                email: e.target.value,
              })
            }
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={formState.password}
            onChange={(e) =>
              setFormState({
                ...formState,
                password: e.target.value,
              })
            }
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
