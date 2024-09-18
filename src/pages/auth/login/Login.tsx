import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

//Login page css
import './Login.scss';
import Auth from '../Auth';

//Login form validation with Yup
const schema = yup.object({
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required'),
}).required();

//Login Form Input Interface
interface IFormInput {
  email: string;
  password: string;
}

// Login page component
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema), // Integrate Yup schema with React Hook Form
  });

  const navigate = useNavigate();

  const onSubmit = (data: IFormInput) => {
    console.log('Form Submitted', data);
    // handle login logic here (e.g., API call)
    navigate('/');
  };

  return (
    <Auth title="Welcome Back" subtitle="Please login to your account">
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register('email')}
            placeholder="Enter your email"
          />
          {/* Show error message inside a div below the input field */}
          {errors.email && <div className="error-message">{errors.email.message}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register('password')}
            placeholder="Enter your password"
          />
          {/* Show error message inside a div below the input field */}
          {errors.password && <div className="error-message">{errors.password.message}</div>}
        </div>

        <button type="submit" className="submit-btn">Login</button>

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
