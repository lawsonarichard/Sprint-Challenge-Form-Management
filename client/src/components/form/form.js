import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { Row, Button } from "shards-react";

const UserForm = ({ errors, touched, values, handeSubmit, status }) => {
  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/restricted/data`)
      .then(res => setUsers(res.data));
  }, []);

  return (
    <div className="user-form">
      <h1> Register</h1>
      <Form>
        <Row className="fields">
          <Field type="text" name="username" placeholder="Username" />
          {touched.username && errors.username && (
            <p className="error">{errors.username}</p>
          )}
        </Row>
        <Row className="fields">
          <Field
            type="text"
            name="password"
            placeholder="Password (8 or more characters)"
          />
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}
        </Row>
        <Row className="fields">
          <Button theme="light" type="submit">
            Submit!
          </Button>
        </Row>
      </Form>
      {users.map(users => (
        <p key={users.name}>
          <br />
          {users.usersname}
        </p>
      ))}
    </div>
  );
};

const FormikUserForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Please enter your first name"),
    password: Yup.string()
      .required()
      .min(8, "Password must be 8 characters or longer")
  }),

  handleSubmit(values, { setStatus }) {
    axios
      .post("http://localhost:5000/api/register/", values)
      .then(res => {
        setStatus(res.data);
        console.log(res);
      })
      .catch(err => console.log(err.response));
    axios
      .get("http://localhost:5000/api/restricted/data")
      .then(res => {
        setStatus(res.data);
        console.log("Get test", res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }
})(UserForm);

export default FormikUserForm;
