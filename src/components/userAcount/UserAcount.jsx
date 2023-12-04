import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


const UserAcount = ({ authenticatedUser, onLogout }) => {
    const {
        username,
        userlastname,
        usermail,
    } = authenticatedUser || {};
    const handleLogoutClick = () => {
        // Llama a la función onLogout pasada como prop
        if (onLogout) {
            onLogout();
        }
    };
    return (
        <>
            <section className='user background'>
                <div className='user-content'>
                    <h2>User Account</h2>

                    <label>Name:</label>
                    <input
                        type="text"
                        value={username}
                    />

                    <label>Last Name:</label>
                    <input
                        type="text"
                        value={userlastname}
                    />

                    <label>Mail</label>
                    <input
                        type="mail"
                        value={usermail}
                    />
                    <div>
                        <Link to="/">
                            <button onClick={handleLogoutClick}>Log out</button>
                        </Link>
                    </div>
                </div>

            </section>
        </>
    )
}

export default UserAcount
