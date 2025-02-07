import React, { useState } from 'react'
import { resendEmail } from '../../Api/userApi';
import Nav from '../layout/NavBar';

const ResendVerification = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const resendVerificationSubmit = (e) => {
        setError('')
        setSuccess('')
        e.preventDefault()
        resendEmail(email)
            .then(data => {
                if (data.error) {
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
                <form className=' form-floating w-50 text-center mx-auto my-2'>
                    <input type={'text'} id='email' className='form-control' placeholder="Email" onChange={e => setEmail(e.target.value)} value={email} />
                    <label htmlFor='email'>Email</label>
                    <button className="btn btn-warning mt-2" onClick={resendVerificationSubmit}>ResendVerification</button>
                </form>
            }

        </>
    )
}

export default ResendVerification