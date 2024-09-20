import React, { useId, useState } from 'react';

const ProductTooltip: React.FC<{ productName: string; productInfo: string }> = ({
    productName,
    productInfo,
}) => {
    const [isVisible, setIsVisible] = useState(false); // State to control tooltip visibility
    const tooltipId = useId(); // Unique ID for accessibility

    // Show tooltip on hover
    const showTooltip = () => setIsVisible(true);

    // Hide tooltip when the mouse leaves
    const hideTooltip = () => setIsVisible(false);

    return (
        <div style={{ marginBottom: '20px', position: 'relative', display: 'inline-block' }}>
            <button
                aria-describedby={isVisible ? tooltipId : undefined} // aria-describedby only when visible
                onMouseEnter={showTooltip} // Show on hover
                onMouseLeave={hideTooltip} // Hide when leaving
                style={{ cursor: 'pointer', padding: '10px', fontSize: '16px' }}
            >
                {productName}
            </button>
            {isVisible && (
                <div
                    role="tooltip"
                    id={tooltipId} // Tooltip element with the unique ID
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        border: '1px solid black',
                        backgroundColor: 'lightyellow',
                        color: 'black',
                        padding: '8px',
                        marginTop: '5px',
                        zIndex: 1,
                        maxWidth: '250px',
                    }}
                >
                    {productInfo}
                </div>
            )}
        </div>
    );
};

const DemoHooksUseId: React.FC = () => {
    const products = [
        { name: 'Smartphone X Pro', info: 'A high-end smartphone with advanced features.' },
        { name: 'Ultra HD 4K TV', info: 'Experience stunning visuals with this 4K Ultra HD TV.' },
        { name: 'Wireless Noise-Canceling Headphones', info: 'Noise-canceling headphones for immersive audio experience.' },
        { name: 'Gaming Laptop GX900', info: 'A powerful gaming laptop with the latest GPU.' },
    ];

    return (
        <div>
            <h1>Product List with Tooltips</h1>
            {products.map((product) => (
                <ProductTooltip key={product.name} productName={product.name} productInfo={product.info} />
            ))}
        </div>
    );
};

export default DemoHooksUseId;
