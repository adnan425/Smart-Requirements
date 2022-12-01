import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./Input";

export default class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    console.log(error);

    // if no errors
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    console.log(errors);
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.state.schema[value] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return false;

    this.doSubmit();
  };
  handleChange = (e) => {
    let { target: input } = e;

    const errors = { ...this.state.errors };
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ errors, data });
    

  };
  renderButton(label) {
    return (
      <div className="d-grid">
        <button
          className="btn btn-primary btn-block mt-2"
        >
          {label}
        </button>
      </div>
    );
  }
  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;

    return (
      <Input
        name={name}
        value={data[name]}
        label={label}
        type={type}
        error={errors[name]}
        onChange={this.handleChange}
      />
    );
  }
}
