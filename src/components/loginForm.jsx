import React, { Component } from "react";
import Input from "./common/input";
import Joi from "joi-browser";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });

    if (errors) return;

    //call server
    console.log("submitted");
  };

  validate = () => {
    const options = { abortEarly: false };

    //bleow line of code use object destructuring and ger error from result object
    const { error } = Joi.validate(this.state.account, this.schema, options);

    if (!error) return null;

    const errors = {};

    //we can get data from result.error.details in 2 ways.

    //1 . using for loop
    // for (let item of result.error.details) {
    // errors[item.path[0]] = item.message;
    // }

    //2 . using map method
    error.details.map((item) => (errors[item.path[0]] = item.message));

    return errors;
  };

  validateProperty = ({ name, value }) => {
    const object = { [name]: value };
    /* ^ above line instead of harcoding the field name here we have used ES6 syntax and 
      pass the name in "[]", we have use computed properties
    */

    const schema = { [name]: this.schema[name] };
    /* ^ above line we cannot use "value" as it is for that we have to get the value from main schema
     */

    const { error } = Joi.validate(object, schema);
    /* ^ above line we cannot pass this.state.account here, 
    bcz it will check the whole form for that we have created the new object above to store single item.
    We also cannot pass this.schema here bcz the the global schema is for whole form. For that we have to create 
    subSchema.*/

    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    //destrured e.cuurentTarget and named it input
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render() {
    return (
      <div className="container col-xl-4 col-sm-4	col-md-4	col-lg-4 loginContainer">
        <h4 className="text-center font-italic">
          <u>Login</u>
        </h4>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            value={this.state.account.username}
            onChange={this.handleChange}
            error={this.state.errors.username}
          />

          <Input
            name="password"
            label="Password"
            value={this.state.account.password}
            type="password"
            onChange={this.handleChange}
            error={this.state.errors.password}
          />
          <div className="text-center">
            <button
              disabled={this.validate()}
              type="submit"
              className="btn btn-primary"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
