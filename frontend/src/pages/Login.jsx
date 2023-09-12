import {useState} from 'react'
import Form from '../comps/Login/Form'
import API from '../api/login_api'

const Login = ({onLog}) => {

    const handle = async cred => {
        const asd = await API.GetLogin(cred)
        window.localStorage.setItem('User', asd.name)
        onLog()
    }
    
    return(
        <>
            <h1>Log In</h1>
            <Form
                onSubmit={handle}
            />
        </>
    )
}

export default Login