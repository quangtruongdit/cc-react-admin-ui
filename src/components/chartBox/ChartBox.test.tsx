// ChartBox.test.tsx
import { render, screen } from '@testing-library/react';
import ChartBox from './ChartBox'; // Adjust the import based on your file structure
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import '@testing-library/jest-dom';

// Sample data for the test
const mockChartData = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
];

describe('ChartBox Component', () => {
    const defaultProps = {
        color: 'blue',
        icon: 'path/to/icon.png',
        title: 'Revenue',
        dataKey: 'pv',
        number: 12345,
        percentage: 20,
        chartData: mockChartData,
    };

    test('renders the ChartBox with correct title and number', () => {
        render(
            <MemoryRouter>
                <ChartBox {...defaultProps} />
            </MemoryRouter>
        );

        // Check if the title is rendered
        expect(screen.getByText('Revenue')).toBeInTheDocument();

        // Check if the number is rendered
        expect(screen.getByText('12345')).toBeInTheDocument();
    });

    test('renders the link with correct color and text', () => {
        render(
            <MemoryRouter>
                <ChartBox {...defaultProps} />
            </MemoryRouter>
        );

        // Check if the link is rendered
        const linkElement = screen.getByRole('link', { name: /view all/i });
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveStyle({ color: 'blue' });
    });

    test('displays the correct percentage and style', () => {
        render(
            <MemoryRouter>
                <ChartBox {...defaultProps} />
            </MemoryRouter>
        );

        // Check if the percentage is rendered
        expect(screen.getByText('20%')).toBeInTheDocument();
        expect(screen.getByText('20%')).toHaveStyle({ color: 'limegreen' }); // since percentage > 0
    });

    test('renders chart data', () => {
        const { container } = render(
            <MemoryRouter>
                <ChartBox {...defaultProps} />
            </MemoryRouter>
        );

        // Ensure that the chart is rendered
        const chartContainer = container.querySelector('.chart');
        expect(chartContainer).toBeInTheDocument();
    });
});
