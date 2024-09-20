import { useSyncExternalStore } from 'react';

// Custom hook to track online/offline status
function useOnlineStatus() {
    // Subscribe to the browser's online/offline events
    const subscribe = (callback: () => void) => {
        window.addEventListener('online', callback);
        window.addEventListener('offline', callback);
        return () => {
            window.removeEventListener('online', callback);
            window.removeEventListener('offline', callback);
        };
    };

    // Function to get the current status (online or offline)
    const getSnapshot = () => navigator.onLine;

    // For server-side rendering, assume online by default
    const getServerSnapshot = () => true;

    // Using the useSyncExternalStore hook
    return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

// Demo component to show current network status
const OnlineStatusDisplay = () => {
    const isOnline = useOnlineStatus();

    return (
        <div>
            <h1>Status: {isOnline ? 'Online' : 'Offline'}</h1>
            <p>{isOnline ? 'You are connected to the internet.' : 'You are currently offline.'}</p>
        </div>
    );
};

const DemoHooksUseSyncExternalStore = () => {
    return (
        <>
            <OnlineStatusDisplay />
        </>
    );
}

export default DemoHooksUseSyncExternalStore;
