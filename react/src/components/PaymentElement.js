import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react'
import { API } from '../config';
import Payment from './pages/Payment';

const PaymentElement = () => {
    const [stripeApiKey, setStripeApiKey] = useState('')

    useEffect(() => {
        getStripeKey()
            .then(data => setStripeApiKey(data.stripeAPIKey))
            .catch(err => console.log(err))

    }, [])

    const getStripeKey = () => {
        return fetch(`${API}/stripeAPIKey`, {
            method: "GET"
        })
            .then(res => res.json())
            .catch(err => console.log(err))
    }

    console.log(stripeApiKey);

    return (
        <>
            {
                stripeApiKey &&
                <Elements stripe={loadStripe(stripeApiKey)}>
                    <Payment />
                </Elements>
            }
        </>
    )
}

// const PaymentElement = () => {
//     const [stripeApiKey,setStripeApiKey] = useState('');
//     console.log(stripeApiKey)
//     useEffect(()=>{
//         getStripeKey()
//         .then(data=>setStripeApiKey(data.stripeAPIKey))
//         .catch(err=>console.log(err))
//     },[])

//     const getStripeKey = ()=>{
//         return fetch(`${API}/stripeAPIKey`,{
//             method:"GET"
//         })
//         .then(data=>setStripeApiKey(data.stripeAPIKey))
//         .catch(err=>console.log(err))
//     }
   
//   return (
//     <>  
//         {
//             stripeApiKey &&
//             <Elements stripe={loadStripe(stripeApiKey)}>
//                 <Payment/>
//             </Elements>
//         }


//     </>
//   )
// }

export default PaymentElement;