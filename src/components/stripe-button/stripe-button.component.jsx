import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_51I5CMTAvTAQaaWjU0T1DI2LccKqrewisjIXwporKrMZrZSceZG8j9uLn23TJG8N0zhTJrEKiuFjVRUy0RJm61SQK009Yc1CrAk';

	const onToken = token => {
		console.log(token);
		alert('Payment Completed')
	}

	return (
		<StripeCheckout
			label='Pay Now'
			name='Cool Cat Clothing'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/Smv.svg'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		 />
	)
};

export default StripeCheckoutButton;