import React from 'react'
import { Field, reduxForm } from 'redux-form'

const Signup = props => {
  const { handleSubmit, pristine, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <div>
          <Field
            name="username"
            component="input"
            type="text"
            placeholder="Username"
          />
        </div>
      </div>

      <div>
        <label>Email</label>
        <div>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>

      <div>
        <label>Password</label>
        <div>
          <Field
            name="password"
            component="input"
            type="password"
            placeholder="Password"
          />
        </div>
      </div>

      <div>
        <label>Confirm Password</label>
        <div>
          <Field
            name="confirmPassword"
            component="input"
            type="password"
            placeholder="Confirm Password"
          />
        </div>
      </div>

      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'signup', // a unique identifier for this form
  onSubmit: (values)=>{console.log(values)}
})(Signup)
