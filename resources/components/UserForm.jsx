import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Button from './Button';
import Text from './Text';
import { SubmissionError } from 'redux-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function submit(values, props) {
  if (values.email != values['confirm-email']) {
    throw new SubmissionError({
      _error: 'Emails must match!'
    })
  } else {
    props.onSubmit(values)
  }
}

const SimpleForm = props => {
  const { error, handleSubmit, pristine, reset, submitting } = props
  return (
    <div className="flex flexaic flexjcc f-column login-lint p24">

      <div className="pb24 text-center">
        <img width="43.17" height="50" src="http://toybox-public.s3.amazonaws.com/Asset%201@2x.png" />
        </div>

      <div className="pb48 text-center">
        <Text size="small">Sign up for Toybox</Text>
        <Text size="body" subdued>Enter your email</Text>
      </div>

      {error && <strong>{error}</strong>}
      <form onSubmit={handleSubmit((values) => submit(values, props))}>
          <label>Email</label>
            <Field
              name="email"
              component="input"
              type="email"
              placeholder=""
              className="mb16"
            />
          <label>Confirm Email</label>
            <Field
              name="confirm-email"
              component="input"
              type="email"
              placeholder=""
              className="mb16"
            />
          <Button size="full" style="primary" type="submit" disabled={pristine || submitting}>
            Sign Up
          </Button>
      </form>

    </div>
  )
}

export default reduxForm({
  form: 'email' // a unique identifier for this form
})(SimpleForm)
