import React from 'react'
import { useState } from 'react';

const ProductForm = ({ onSubmit, categories }) => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(product);
        // Limpiar el formulario después de enviar
        setProduct({
            name: '',
            description: '',
            price: '',
            category: '',
        });
    }
    return (
        <form className="product-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Product Name:</label>
            <input type="text" id="name" name="name" value={product.name} onChange={handleChange} />

            <label htmlFor="description">Description:</label>
            <textarea
                id="description"
                name="description"
                value={product.description}
                onChange={handleChange}
            ></textarea>

            <label htmlFor="category">Category:</label>
            <select id="category" name="category" value={product.category} onChange={handleChange}>
                <option value="">Select a category</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.name}>
                        {category.name}
                    </option>
                ))}
            </select>

            <label htmlFor="name">Price:</label>
            <input type="number" id="price" name="price" value={product.price} onChange={handleChange} />

            <button type="submit">Add Product</button>
        </form>
    )
}

export default ProductForm
