import DempCSSProductCard from './DemoCSSProductCardComponent';

function DemoCSSComponent() {
    const handleAddToCart = () => {
        alert('Product added to cart!');
    };

    return (
        <div className="App">
            <h1>Product Store</h1>
            <DempCSSProductCard
                image="https://via.placeholder.com/300"
                title="CSS Product"
                description="This is a sample product description."
                price={29.99}
                onAddToCart={handleAddToCart}
            />
            <DempCSSProductCard
                image="https://via.placeholder.com/300"
                title="SCSS Product"
                description="This is a sample product description."
                price={29.99}
                onAddToCart={handleAddToCart}
            />
        </div>
    );
}

export default DemoCSSComponent;
