import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DemoNavbar from './DemoNavbar';

const DemoRoutingWithNavlink: React.FC = () => {
    return (
        <Router>
            <DemoNavbar />
            <Routes>
                <Route path="/home" element={<div>Home Page</div>} />
                <Route path="/about" element={<div>About Page</div>} />
                <Route path="/contact" element={<div>Contact Page</div>} />
            </Routes>
        </Router>
    );
};

export default DemoRoutingWithNavlink;
