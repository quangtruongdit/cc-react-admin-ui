// ForgotPassword.tsx
import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './ForgotPassword.scss'; // Optional: Your custom styles
import { Link, useNavigate } from 'react-router-dom';
import Auth from '../Auth';

// Define the shape of the form's initial values
interface ForgotPasswordFormValues {
    email: string;
}

// Validation schema using Yup
const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
});

const ForgotPassword: React.FC = () => {
    const initialValues: ForgotPasswordFormValues = { email: '' };
    const navigate = useNavigate();

    const handleSubmit = (values: ForgotPasswordFormValues) => {
        // TODO: Call register api
        console.log('Forgot password form submitted', values);
        navigate('/login');
    };

    useEffect(() => {
        console.log(`Rendering ${ForgotPassword.name}`)
    }, []);

    return (
        <Auth title={'Forgot Password'} subtitle={'Enter your email to reset password'}>
            <div >
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className="forgot-password-form">
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <Field
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                />
                                <ErrorMessage name="email" component="div" className="error-message" />
                            </div>

                            <button type="submit" className="submit-button" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Send Reset Link'}
                            </button>
                        </Form>
                    )}
                </Formik>
                <div
                    style={{
                        marginTop: '10px',
                        display: 'flex', // Use flexbox
                        justifyContent: 'flex-end', // Align to the right
                    }}
                >
                    <Link to="/login">Back</Link>
                </div>
            </div>
        </Auth>
    );
};

export default ForgotPassword;
