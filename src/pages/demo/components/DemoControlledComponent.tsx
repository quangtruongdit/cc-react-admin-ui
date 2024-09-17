import { useState, ChangeEvent } from 'react';

const DemoControlledComponent = () => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <>
            <div>
                <input onChange={handleChange} value={inputValue} type="text" />
                <p>Input value: {inputValue}</p>
            </div>
        </>
    );
}

export default DemoControlledComponent;
