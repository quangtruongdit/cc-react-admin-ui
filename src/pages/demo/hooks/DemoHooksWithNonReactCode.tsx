import { useEffect, useRef } from 'react';
import $ from 'jquery';

const DemoJqueryComponent = () => {
    useEffect(() => {
        // jQuery to manipulate the DOM
        $('#my-element').fadeIn();

        return () => {
            $('#my-element').fadeOut(); // Cleanup on unmount
        };
    }, []);

    return (
        <>
            <div id="my-element" style={{ display: 'none' }}>Hello with jQuery!</div>
            <DropdownMenu />
        </>
    )
}


const DropdownMenu: React.FC = () => {
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const toggleDropdown = () => {
        //Use jQuery to toggle the dropdown with animation
        if (dropdownRef.current) {
            $(dropdownRef.current).slideToggle(200); // Ensure dropdownRef.current is not null
        }
    };

    return (
        <div style={{ position: 'relative' }}>
            <button onClick={toggleDropdown}>Toggle Dropdown</button>
            <div
                ref={dropdownRef}
                style={{
                    display: 'none',
                    position: 'absolute',
                    background: 'white',
                    border: '1px solid #ccc',
                    width: '200px',
                    zIndex: 1,
                }}
            >
                <ul style={{ padding: '0', margin: '0', listStyle: 'none' }}>
                    <li style={{ padding: '8px' }}>Option 1</li>
                    <li style={{ padding: '8px' }}>Option 2</li>
                    <li style={{ padding: '8px' }}>Option 3</li>
                </ul>
            </div>
        </div>
    );
};

export default DemoJqueryComponent
