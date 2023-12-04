import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import "./style.css"

const Register = ({ onRegister, onLogin }) => {
    //creamos los arrays para almecenar los usuarios
    const [username, setUsername] = useState("");
    const [userlastname, setUserlastname] = useState("")
    const [userdirection, setUserdirection] = useState("")
    const [usercel, setUsercel] = useState("")
    const [userdui, setUserdui] = useState("")
    const [usermail, setUsermail] = useState("")
    const [userpswd, setUserpswd] = useState("")
    const [role, setRole] = useState("CLIENT");

    const handleRegister = () => {
        const newUser = { username, userlastname, userdirection, usercel, userdui, usermail, userpswd, role };
        onRegister(newUser);
    };

    return (
        <section className='user background'>
            <div className='user-content'>
                <h2>User Register</h2>

                <label>Name:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <label>Last Name:</label>
                <input
                    type="text"
                    value={userlastname}
                    onChange={(e) => setUserlastname(e.target.value)}
                />

                <label>Direction:</label>
                <input
                    type="text"
                    value={userdirection}
                    onChange={(e) => setUserdirection(e.target.value)}
                />

                <label>Cel:</label>
                <input
                    type="text"
                    value={usercel}
                    onChange={(e) => setUsercel(e.target.value)}
                />

                <label>Dui:</label>
                <input
                    type="text"
                    value={userdui}
                    onChange={(e) => setUserdui(e.target.value)}
                />

                <label>Mail</label>
                <input
                    type="mail"
                    value={usermail}
                    onChange={(e) => setUsermail(e.target.value)}
                />

                <label>Password</label>
                <input
                    type="password"
                    value={userpswd}
                    onChange={(e) => setUserpswd(e.target.value)}
                />


                <label>Rol:</label>
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="CLIENT">Cliente</option>
                    <option value="ADMIN">Administrador</option>
                </select>
                <div>
                    <Link to="/">
                        <button onClick={handleRegister}>Registrar</button>
                    </Link>
                </div>
            </div>

        </section>

    )
}

export default Register
