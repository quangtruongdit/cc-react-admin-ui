// InputComponent.tsx
import React, { useState } from 'react';

interface InputComponentProps {
    value: string;
    onChange: (newValue: string) => void;
}

const InputComponent: React.FC<InputComponentProps> = ({ value, onChange }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <div>
            <input type="text" value={value} onChange={handleChange} placeholder="Type something..." />
        </div>
    );
};

// DisplayComponent.tsx
interface DisplayComponentProps {
    value: string;
}

const DisplayComponent: React.FC<DisplayComponentProps> = ({ value }) => {
    return (
        <div>
            <p>Typed Text: {value}</p>
        </div>
    );
};

// ParentComponent.tsx
const ParentComponent: React.FC = () => {
    // State lifted up to the parent component
    const [inputValue, setInputValue] = useState<string>('');

    return (
        <div>
            <h1>Lifting State Up Example</h1>
            <InputComponent value={inputValue} onChange={setInputValue} />
            <DisplayComponent value={inputValue} />
        </div>
    );
};

// DemoLiftingStateUpComponent.tsx
const App: React.FC = () => {
    return (
        <div>
            <ParentComponent />
        </div>
    );
};

export default App;