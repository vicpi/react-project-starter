import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import classNames from 'classnames';
import { connect } from 'react-redux';

import './SignUpForm.scss';

export const fields = ['firstName', 'lastName', 'email', 'sex', 'favoriteColor', 'employed', 'notes'];

class SignUpForm extends Component {
  render() {
    const {
      fields: { firstName, lastName, email, sex, favoriteColor, employed, notes },
      handleSubmit,
      resetForm,
      submitting
      } = this.props;
    return (
      <div className="signup-form-container">
        <form onSubmit={handleSubmit} className="signup-form form-horizontal">
          <div className={classNames({
            'form-group': true,
            'has-error': firstName.touched && firstName.error
          })}>
            <label htmlFor="first_name" className="col-sm-2 control-label">First Name</label>
            <div className="col-sm-10">
              <input type="text" placeholder="First Name" {...firstName} className="form-control" aria-describedby="first_name_help" id="first_name" />
              {firstName.touched && firstName.error && <p className="help-block" id="first_name_help">{firstName.error}</p>}
            </div>
          </div>
          <div className={classNames({
            'form-group': true,
            'has-error': lastName.touched && lastName.error
          })}>
            <label htmlFor="lastname" className="col-sm-2 control-label">Last Name</label>
            <div className="col-sm-10 form-column">
              <input type="text" placeholder="Last Name" {...lastName} className="form-control" id="lastname" aria-describedby="last_name_help"/>
              {lastName.touched && lastName.error && <p className="help-block" id="last_name_help">{lastName.error}</p>}
            </div>
          </div>
          <div className={classNames({
            'form-group': true,
            'has-error': email.touched && email.error
          })}>
            <label htmlFor="email" className="col-sm-2 control-label">Email</label>
            <div className="col-sm-10 form-column">
              <input type="email" placeholder="Email" {...email} className="form-control" id="email" aria-describedby="email_help" />
              {email.touched && email.error && <p className="help-block" id="email_help">{email.error}</p>}
            </div>
          </div>
          <div className={classNames({
            'form-group': true,
            'has-error': sex.touched && sex.error
          })}>
            <label className="col-sm-2 control-label">Gender</label>
            <div className="col-sm-10 form-column">
              <div className="radio">
                <label>
                  <input type="radio" {...sex} value="male" checked={sex.value === 'male'}/> Male
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" {...sex} value="female" checked={sex.value === 'female'}/> Female
                </label>
              </div>
              {sex.touched && sex.error && <p className="help-block" id="sex_help">{sex.error}</p>}
            </div>
          </div>
          <div className={classNames({
            'form-group': true,
            'has-error': favoriteColor.touched && favoriteColor.error
          })}>
            <label htmlFor="favorite_color" className="col-sm-2 control-label">Favorite Color</label>
            <div className="col-sm-10 form-column">
              <select
                id="favorite_color"
                className="form-control"
                {...favoriteColor}
                // required syntax for reset form to work
                // undefined will not change value to first empty option
                // when resetting
                value={favoriteColor.value || ''}
                aria-describedby="favourite_color_help">
                <option></option>
                <option value="ff0000">Red</option>
                <option value="00ff00">Green</option>
                <option value="0000ff">Blue</option>
              </select>
              {favoriteColor.touched && favoriteColor.error && <p className="help-block" id="favourite_color_help">{favoriteColor.error}</p>}
            </div>
          </div>
          <div className={classNames({
            'form-group': true,
            'has-error': employed.touched && employed.error
          })}>
            <label className="col-sm-2 control-label">Status</label>
            <div className="col-sm-10 form-column">
              <div className="checkbox">
                <label>
                  <input type="checkbox" {...employed} aria-describedby="employed_help" /> Employed
                </label>
              </div>
              {employed.touched && employed.error && <p className="help-block" id="employed_help">{employed.error}</p>}
            </div>
          </div>
          <div className={classNames({
            'form-group': true,
            'has-error': notes.touched && notes.error
          })}>
            <label htmlFor="notes" className="col-sm-2 control-label">Notes</label>
            <div className="col-sm-10 form-column">
              <textarea
                id="notes"
                {...notes}
                className="form-control"
                // required for reset form to work (only on textarea's)
                // see: https://github.com/facebook/react/issues/2533
                value={notes.value || ''}
                aria-describedby="notes_help"
              />
              {notes.touched && notes.error && <p className="help-block" id="notes_help">{notes.error}</p>}
            </div>
          </div>
          <div className={classNames({
            'form-group': true
          })}>
            <div className="col-sm-2">
              <button type="submit" disabled={submitting} className="btn btn-default">
                {submitting ? <i/> : <i/>} Submit
              </button>
            </div>
            <div className="col-sm-offset-8 col-sm-2">
              <button type="button" disabled={submitting} onClick={resetForm} className="btn btn-default">
                Clear Values
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

SignUpForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    handleSubmit: (e) => {
      console.log('submit');
      Object.keys(state.form.simple).forEach((key) => {
        const field = state.form.simple[key];
        if (!key.startsWith('_'))
          console.log(key, field.value);
      });
      console.log(state.form.simple);
      e.preventDefault();
    }
  }
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required'
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less'
  }
  if (!values.lastName) {
    errors.lastName = 'Required'
  } else if (values.lastName.length > 15) {
    errors.lastName = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.notes) {
    errors.notes = 'Required'
  } else if (values.notes.length > 15) {
    errors.notes = 'Must be 15 characters or less'
  }
  if (!values.sex) {
    errors.sex = 'Required'
  }
  if (!values.favoriteColor) {
    errors.favoriteColor = 'Required'
  }
  return errors
};

SignUpForm = connect(mapStateToProps, mapDispatchToProps)(SignUpForm);

export default reduxForm({
  form: 'simple',
  fields,
  validate
})(SignUpForm)
