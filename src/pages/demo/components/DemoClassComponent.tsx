import { Component, ErrorInfo } from 'react';
import DemoFunctionComponent from './DemoFunctionComponent'; // Import the functional component

class DemoClassComponent extends Component {
    shouldComponentUpdate(_nextProps: Readonly<{}>, _nextState: Readonly<{}>, _nextContext: any): boolean {
        return true
    }

    componentDidMount(): void {
        console.log(`componentDidMount ${DemoClassComponent.name}`)
    }

    componentDidUpdate(_: Readonly<{}>, _prevState: Readonly<{}>, _snapshot?: any): void {
        console.log(`componentDidUpdate ${DemoClassComponent.name}`)
    }

    componentWillUnmount(): void {
        console.log(`componentWillUnmount ${DemoClassComponent.name}`)
    }

    componentDidCatch(error: Error, _errorInfo: ErrorInfo): void {
        console.log(`componentDidCatch ${error.message}`)
    }

    render() {
        return (
            <div className="class-component">
                <h1>This is a Class Component</h1>
                <DemoFunctionComponent message={'Hello from the functional component!'}></DemoFunctionComponent>
            </div>
        );
    }
}

export default DemoClassComponent;
