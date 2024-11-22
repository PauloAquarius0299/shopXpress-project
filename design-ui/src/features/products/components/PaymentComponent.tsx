import { FormEvent, useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
    Elements,
    CardElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux/hook';
import { resetCart } from '../productSlice';

const PaymentComponent = () => {
    const { cart } = useAppSelector((state) => state.product);

    const dispatch = useAppDispatch();

    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentStatus, setPaymentStatus] = useState('');

    const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);

    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        if (totalQty === 0) return;

        if (paymentStatus !== 'succeeded') return;

        dispatch(resetCart());
    }, [paymentStatus, totalQty, dispatch]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (totalQty === 0) return;

        if (!stripe || !elements) return;

        const cardEl = elements.getElement(CardElement);

        setIsProcessing(true);

        try {
            const res = await axios.post(`${process.env.REACT_APP_BASE_API}/stripe`, { cart });

            const { client_secret: clientSecret } = res.data;

            const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: cardEl!,
                },
            });

            if (!paymentIntent) {
                setPaymentStatus('Pagamento Falhou');
            } else {
                setPaymentStatus(paymentIntent.status);
            }
        } catch (error) {
            console.log(error);
            setPaymentStatus('Pagamento falhou!');
        }
    };

    return (
        <div style={{ fontSize: '20px' }}>
            <form id='payment-form' onSubmit={handleSubmit}>
                <label htmlFor='card-element'>Fazer Pedido</label>
                <CardElement id='card-element' />
                {!isProcessing && (
                    <button
                        style={{
                            marginTop: '16px',
                            height: '31px',
                            backgroundColor: '#f0c14b',
                            color: 'black',
                            display: 'flex',
                            fontWeight: 600,
                            fontSize: '20px',
                            padding: '24px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer',
                            width: '100%',
                        }}
                    >
                        Pagamento
                    </button>
                )}
                {isProcessing && <div>Processando...</div>}
                {!isProcessing && paymentStatus && <div>Status: {paymentStatus}</div>}
            </form>
        </div>
    );
};

const PaymentGateway = () => {
    const stripePromise = loadStripe('pk_test_51P8nwcHb3SVNs9Qa5BHvADkrdEIz6iowsdWBbjLeMS0OfXa9SRKzdMqfWc2OKMaIX8jazf2UtqZs4JN79FcSHp4O00UuDWOX8L');

    return (
        <Elements stripe={stripePromise}>
            <PaymentComponent />
        </Elements>
    );
};

export default PaymentGateway;
