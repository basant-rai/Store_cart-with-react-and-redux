import axios from "axios";
import { API } from "../config";

// export const EsewaPayment = async (amount) => {
//   console.log(amount)
//   const eSewaData = {
//     amt: amount,
//     psc: 0,
//     pdc: 0,
//     txAmt: 0,
//     tAmt: amount,
//     pid: "ee2c3ca1-696b-4cc5-a6be-2c40d929d453",
//     scd: 'EPAYTEST', // Your merchant code
//     su: "http://merchant.com.np/page/esewa_payment_success",
//     fu: "http://merchant.com.np/page/esewa_payment_failure",
//   };

//   // const eSewaQueryString = new URLSearchParams(eSewaData).toString();
//   // const eSewaUrl = `https://uat.esewa.com.np/epay/main?${eSewaQueryString}`;

//   // window.location.href = eSewaUrl;
//   try {
//     const res = await axios.post("https://rc-epay.esewa.com.np/api/epay/main/v2/form")
//   } catch (err) {
//     throw err
//   }
// };

export const EsewaPayment = async () => {
  try {
    const response = await axios.post(`${API}/esewa-pay`, {
      amount: 100,
      tax_amount: 10,
      total_amount: 110,
      transaction_uuid: 'your_transaction_uuid_here',
      product_code: 'EPAYTEST',
      product_service_charge: 0,
      product_delivery_charge: 0,
      success_url: 'https://esewa.com.np',
      failure_url: 'https://google.com',
      signed_field_names: 'total_amount,transaction_uuid,product_code',
      signature: 'your_signature_here'
    });
    console.log(response)
    // setPaymentResponse(response.data);
  } catch (error) {
    console.error('Error initiating payment:', error);
  }
};