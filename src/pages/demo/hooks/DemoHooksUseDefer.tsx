import { useState, useDeferredValue, useMemo } from 'react';

const ExpensiveList = ({ searchTerm }: { searchTerm: string }) => {
    // Simulate a list of 10,000 items
    const items = useMemo(() => {
        const result = [];
        for (let i = 0; i < 10000; i++) {
            result.push(`Item ${i + 1}`);
        }
        return result;
    }, []);

    // Filter items based on the search term
    const filteredItems = items.filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <ul>
            {filteredItems.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
};

const DemoHooksDeferredValue = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const deferredSearchTerm = useDeferredValue(searchTerm);

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for an item"
            />
            <p>Searching for: {deferredSearchTerm}</p>
            {/* GOOD */}
            <ExpensiveList searchTerm={deferredSearchTerm} />
            {/* BAD - This code cause issuse */}
            {/* <ExpensiveList searchTerm={searchTerm} />  */}
        </div>
    );
};

export default DemoHooksDeferredValue;
