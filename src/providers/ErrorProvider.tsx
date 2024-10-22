import { createContext, useContext, ReactNode, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearError } from '../redux/slices/errorSlice';
import { RootState } from '../redux/store/reducer';

// Define the type for the error context state
type ErrorContextType = {
    error: string | null;
    setError: (error: string | null) => void;
};

// Create context with default values
const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

// Custom hook to use the error context
export const useError = () => {
    const context = useContext(ErrorContext);
    if (!context) {
        throw new Error('useError must be used within an ErrorProvider');
    }
    return context;
};

// Provider component to wrap the app
export const ErrorProvider = ({ children }: { children: ReactNode }) => {
    const error = useSelector((state: RootState) => state.error.message); // Access the error message from Redux

    const dispatch = useDispatch();

    // const handleCloseError = () => {
    //     dispatch(clearError()); // Clear error when the user closes the message
    // };

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        if (error) {
            // Automatically clear the error after 3 seconds
            timeoutId = setTimeout(() => {
                dispatch(clearError());
            }, 3000); // 3000 milliseconds = 3 seconds
        }

        // Clean up the timeout if the component unmounts or if there's a new error
        return () => {
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [error, dispatch]);

    return (
        <>
            {children}
            {error && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        backgroundColor: 'red',
                        color: 'white',
                        textAlign: 'center',
                        padding: '10px',
                        zIndex: 1000,
                    }}
                >
                    <p>{error}</p>
                    {/* <button onClick={handleCloseError}>Close</button> */}
                </div>
            )}
        </>
    );
};
