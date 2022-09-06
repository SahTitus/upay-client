import React from 'react';
import { usePaystackPayment } from 'react-paystack';
import { useStateContex } from '../store/StateProvider';

const  usePaystack = () => {

const user = JSON.parse(localStorage.getItem("profile"));
const { amountToPay,  } = useStateContex();
// you can call this function anything


  const payConfig = {
    reference: (new Date()).getTime().toString(),
    email: user?.result?.email,
    amount: amountToPay * 100,
    currency: "GHS",
    channels: ["mobile_money"],
    mobile_money: {
        phone : "0553241149",
        provider : "Vodafone"
      },
    publicKey: 'pk_test_bfc260a4908b0b315dbeee4100eeaef87a2e656b',
}

return { payConfig}

}


export default usePaystack;