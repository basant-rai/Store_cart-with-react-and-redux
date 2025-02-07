import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { confirmUser } from './Api/userApi'

const ConfirmEmail = () => {
    const[error,setError] = useState('');
    const[success,setSuccess] = useState('');
    const {token} = useParams()
    useEffect(()=>{
        confirmUser(token)
        .then(data=>{
            if(data.error){
                setError(data.error)
                setSuccess('')
            }else{
                setError('')
                setSuccess(data.message)
            }
        })
    },[token,success,error])

    const showError = ()=>{
        if(error){
            return <div className='alert alert-danger'>{error}</div>

        }
    }

    const showSuccess=()=>{
        if(success){
            return <div className='alert alert-success'>{success}</div>

        }
    }
  return (
    <>
    {showError()}
    {showSuccess()}
    </>
  )
}

export default ConfirmEmail