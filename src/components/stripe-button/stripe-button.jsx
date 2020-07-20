import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51H6s71GmpPoF6dSIEBPjJsKKw9ec3xaJvOYP2S5O5Bt2j52MoT31dmEAyOOl8YOqiQ5bKl0b9HTqph7sxB5T7Qn2007yyYDoKW';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label= 'Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;