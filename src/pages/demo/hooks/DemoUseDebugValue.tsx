import React, { useState, useDebugValue, useEffect } from 'react';

// Custom Hook
function useCounter() {
    const [count, setCount] = useState(0);

    // Use useDebugValue to label the count state for React DevTools
    useDebugValue(count > 5 ? "High" : "Low");

    const increment = () => setCount((prev) => prev + 1);
    const decrement = () => setCount((prev) => prev - 1);

    return { count, increment, decrement };
}

// Demo Component using the custom hook
const CounterComponent: React.FC = () => {
    const { count, increment, decrement } = useCounter();

    useEffect(() => {
        console.log("Counter value:", count);
    }, [count]);

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

const DemoUseDebugValue = () => {
    return (
        <>
            <CounterComponent />
        </>
    );
}

export default DemoUseDebugValue;
