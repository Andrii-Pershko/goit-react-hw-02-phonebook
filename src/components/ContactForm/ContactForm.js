import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import PropTypes from 'prop-types';
import  './ContactForm.module.css';

const initialValues = {
  name: '',
  number: '',
};

let userSchema = object().shape({
  name: string().min(2).required(),
  number: string()
    .min(12, 'Enter number format xxx-xxx-xxxx')
    .matches(/^((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}$/, {
      message: 'Enter number format xxx-xxx-xxxx',
      excludeEmptyString: false,
    })
    .required(),
});

export default class ContactForm extends Component {
  handleSubmit = ({ name, number }, action) => {
    this.props.onSubmit(nanoid(), name, number);
    action.resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={this.handleSubmit}
        validationSchema={userSchema}
      >
        <Form autoComplete="off">
          <label>
            <p>Name</p>
            <Field type="text" name="name" />
            <ErrorMessage name="name" />
          </label>

          <label>
            <p>Number</p>
            <Field type="tel" name="number" />
            <ErrorMessage name="number" />
          </label>
          <br></br>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    );
  }
}

ContactForm.propTypes = {
  onChange: PropTypes.func,
};
