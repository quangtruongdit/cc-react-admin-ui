import React, { useState, useEffect, useRef } from 'react';

const DemoHooksDOM: React.FC = () => {
    // State to store the input value
    const [inputValue, setInputValue] = useState('');

    // State to store the window width
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // useRef to access the input DOM element directly
    const inputRef = useRef<HTMLInputElement>(null);

    // Automatically focus on the input field when the component mounts
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    // Function to handle window resize
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    // Add event listener for window resize
    useEffect(() => {
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Handle input value change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <h1>React Hooks with Input Focus, DOM Manipulation, and Window Resize</h1>

            {/* Input field with dynamic background color based on user input */}
            <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                style={{
                    padding: '10px',
                    fontSize: '16px',
                    backgroundColor: inputValue ? 'lightgreen' : 'white', // Highlight when user types
                }}
                placeholder="Type here"
            />
            <input

                type="text"
                value={inputValue}
                onChange={handleInputChange}
                style={{
                    padding: '10px',
                    fontSize: '16px',
                    backgroundColor: inputValue ? 'lightgreen' : 'white', // Highlight when user types
                }}
                placeholder="Type here"
            />
            <p>Current input value: {inputValue}</p>

            {/* Display current window width */}
            <p>Current window width: {windowWidth}px</p>

            {/* Conditionally render text based on window width */}
            {windowWidth < 768 ? (
                <p>The viewport is small (less than 768px).</p>
            ) : (
                <p>The viewport is wide (768px or more).</p>
            )}
        </div>
    );
};

export default DemoHooksDOM;
