import SignUp from './SignUp';
import Login from './Login';
import './SignUp.css'
import React, { useState } from 'react';

function View() {
    const [token, setToken] = useState('')
    const [page, setPage] = useState('signup')
    const [role, setRole] = useState('')

    const setValues = function (token,role,page){
        setToken(token);
        setRole(role);
        setPage(page)
    }

    if (token === '') {
        if (page==='login') {
            return (
                <div>
                    <Login setValues={setValues}/>
                </div>
            );
        }
        return (
            <div>
                <SignUp setValues={setValues}/>
            </div>
        );
    }
    if(role==='teacher'){
        return (
            <div>
                <p>{token}</p>
                <p>{role}</p>
            </div>
        );
    }
    if(role==='parent'){
        return (
            <div>
                <p>{token}</p>
                <p>{role}</p>
            </div>
        );
    }
    if(role==='student'){
        return (
            <div >
                <p>{token}</p>
                <p>{role}</p>
            </div>
        );
    }
}

export default View;