import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import fBase from '../utilities/firebase';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = event => setFormData({
    ...formData,
    [event.target.name]: event.target.value,
  });

  const onFormSubmit = async (event) => {
    event.preventDefault();

    await fBase
      .auth()
      .signInWithEmailAndPassword(formData.email, formData.password);

    return <Redirect to="/protected" />;
  };

  return (
    <form className="form login" onSubmit={onFormSubmit}>
      <Link className="links" to="/">Take me home</Link>
      <h2>LOGIN</h2>
      <input
        className="form-input"
        type="email"
        placeholder="Email Address"
        name="email"
        value={formData.email}
        onChange={event => handleInputChange(event)}
        required
      />
      <input
        className="form-input"
        type="password"
        placeholder="Password"
        name="password"
        value={formData.password}
        onChange={event => handleInputChange(event)}
        required
      />
      <button className="form-submit" type="submit">Submit</button>
      <Link className="links" to="/signup">I need an account</Link>
    </form>
  );
}

export default Login;
