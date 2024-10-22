// ProductCard.tsx
import React from 'react';
// import './DemoCSSProductCard.css';
import './demoSCSSProductCard.scss'

interface DemoProductCardProps {
    image: string;
    title: string;
    description: string;
    price: number;
    onAddToCart: () => void;
}

const DempCSSProductCard: React.FC<DemoProductCardProps> = ({ image, title, description, price, onAddToCart }) => {
    return (
        <div className="product-card">
            <img src={image} alt={title} className="product-image" />
            <h2 className="product-title">{title}</h2>
            <p className="product-description">{description}</p>
            <p className="product-price">${price.toFixed(2)}</p>
            <button className="add-to-cart" onClick={onAddToCart}>
                Add to Cart
            </button>
        </div>
    );
};

export default DempCSSProductCard;


