import React, { useState, useEffect, useRef } from 'react';
import './DemoHooksAnimation2.css'; // For CSS animations

const DempHooksAnimation2: React.FC = () => {
    const [size, setSize] = useState(100); // Initial size of the box
    const [targetSize, setTargetSize] = useState(size); // Target size for the animation
    const [isAnimating, setIsAnimating] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    // Effect to handle animation reset
    useEffect(() => {
        if (isAnimating) {
            const timer = setTimeout(() => {
                setIsAnimating(false);
            }, 500); // Match this with the animation duration

            return () => clearTimeout(timer);
        }
    }, [isAnimating]);

    // Handle size change
    const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSize = parseInt(e.target.value, 10);
        if (!isNaN(newSize) && newSize > 0) {
            setTargetSize(newSize);
        }
    };

    // Start animation
    const startAnimation = () => {
        setSize(targetSize);
        setIsAnimating(true);
    };

    return (
        <div>
            <h1>Interactive Resizable Animated Box</h1>
            <input
                type="number"
                value={targetSize}
                onChange={handleSizeChange}
                ref={inputRef}
                placeholder="Enter size in pixels"
                min="1"
            />
            <button onClick={startAnimation}>Animate Box</button>

            {/* Animated Box */}
            <div
                className={`box ${isAnimating ? 'animate' : ''}`}
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                }}
            ></div>
        </div>
    );
};

export default DempHooksAnimation2;
