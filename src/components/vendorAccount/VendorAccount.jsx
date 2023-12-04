import React from 'react'
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import { useState } from 'react';
import "./style.css"

const VendorAccount = () => {
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);

    const categories = [
        { id: 1, name: 'Electronics' },
        { id: 2, name: 'Clothing' },
    ]

    const addProduct = (newProduct) => {
        if (editingProduct) {
            setProducts((prevProducts) =>
                prevProducts.map((product) =>
                    product.id === editingProduct.id ? { ...editingProduct, ...newProduct } : product
                )
            );
            setEditingProduct(null);
        } else {
            setProducts((prevProducts) => [...prevProducts, { id: Date.now(), ...newProduct }]);
        }
    };

    const deleteProduct = (productId) => {
        setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
    };

    const editProduct = (product) => {
        setEditingProduct(product);
    };


    return (
        <>
            <div className="vendor-account">
                <h1>Vendor Account</h1>
                <ProductForm onSubmit={addProduct} categories={categories} />
                {products.length > 0 && <ProductList products={products} onDelete={deleteProduct} onUpdate={editProduct} />}
            </div>
        </>
    )
}

export default VendorAccount
