import React, { useState } from 'react';
import axios from 'axios';

function Navbar() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // it will submit the code 
    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            username,
            password,
            email
        };

        try {
            const response = await axios.post('http://localhost:3001/register', user);
            setMessage(response.data);
        } catch (error) {
            if (error.response && error.response.data) {
                setMessage(error.response.data); // Error message from server
            } else {
                setMessage('Error registering user');
            }
        }
    }

    return (
        <div className='mainlogin'>
            <div className='LoginPage'>
                <input
                    type="text"
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} // Fixed the state update here
                    required
                />
            </div>

            <div className='LoginPage2'>
                <input
                    type="password"
                    value={password}
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

            <div className='LoginPage3'>
                <input
                    type="email"
                    value={email}
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            <div className='LoginPage4'>
                <input placeholder='Cell/no' />
            </div>

            <div className='MAJAL'>
                {/* Changed to onClick instead of onSubmit */}
                <button onClick={handleSubmit}>Submit</button>
            </div>

            {message && <p>{message}</p>} {/* Display success or error message */}
        </div>
    );
}

export default Navbar;
