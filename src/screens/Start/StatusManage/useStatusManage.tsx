import { useDispatch, useSelector } from 'react-redux';
import { add, decrement, increment, init } from 'src/store/reducer/counter';
import { RootState } from 'src/store/store';

const useStatusManage = () => {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  const onPressCountIncrement = () => {
    dispatch(increment());
  };
  const onPressCountDecrement = () => {
    dispatch(decrement());
  };
  const onPressCountAdd = (num: number) => {
    dispatch(add({ addNumber: num }));
  };
  const onPressCountInit = () => {
    dispatch(init());
  };

  return {
    count,
    onPressCountIncrement,
    onPressCountDecrement,
    onPressCountAdd,
    onPressCountInit,
  };
};

export default useStatusManage;
