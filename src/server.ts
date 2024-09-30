import express, { Request, Response } from 'express';
// import { matchRoutes } from 'react-router-config';
// import proxy from 'express-http-proxy';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { orders } from './data';

const app = express();

// Proxy to handle API requests
// app.use(
//     '/api',
//     proxy('http://localhost:8000', {
//         proxyReqOptDecorator(opts) {
//             opts.headers = opts.headers || {}; // Ensure headers exist
//             opts.headers['x-forwarded-host'] = 'http://localhost:3000';
//             return opts;
//         }
//     })
// );

app.use(cors({
    origin: 'http://localhost:8000',
    credentials: true, // Allow cookies to be sent
}));

app.use(cookieParser());
app.use(express.json());

// Serve static files
// app.use(express.static('public'));

app.get('/api/orders', (_req: Request, res: Response) => {
    // Respond with the orders array in JSON format
    setTimeout(() => {
        res.json(orders);
    }, 2000); // Delay of 2000 milliseconds (2 seconds)
});

app.post('/api/auth/login', (_req: Request, res: Response) => {
    // Respond with the orders array in JSON format
    setTimeout(() => {
        const token = 'a-valid-token'; // Replace with actual JWT logic or session ID

        // Set cookie with options
        res.cookie('token', token, {
            httpOnly: true, // Prevent client-side access to the cookie
            secure: process.env.NODE_ENV === 'production', // Use HTTPS in production
            sameSite: 'strict', // Helps prevent CSRF attacks
            maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
        });

        res.json({ status: 200, message: 'Login Success!' });
    }, 2000); // Delay of 2000 milliseconds (2 seconds)
});

app.post('/api/auth/verify', (_req: Request, res: Response) => {
    // Respond with the orders array in JSON format
    setTimeout(() => {
        res.json({ status: 200, message: 'Verify Success!' });
    }, 2000); // Delay of 2000 milliseconds (2 seconds)
});

// const users = [
//     { id: 1, username: 'user1', password: 'password1' }
// ];

app.get('/api/check-auth', (_req: Request, res: Response) => {
    const { token } = _req.cookies;

    if (token && token === 'a-valid-token') {
        res.json({ status: 200, message: 'Authenticated' });
    } else {
        res.json({ status: 401, message: 'UnAuthenticated' });
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Listening on port 3000');
});
