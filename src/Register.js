import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userRegister } from './redux/actions/userAction';
import { useDispatch } from 'react-redux';
// import axios from "./Api/axios";
import "./App.css";

function Register() {
  const initialValues = { username: "", email: "", password: "" };
  const [items, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  // const [isUserExitst, setIsUserExitst] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...items, [name]: value });
  };
  const handleLogin = () => {
    navigate('/login');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(items));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      dispatch(userRegister(items));
      setFormValues(initialValues);
    }
  }, [formErrors,items]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="container padding-top-bottom-50">
      <form onSubmit={handleSubmit} className='col-sm-6 offset-sm-3'>
        <h3>Register Page</h3>
        <hr />
        <input type="text" name='username' value={items.username}
          onChange={handleChange}
          className="form-control" placeholder="username" />
        <span style={{ fontWeight: 'bold', color: 'red', }}>{formErrors.username}</span>

        <br />

        <input type="text" name='email' value={items.email}
          onChange={handleChange} className="form-control" placeholder="email" />
        <span style={{ fontWeight: 'bold', color: 'red', }}>{formErrors.email}</span>
        <br />
        <input type="password" name='password' value={items.password}
          onChange={handleChange}
          className="form-control" placeholder="password" />
        <span style={{ fontWeight: 'bold', color: 'red', }}>{formErrors.password}</span>
        <br />
        <button type='submit' className='btn btn-primary'>Sign Up</button>
        <div>
          <br />
          Already has Account Please Login
          <Link onClick={handleLogin} to="/login" className='mt-2'>Login</Link>
        </div>
      </form>
    </div>
  );
}

export default Register;


