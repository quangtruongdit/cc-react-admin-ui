import DemoClassComponent from "./components/DemoClassComponent";
import DemoFuncAsChildComponent from "./components/DemoFuncAsChildComponent";
import DemoFuncAsPropComponent from "./components/DemoFuncAsPropComponent";
import DemoLiftingStateUpComponent from "./components/DemoLiftingStateUpComponent";
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
        </>
    );
}

export default DemoPage;