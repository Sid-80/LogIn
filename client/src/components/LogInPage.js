import React, { useState } from 'react';
import './LogIn.css';

const LogIn = () =>{

    const [userData,setUserData] = useState({
        email : "",
        password : ""
    });
    let name,value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUserData({...userData,[name] : value});
    }
    console.log(userData);
    return(
        <div>
            <div className='formDiv'>
                <div>
                    <h1>Sign In</h1>
                </div>
                <div>
                    <form method='post' className='form1'>
                        <div>
                            <input type='email' name='email' value={userData.email} onChange={handleInputs} placeholder='Email'></input>
                        </div>
                        <div>
                            <input type='password' name='password' value={userData.password} onChange={handleInputs} placeholder='Password'></input>
                        </div>
                        <div className='formBut'>
                            <button>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LogIn;