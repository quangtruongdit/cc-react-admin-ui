import { useEffect } from "react";

type ProductProps = {
    productName: string;
    productPrice: number;
};

const DemoProductDetail = ({ productName, productPrice }: ProductProps) => {
    useEffect(() => {
        console.log(`Rendering ProductDetail for: ${productName}`);
    }, [productName, productPrice]); // Log when productName or productPrice changes

    return (
        <div>
            <h2>{productName}</h2>
            <p>Price: ${productPrice.toFixed(2)}</p>
        </div >
    );
};


type IProps = {
    message: string;
}

const DemoFunctionComponent = ({ message }: IProps) => {

    useEffect(() => {
        console.log(`Render ${DemoFunctionComponent.name}`)
    });

    return (
        <div>
            <h1>{message}</h1>
            <DemoProductDetail productName="Awesome T-Shirt" productPrice={19.99} />
        </div>
    );
};

export default DemoFunctionComponent;
