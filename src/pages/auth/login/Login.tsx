import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import './Login.scss';
import Auth from '../Auth';
import { useLoginMutation } from '../../../services/apis/auth';
import { useState } from 'react';
import Loader from '../../../components/loader/Loader';

const schema = yup.object({
  // email: yup
  //   .string()
  //   .email('Please enter a valid email address')
  //   .required('Email is required'),
  username: yup
    .string()
    .min(6, 'Username must be at least 6 characters long')
    .required('Username is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required'),
}).required();

interface IFormInput {
  username: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema), // Integrate Yup schema with React Hook Form
  });

  const navigate = useNavigate();
  const [login, { isLoading, error }] = useLoginMutation();


  const [username, setUsername] = useState('tuditech'); // Initial state for username
  const [password, setPassword] = useState('Tuditech@24'); // Initial state for password

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (data: IFormInput) => {
    console.log('Form Submitted', data);

    try {
      const result = await login({ userName: data.username, password: data.password }).unwrap();
      // If successful, you can handle the token or navigate

      if (result.status == 200) {
        navigate("/verify", { state: { fromLogin: true } });
      } else {
        alert(result.message)
      }
    } catch (err) {
      // The error will be handled automatically by the "error" state returned by the mutation
      console.error('Login failed:', err);
    }
  };

  return (
    <Auth title="Welcome Back" subtitle="Please login to your account">
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          {/* <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register('email')}
            placeholder="Enter your email"
            value={"tuditech"}
          />
          {errors.email && <div className="error-message">{errors.email.message}</div>} */}
          <label htmlFor="username">Username</label>
          <input
            type="string"
            id="username"
            {...register('username')}
            placeholder="Enter your username"
            value={username}
            onChange={handleUsernameChange}
          />
          {errors.username && <div className="error-message">{errors.username.message}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register('password')}
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
          {/* Show error message inside a div below the input field */}
          {errors.password && <div className="error-message">{errors.password.message}</div>}
        </div>

        <button type="submit" className="submit-btn">Login</button>
        {isLoading && <Loader />}
        <div>
          {JSON.stringify(error)}
        </div>
        {/* Register button */}
        <div className="register-link">
          <button
            type="button"
            className="register-btn"
            onClick={() => navigate('/register')}
          >
            Register
          </button>
        </div>
        <div className="forgotpassword-link">
          {/* <button
        type="button"
        className="forgotpassword-btn"
        onClick={() => navigate('/forgotpassword')}
      >
        Forgot-Password
      </button> */}
          <Link to={'/forgotpassword'}>Forgot-Password</Link>
        </div>
      </form>
    </Auth>
  );
};

export default Login;
