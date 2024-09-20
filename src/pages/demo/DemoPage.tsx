import DemoCSSComponent from "./components/css/DemoCSSComponent";
import DemoClassComponent from "./components/DemoClassComponent";
import DemoControlledComponent from "./components/DemoControlledComponent";
import DemoFuncAsChildComponent from "./components/DemoFuncAsChildComponent";
import DemoFuncAsPropComponent from "./components/DemoFuncAsPropComponent";
import DemoLiftingStateUpComponent from "./components/DemoLiftingStateUpComponent";
import DemoUncontrolledComponent from "./components/DemoUncontrolledComponent";
import DemoHooksDOM from "./hooks/DemoHooksDom";
import DemoRoutingWithNavlink from "./routing/DemoRoutingWithNavlink";
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
            {/* Demo css */}
            <DemoCSSComponent />
            {/* Demo routing */}
            {/* <DemoRoutingWithNavlink /> */}
            <DemoHooksDOM />
        </>
    );
}

export default DemoPage;