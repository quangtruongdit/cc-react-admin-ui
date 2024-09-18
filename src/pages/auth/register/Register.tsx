import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './Register.scss';
import Auth from '../Auth';

// Define the validation schema with Yup
const schema = yup.object({
    name: yup.string().required('Name is required'),
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    email: yup
        .string()
        .email('Please enter a valid email address')
        .required('Email is required'),
    password: yup
        .string()
        .min(6, 'Password must be at least 6 characters long')
        .required('Password is required'),
}).required();

interface IFormInput {
    name: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>({
        resolver: yupResolver(schema),
    });

    const navigate = useNavigate(); // Initialize useNavigate

    const onSubmit = (data: IFormInput) => {
        console.log('Registration Submitted', data);
        // Simulate registration success and navigate to the login page
        navigate('/login');
    };

    return (
        <Auth title="Register" subtitle="Create a new account">
            <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        {...register('name')}
                        placeholder="Enter your name"
                    />
                    {errors.name && <div className="error-message">{errors.name.message}</div>}
                </div>

                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        {...register('firstName')}
                        placeholder="Enter your first name"
                    />
                    {errors.firstName && <div className="error-message">{errors.firstName.message}</div>}
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        {...register('lastName')}
                        placeholder="Enter your last name"
                    />
                    {errors.lastName && <div className="error-message">{errors.lastName.message}</div>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        {...register('email')}
                        placeholder="Enter your email"
                    />
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
                    {errors.password && <div className="error-message">{errors.password.message}</div>}
                </div>

                <button type="submit" className="submit-btn">Register</button>
                <div
                    style={{
                        marginTop: '10px',
                        display: 'flex', // Use flexbox
                        justifyContent: 'flex-end', // Align to the right
                    }}
                >
                    <Link to="/login">Back</Link>
                </div>
            </form>
        </Auth>
    );
};

export default Register;
