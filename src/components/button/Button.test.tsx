import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

test('renders the button with the correct label', () => {
    render(<Button label="Click Me" onClick={() => { }} />);
    const button = screen.getByText('Click Me');
    expect(button).toBeTruthy();
});

test('calls the onClick function when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" onClick={handleClick} />);

    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
});
