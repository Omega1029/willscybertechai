export interface StripeProduct {
  id: string;
  priceId: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  mode: 'payment' | 'subscription';
  /**
   * Stripe Payment Link — buyers check out on Stripe's hosted page with no
   * account or sign-in. Null falls back to a contact CTA rather than a dead button.
   */
  paymentLink: string | null;
}

export const STRIPE_PRODUCTS: StripeProduct[] = [
  {
    id: 'prod_UT8NYvOIc3Pfgg',
    priceId: 'price_1TUC6TD13Nn7arbMQ34FeCUp',
    name: 'Specialty Consultation',
    description: 'Professional consultation service tailored to your specific needs',
    price: 200.00,
    currency: 'usd',
    mode: 'payment',
    // TODO: paste the Payment Link for the $200 Specialty Consultation.
    paymentLink: null
  }
];

export const getProductById = (id: string): StripeProduct | undefined => {
  return STRIPE_PRODUCTS.find(product => product.id === id);
};

export const getProductByPriceId = (priceId: string): StripeProduct | undefined => {
  return STRIPE_PRODUCTS.find(product => product.priceId === priceId);
};