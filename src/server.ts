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
    res.json(orders);
});

// Start the server
app.listen(3000, () => {
    console.log('Listening on port 3000');
});
