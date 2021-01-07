import Form from "./common/form";
import Joi from "joi-browser";

class RegistrationForm extends Form {
  state = {
    //change named from account to data.
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = () => {
    //call server
    console.log("submitted");
  };

  render() {
    return (
      <div className="container col-xl-4 col-sm-4	col-md-4	col-lg-4 loginContainer">
        <h4 className="text-center font-italic">
          <u>Register</u>
        </h4>
        <form onSubmit={this.handleSubmit}>
          {/* Insted of using Input markup here we have created the method renderinput 
            with arguments name and label we call method from here with name and label we want,
            and that function will return a button markup with that name and label. 
            [Check the function defination for that]  */}
          {this.renderInput("username", "Username", "text")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name", "text")}

          {/* Insted of using button markup here we have created the method renderButton with argument label 
            we call method from here with label we want. and that function will return a button markup with 
            that label. [Check the function defination for that]  */}
          <div className="text-center">{this.renderButton("Login")}</div>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
