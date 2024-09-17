import { useRef, FormEvent } from 'react';

function DemoUncontrolledComponent() {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (inputRef.current) {
            console.log('Input value:', inputRef.current.value);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default DemoUncontrolledComponent;
