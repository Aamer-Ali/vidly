import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const options = { abortEarly: false };

    //bleow line of code use object destructuring and ger error from result object
    const { error } = Joi.validate(this.state.data, this.schema, options);

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
    /* ^ above line we cannot pass this.state.data here, 
        bcz it will check the whole form for that we have created the new object above to store single item.
        We also cannot pass this.schema here bcz the the global schema is for whole form. For that we have to create 
        subSchema.*/

    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });

    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    //destrured e.cuurentTarget and named it input
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  renderButton = (label) => {
    return (
      <button
        disabled={this.validate()}
        type="submit"
        className="btn btn-primary"
      >
        {label}
      </button>
    );
  };

  renderInput = (name, label, type) => {
    const { errors, data } = this.state;

    return (
      <Input
        name={name}
        label={label}
        value={data[name]}
        type={type}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };
}

export default Form;
