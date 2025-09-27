/* 
This basic form component uses react-final-form to create a simple form with validation.
*/

import { Form, Field } from "react-final-form";
import "./BasicFormStyle.scss";
import Validate from "./BasicFormValidate";

const BasicForm = () => {
  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };
  return (
    <Form
      onSubmit={onSubmit}
      validate={Validate}
      render={({ handleSubmit, values, errors, valid, touched }) => (
        <form onSubmit={handleSubmit}>
          <label>
            First Name
            <Field
              name="firstName"
              component="input"
              placeholder="First Name"
            />
          </label>
          <label>
            Last Name
            <Field name="lastName" component="input" placeholder="Last Name" />
          </label>
          <label>
            Date of Birth
            <Field name="dob" component="input" placeholder="Age" type="date" />
          </label>
          <label>
            Gender
            <Field name="gender" component="select">
              <option name="Gender" value="">
                Select Gender
              </option>
              <option name="Male" value="m">
                Male
              </option>
              <option name="Female" value="f">
                Female
              </option>
            </Field>
          </label>
          <div className="employed-group">
            <label className="employed-label">Employed</label>
            <div className="radio-group">
              <label className="radio-label">
                <Field
                  name="employed"
                  component="input"
                  type="radio"
                  value="yes"
                />
                Yes
              </label>
              <label className="radio-label">
                <Field
                  name="employed"
                  component="input"
                  type="radio"
                  value="no"
                />
                No
              </label>
            </div>
          </div>
          <label>
            Bio
            <Field name="bio" component="textarea" placeholder="Bio" />
          </label>
          <label className="file-upload-group">
            Photo
            <Field name="photo" component="input" type="file" className="file-input" />
          </label>
          <button type="submit" disabled={!valid} className="submit-button">Submit</button>
          {valid && (
            <pre className="output">
              <code>{JSON.stringify(values, null, 2)}</code>
            </pre>
          )}
          {!valid && touched && Object.values(touched).some(Boolean) && (
            <pre className="error">
              <code>{JSON.stringify(errors, null, 2)}</code>
            </pre>
          )}
        </form>
      )}
    ></Form>
  );
};

export default BasicForm;
