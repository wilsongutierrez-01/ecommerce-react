import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginClick = () => {
        // Aquí puedes realizar la validación del usuario y la lógica de inicio de sesión
        // y luego llamar a la función onLogin con los datos necesarios
        onLogin(username, password);
    };

    return (
        <section className='user background'>
            <div className='user-content'>
                <h2>Welcome!</h2>

                <label>User Name:</label>
                <input
                    type="text"
                    placeholder='User name'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <label>Password:</label>
                <input
                    type="password"
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <div>
                    <Link to="/">
                        <button onClick={handleLoginClick}>Sign in</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Login;




