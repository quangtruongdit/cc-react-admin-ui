import React from 'react';
import './loader.scss';

interface LoaderProps {
    size?: string; // You can define size as a CSS value (e.g., '50px', '100%', '2em')
}

const Loader: React.FC<LoaderProps> = ({ size = '3em' }) => {
    return (
        <div className="loader-container">
            <div className="spinner" style={{ width: size, height: size }}></div>
        </div>
    );
};

export default Loader;
