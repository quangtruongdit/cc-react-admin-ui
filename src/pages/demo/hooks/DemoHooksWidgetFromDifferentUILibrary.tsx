import React, { useEffect, useRef, useState } from 'react';

const DemoHooksNonReactWidget: React.FC = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        // Prevent multiple initializations during double render in Strict Mode
        if (!initialized && containerRef.current) {
            SomeWidgetLibrary.initialize(containerRef.current);
            setInitialized(true); // Set the flag to true
        }

        return () => {
            if (initialized) {
                SomeWidgetLibrary.destroy();
                setInitialized(false); // Reset the flag when component unmounts
            }
        };
    }, [initialized]);

    return <div ref={containerRef}></div>;
};


class SomeWidgetLibrary {
    private static widgetElement: HTMLElement | null = null;
    private static isInitialized: boolean = false; // Add flag

    static initialize(container: HTMLElement) {
        if (this.isInitialized) return; // Prevent re-initialization
        this.isInitialized = true; // Mark as initialized

        // Create a simple widget
        this.widgetElement = document.createElement('div');
        this.widgetElement.textContent = 'This is a NON React Widget!';
        this.widgetElement.style.border = '1px solid #000';
        this.widgetElement.style.padding = '10px';
        this.widgetElement.style.backgroundColor = '#000000';
        this.widgetElement.style.transition = 'opacity 0.5s';
        this.widgetElement.style.opacity = '0';

        container.appendChild(this.widgetElement);

        // Fade in the widget
        setTimeout(() => {
            if (this.widgetElement) {
                this.widgetElement.style.opacity = '1';
            }
        }, 10);
    }

    static destroy() {
        if (!this.isInitialized) return; // Only destroy if initialized
        this.isInitialized = false; // Mark as uninitialized

        if (this.widgetElement) {
            this.widgetElement.style.opacity = '0';

            setTimeout(() => {
                if (this.widgetElement && this.widgetElement.parentNode) {
                    this.widgetElement.parentNode.removeChild(this.widgetElement);
                }
                this.widgetElement = null;
            }, 500);
        }
    }
}

export default DemoHooksNonReactWidget;