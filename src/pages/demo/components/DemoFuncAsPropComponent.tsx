import React from 'react';

const InjectedComponent: React.FC = () => {
    return <p>This is the injected component!</p>;
};

const DemoFuncAsPropComponent: React.FC = () => {
    return (
        <div>
            <Container render={() => <InjectedComponent />} />
        </div>
    );
};

interface ContainerProps {
    render: () => React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ render }) => {
    return (
        <div>
            <h1>Container Component</h1>
            <div>{render()}</div>
        </div>
    );
};

export default DemoFuncAsPropComponent;