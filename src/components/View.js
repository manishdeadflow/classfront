import React, { useState } from 'react';
import SignUp from './SignUp';
import Login from './Login';
import Teacher from './Teacher'
import Student from './Student'
import Parent from './Parent'

function View() {
    const [token, setToken] = useState('')
    const [page, setPage] = useState('login')
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
            <Teacher token={token}/>
        );
    }
    if(role==='parent'){
        return (
            <Parent token={token}/>
        );
    }
    if(role==='student'){
        return (
            <Student token={token}/>
        );
    }
}

export default View;