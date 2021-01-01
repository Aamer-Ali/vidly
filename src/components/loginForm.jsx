import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";

/*Created a class named Form and Componetn is extended in that class
  and that Form class is extended here.
  by using this we have make a generic Form class shich we can use any where we want */
class LoginForm extends Form {
  state = {
    //change named from account to data.
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    //call server
    console.log("submitted");
  };

  render() {
    return (
      <div className="container col-xl-4 col-sm-4	col-md-4	col-lg-4 loginContainer">
        <h4 className="text-center font-italic">
          <u>Login</u>
        </h4>
        <form onSubmit={this.handleSubmit}>
          {/* Insted of using Input markup here we have created the method renderinput 
          with arguments name and label we call method from here with name and label we want,
          and that function will return a button markup with that name and label. 
          [Check the function defination for that]  */}
          {this.renderInput("username", "Username", "text")}
          {this.renderInput("password", "Password", "password")}

          {/* Insted of using button markup here we have created the method renderButton with argument label 
          we call method from here with label we want. and that function will return a button markup with 
          that label. [Check the function defination for that]  */}
          <div className="text-center">{this.renderButton("Login")}</div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
