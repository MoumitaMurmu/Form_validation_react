import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const initialValues = { username: "", email: "", password: "",confirmPassword: "", text: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Full Name should not be empty!";
    }
    else if (values.username.length < 3) {
      errors.username = "Full Name must be more than 3 characters.";
    }
    if (!values.email) {
      errors.email = "Email should not be empty!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password should not be empty";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters.";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters.";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Password and Confirm Password should be match.";
    } 
    else if (values.password!=values.confirmPassword) {
      errors.confirmPassword = "Password and Confirm Password don't match!";
    }
    
    return errors;
  };

  return (
    <div className="container">
      

      <form onSubmit={handleSubmit}>
        <h1>Signup</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Full Name</label>
            <input
              type="text"
              name="username"
              
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <div className="field">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
            
              value={formValues.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.confirmPassword}</p>
          
          
          <button className="fluid ui button blue">Signup</button>
        </div>
      </form>
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success" id="signup-msg">Successfully Signed Up!</div>
      ) : (
        <pre>{(formValues, undefined, 2)}</pre>
      )}
    </div>
  );
}

export default App;

          
              
              
              
            
        
              
             
             
           
         