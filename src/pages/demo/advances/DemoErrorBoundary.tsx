import { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({ error, errorInfo });
        // You can log error information to an error reporting service here
        console.error("Error caught by ErrorBoundary:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    {/* Uncomment lines below to see error message */}
                    {/* {this.state.error && <p>{this.state.error.toString()}</p>}
                    {this.state.errorInfo && <pre>{this.state.errorInfo.componentStack}</pre>} */}
                </div>
            );
        }
        return this.props.children;
    }
}

// A component that throws an error
const BuggyComponent = () => {
    throw new Error("I crashed!");
    return <div>This will not render</div>;
};

const DemoErrorBoundaryComponent = () => {
    return (
        <div>
            <h1>Error Boundary Demo</h1>
            <ErrorBoundary>
                <BuggyComponent />
            </ErrorBoundary>
        </div>
    );
};

export default DemoErrorBoundaryComponent;
