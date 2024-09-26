import express, { Request, Response } from 'express';
// import { matchRoutes } from 'react-router-config';
// import proxy from 'express-http-proxy';
import cors from 'cors';

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
}));

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
        res.json({ status: 200, message: 'Login Success!' });
    }, 2000); // Delay of 2000 milliseconds (2 seconds)
});

app.post('/api/auth/verify', (_req: Request, res: Response) => {
    // Respond with the orders array in JSON format
    setTimeout(() => {
        res.json({ status: 200, message: 'Verify Success!' });
    }, 2000); // Delay of 2000 milliseconds (2 seconds)
});

// Start the server
app.listen(3000, () => {
    console.log('Listening on port 3000');
});
