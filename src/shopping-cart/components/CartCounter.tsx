'use client';

import { useAppDispatch, useAppSelector } from '@/store';
import {
  addOne,
  initialStateCounter,
  subtractOne,
} from '@/store/counter/counterSlice';
import { useEffect } from 'react';

// interface Props {
//   value?: number;
// }

export interface CounterResponse {
  count: number;
}

const getCounter = async (): Promise<CounterResponse> => {
  const response = await fetch('/api/counter').then((res) => res.json());
  return response;
};

export const CartCounter = () => {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  const onClickIncrement = () => {
    dispatch(addOne());
  };

  const onClickDecrement = () => {
    dispatch(subtractOne());
  };

  // useEffect(() => {
  //   dispatch(initialStateCounter(value));
  // }, [dispatch, value]);

  useEffect(() => {
    getCounter().then(({ count }) => dispatch(initialStateCounter(count)));
  }, [dispatch]);

  return (
    <>
      <span className='text-9xl'>{count}</span>
      <div className='flex'>
        <button
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'
          onClick={onClickIncrement}
        >
          +1
        </button>
        <button
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'
          onClick={onClickDecrement}
        >
          -1
        </button>
      </div>
    </>
  );
};
