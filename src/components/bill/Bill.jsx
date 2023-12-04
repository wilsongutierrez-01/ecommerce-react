import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Bill = ({ users, cartItem, clearCart, authenticatedUser }) => {
    const {
        username,
        userlastname,
        userdirection,
        usercel,
        userdui,
        usermail,
    } = authenticatedUser || {};
    const totalPrice = cartItem.reduce((price, item) => price + item.qty * item.price, 0)

    return (
        <>
            <div className="invoice">
                <div className="customer-info">
                    <div>
                        <h1>Purchase Details</h1>
                        <div className="element">
                            <span>Name:</span>
                            <p>{username} {userlastname}</p>
                        </div>
                        <div className="element">
                            <span>Direction:</span>
                            <p>{userdirection}</p>
                        </div>
                        <div className="element">
                            <span>Cel:</span>
                            <p>{usercel}</p>
                        </div>
                        <div className="element">
                            <span>Dui:</span>
                            <p>{userdui}</p>
                        </div>
                        <div className="element">
                            <span>Mail:</span>
                            <p>{usermail}</p>
                        </div>
                    </div>
                    <table>
                        <tr>
                            <th>Cantidad</th>
                            <th>Item</th>
                            <th>Total</th>
                        </tr>
                        {
                            cartItem.map((val, index) => {
                                const prodcutQty = val.price * val.qty
                                return (
                                    <tr key={index}>
                                        <td>{val.qty}</td>
                                        <td>{val.name}</td>
                                        <td>${prodcutQty}.00</td>

                                    </tr>
                                )
                            })
                        }
                        <tr>
                            <td>Total</td>
                            <td></td>
                            <td>${totalPrice}.00</td>
                        </tr>
                    </table>

                </div>
                <Link to="/">
                    <button onClick={() => clearCart()}>Done</button>
                </Link>
            </div>
        </>
    )
}

export default Bill
