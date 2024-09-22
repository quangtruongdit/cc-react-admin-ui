import React, { Profiler } from 'react';

// Updated onRender callback with correct number of arguments
const onRenderCallback = (
    id: string, // Profiler ID
    phase: "mount" | "update" | "nested-update", // Mount or update phase
    actualDuration: number, // Time spent rendering the committed update
    baseDuration: number, // Time spent rendering the component without memoization
    startTime: number, // When React began rendering this update
    commitTime: number, // When React committed the update to the DOM
) => {
    console.log({
        id,
        phase,
        actualDuration,
        baseDuration,
        startTime,
        commitTime,
    });

    console.log(`${id} ${phase} took ${actualDuration} ms`);
};

interface IProps {
    children: React.ReactNode
}
const DemoProfiler: React.FC<IProps> = ({ children }) => {
    return (
        <Profiler id="ExampleComponent" onRender={onRenderCallback}>
            {children}
        </Profiler>
    );
};

export default DemoProfiler;
