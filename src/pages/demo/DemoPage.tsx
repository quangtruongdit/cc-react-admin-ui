import DemoCSSComponent from "./components/css/DemoCSSComponent";
import DemoClassComponent from "./components/DemoClassComponent";
import DemoControlledComponent from "./components/DemoControlledComponent";
import DemoFuncAsChildComponent from "./components/DemoFuncAsChildComponent";
import DemoFuncAsPropComponent from "./components/DemoFuncAsPropComponent";
import DemoLiftingStateUpComponent from "./components/DemoLiftingStateUpComponent";
import DemoUncontrolledComponent from "./components/DemoUncontrolledComponent";
import DemoHooksAnimation from "./hooks/DemoHooksAnimation";
import DemoHooksAnimation2 from "./hooks/DemoHooksAnimation2";
import DemoHooksDOM from "./hooks/DemoHooksDOM";
import DemoHooksDeferredValue from "./hooks/DemoHooksUseDefer";
import DemoHooksUseId from "./hooks/DemoHooksUseId";
import DemoHooksUseSyncExternalStore from "./hooks/DemoHooksUseSyncExternalStore";
import DemoHooksNonReactWidget from "./hooks/DemoHooksWidgetFromDifferentUILibrary";
import DemoJqueryComponent from "./hooks/DemoHooksWithNonReactCode";
import DemoUseDebugValue from "./hooks/DemoUseDebugValue";
// import DemoRoutingWithNavlink from "./routing/DemoRoutingWithNavlink";
import DemoLocalStateCounter from "./state/DemoLocalState";

const DemoPage = () => {
    return (
        <>
            {/* Demo components */}
            {/* <DemoClassComponent />
            <DemoFuncAsPropComponent />
            <DemoFuncAsChildComponent />
            <DemoLiftingStateUpComponent /> */}
            {/* Demo State */}
            {/* <DemoLocalStateCounter /> */}
            {/* Controlled and uncontrolled component */}
            {/* <DemoControlledComponent /> */}
            {/* <DemoUncontrolledComponent /> */}
            {/* Demo css */}
            {/* <DemoCSSComponent /> */}
            {/* Demo routing */}
            {/* <DemoRoutingWithNavlink /> */}
            {/* <DemoHooksDOM />
            <DemoHooksAnimation />
            <DemoHooksAnimation2 />

            <DemoJqueryComponent /> */}

            {/* <DemoHooksNonReactWidget /> */}

            {/* <DemoHooksUseId />
            <DemoHooksDeferredValue /> */}

            {/* <DemoUseDebugValue /> */}

            <DemoHooksUseSyncExternalStore />
        </>
    );
}

export default DemoPage;