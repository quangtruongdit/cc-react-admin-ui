// CustomComponent.tsx
import React from 'react';

interface CustomComponentProps {
    children: (name: string) => React.ReactNode;
}

const CustomComponent: React.FC<CustomComponentProps> = ({ children }) => {
    const name = 'Function as Child';
    return <div>{children(name)}</div>;
};

const DemoFuncAsChildComponent: React.FC = () => {
    return (
        <CustomComponent>
            {(name) => (
                <div>
                    <h1>{name}</h1>
                    <p>This is a demo of function as a child.</p>
                </div>
            )}
        </CustomComponent>
    );
};

export default DemoFuncAsChildComponent;