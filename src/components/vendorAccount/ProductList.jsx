import React from 'react';

const ProductList = ({ products, onDelete, onUpdate }) => {
    return (
        <div className="product-list">
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.category}</td>
                            <td>${product.price}.00</td>
                            <td>
                                <button className='delete-button' onClick={() => onDelete(product.id)}>
                                    Delete
                                </button>
                                <button className='update-button' onClick={() => onUpdate(product.id, { name: 'Updated Product' })}>
                                    Update
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;
