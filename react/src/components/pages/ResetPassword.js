import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { resetPassword } from '../../Api/userApi';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const { token } = useParams()


    const resetPasswordSubmit = (e) => {
        setError('')
        setSuccess('')
        e.preventDefault()
        resetPassword(token,password)
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
                <form className='form-floating w-50 text-center mx-auto my-2'>
                        <input type={'text'} id='password' className='form-control' placeholder="New password" onChange={e => setPassword(e.target.value)} value={password} />
                        <label htmlFor='password'>New password</label>
                    <button className="btn btn-warning mt-2" onClick={resetPasswordSubmit}>ResetPassword</button>
                </form>
            }

        </>
    )
}

export default ResetPassword