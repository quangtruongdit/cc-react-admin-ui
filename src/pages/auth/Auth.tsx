import React from 'react';
import './auth.scss'; // Import shared styles

interface AuthProps {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
}

const Auth: React.FC<AuthProps> = ({ title, subtitle, children }) => {
    return (
        <div className="auth-container">
            <div className="auth-title">
                <h1>{title}</h1>
                {subtitle && <p>{subtitle}</p>}
            </div>
            <div className="auth-content">
                {children}
            </div>
        </div>
    );
};

export default Auth;
