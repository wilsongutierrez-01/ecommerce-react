import React from 'react'

const UserInfo = ({users}) => {
    return (
        <>
            {users.map((value, index) => {
                return (
                    <section className='user background' key={index}>
                        <div className='user-content'>
                            <h2>User Account</h2>

                            <label>Name:</label>
                            <input
                                type="text"
                                value={value.username}
                            />

                            <label>Last Name:</label>
                            <input
                                type="text"
                                value={value.userlastname}
                            />

                            <label>Mail</label>
                            <input
                                type="mail"
                                value={value.usermail}
                            />

                            <label>Rol:</label>
                            <input
                                type="mail"
                                value={value.role}
                            />
                            <div>
                                {/* <button onClick={handleRegister}>Registrar</button> */}
                            </div>
                        </div>

                    </section>
                )
            })}

        </>
    )
}

export default UserInfo
