import Button from '@/components/Button';
import { useDispatch, useSelector } from 'react-redux';

type Props = {};

const HomePage = (props: Props) => {
  const dispatch = useDispatch();
  // const count = useSelector(selectCount);

  return (
    <div>
      Welcome to Next-js!{' te '}
      <p>test</p>
      <p className='text-red-400'>test</p>
      {/* <p>count: {count}</p>
      <button onClick={() => dispatch(increment(1))}>increment</button>
      <hr />
      <button onClick={() => dispatch(decrement(1))}>decrement</button> */}
    </div>
  );
};

export default HomePage;
