export interface StripeProduct {
  id: string;
  priceId: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  mode: 'payment' | 'subscription';
}

export const stripeProducts: StripeProduct[] = [
  {
    id: 'prod_TcFRuAo5Tay5fE',
    priceId: 'price_1Sf0wWD13Nn7arbMN6PYTd7u',
    name: 'AI Assistant: Basic',
    description: 'An AI Chatbot that helps customers answer questions about a business',
    price: 99.99,
    currency: 'usd',
    mode: 'subscription'
  },
  {
    id: 'prod_TcFRDHogIMWhJB',
    priceId: 'price_1Sf0wUD13Nn7arbMTGtRw7FJ',
    name: 'AI Assistant: Intermediary',
    description: 'AI Assistant that handles customer inquiries and schedules appointments',
    price: 149.99,
    currency: 'usd',
    mode: 'subscription'
  },
  {
    id: 'prod_TcFRnoqRwxgayN',
    priceId: 'price_1Sf0wQD13Nn7arbMRAK7gduY',
    name: 'AI Assistant: Advanced',
    description: 'AI Assistant Chatbot along with Phone Caller/Voice Agent along with Appoinment Scheduling, etc.',
    price: 199.99,
    currency: 'usd',
    mode: 'subscription'
  }
];

export function getProductByPriceId(priceId: string): StripeProduct | undefined {
  return stripeProducts.find(product => product.priceId === priceId);
}

export function formatPrice(price: number, currency: string): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.toUpperCase(),
  }).format(price);
}