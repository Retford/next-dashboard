import { CartCounter } from '@/shopping-cart/components/CartCounter';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shopping Cart',
  description: 'Shopping Cart Page by NextJS',
};

export default async function CounterPage() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <span>Productos del carrito</span>
      <CartCounter />
    </div>
  );
}
