import { useEffect } from "react";

type IProps = {
    message: string;
}

const DemoFunctionComponent = ({ message }: IProps) => {

    useEffect(() => {
        console.log(`Render ${DemoFunctionComponent.name}`)
    });

    return (
        <div>
            <p>{message}</p>
        </div>
    );
};

export default DemoFunctionComponent;