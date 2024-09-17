import { useState } from 'react';

const DemoLocalStateCounter = () => {
    // Declare a state variable named 'count' with an initial value of 0
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            {/* Button to increment the count */}
            <button onClick={() => setCount(count + 1)}>Increment</button>
            {/* Button to decrement the count */}
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
};

export default DemoLocalStateCounter;
