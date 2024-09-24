import '@testing-library/jest-dom';

// Mock for ResizeObserver
class ResizeObserver {
    constructor() { }  // No parameters needed

    observe() { }

    unobserve() { }

    disconnect() { }
}

// Make ResizeObserver available globally
global.ResizeObserver = ResizeObserver;

