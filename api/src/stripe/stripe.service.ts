import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { Cart } from './Cart.model';

@Injectable()
export class StripeService {
  private stripe: Stripe;

  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2024-11-20.acacia',
    });
  }

  async checkout(cart: Cart) {
    const totalPrice = cart.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0,
    );

    return await this.stripe.paymentIntents.create({
      amount: +totalPrice.toFixed(2) * 100,
      currency: 'brl',
      payment_method_types: ['card'],
      description: 'Checkout payment',
    });
  }
}
