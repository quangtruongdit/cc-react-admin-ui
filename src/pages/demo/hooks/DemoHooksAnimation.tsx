import React, { useState, useEffect } from 'react';
import './DemoHooksAnimation.css'; // We will use this for CSS animations

const DemoHooksAnimation: React.FC = () => {
    // State to manage the animation trigger
    const [isAnimating, setIsAnimating] = useState(false);

    // useEffect to reset the animation when it finishes
    useEffect(() => {
        if (isAnimating) {
            // Set a timer to turn off animation after it's done (1 second here)
            const timer = setTimeout(() => {
                setIsAnimating(false);
            }, 1000); // Match the duration of the CSS animation

            // Cleanup the timer
            return () => clearTimeout(timer);
        }
    }, [isAnimating]);

    // Trigger the animation when the button is clicked
    const startAnimation = () => {
        setIsAnimating(true);
    };

    return (
        <div>
            <h1>React Hooks with Animations</h1>

            {/* Button to start the animation */}
            <button onClick={startAnimation}>Animate Box</button>

            {/* Box that will animate */}
            <div className={`box ${isAnimating ? 'animate' : ''}`}></div>
        </div>
    );
};

export default DemoHooksAnimation;
