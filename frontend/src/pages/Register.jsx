import {useState} from 'react'
import Form from '../comps/Register/Form'
import API from '../api/login_api'

const Register = ({onLog}) => {

    const handle = async cred => {
        const asd = await API.Register(cred)
        window.localStorage.setItem('User', asd.name)
        onLog()
    }

    return(
        <>
            <h1>Register</h1>
            <Form
                onSubmit={handle}
            />
        </>
    )
}

export default Register