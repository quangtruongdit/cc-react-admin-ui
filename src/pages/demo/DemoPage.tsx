import DemoClassComponent from "./components/DemoClassComponent";
import DemoControlledComponent from "./components/DemoControlledComponent";
import DemoFuncAsChildComponent from "./components/DemoFuncAsChildComponent";
import DemoFuncAsPropComponent from "./components/DemoFuncAsPropComponent";
import DemoLiftingStateUpComponent from "./components/DemoLiftingStateUpComponent";
import DemoUncontrolledComponent from "./components/DemoUncontrolledComponent";
import DemoLocalStateCounter from "./state/DemoLocalState";

const DemoPage = () => {
    return (
        <>
            {/* Demo components */}
            <DemoClassComponent />
            <DemoFuncAsPropComponent />
            <DemoFuncAsChildComponent />
            <DemoLiftingStateUpComponent />
            {/* Demo State */}
            <DemoLocalStateCounter />
            {/* Controlled and uncontrolled component */}
            <DemoControlledComponent />
            <DemoUncontrolledComponent />
        </>
    );
}

export default DemoPage;