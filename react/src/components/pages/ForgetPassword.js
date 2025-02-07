import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { forgetPassword } from '../../Api/userApi';

const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const forgetPasswordLink = (e) => {
        setError('')
        setSuccess('')
        e.preventDefault()
        forgetPassword(email)
            .then(data => {
                if(data.error) {
                    setError(data.error)

                } else {
                    setSuccess(data.message)

                }
            })
            .catch(err => console.log(err))
    }
    const showError = () => {
        if (error) {
            return <div className='alert alert-danger'>{error}</div>
        }
    }

    const showSuccess = () => {
        if (success) {
            return <div className='alert alert-success' >{success}</div>

        }
    }

    return (
        <>
            {showError()}

            {showSuccess()}

            {
                !success &&
                <form className=' form-floating w-50  mx-auto'>
                    <input type={'text'} id='email' className='form-control' placeholder="Email address" onChange={e => setEmail(e.target.value)} value={email} />
                    <label htmlFor='email'>Email address</label>
                    <Link to='#' className='btn btn-warning mt-2' onClick={forgetPasswordLink}>Send password Link</Link>
                </form>
            }

        </>
    )
}

export default ForgetPassword