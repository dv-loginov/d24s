import './Filter.css';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLikeFilter } from '../../slices/filterSlice';
import { IState } from '../../types/types';

const Filter = () => {
  const dispatch = useDispatch();

  const filtered = useSelector((state: IState) => state.filter.likeFilter);

  const handleChange = () => {
    dispatch(toggleLikeFilter(!filtered));
  };

  return (
    <div className='filter'>
      <label htmlFor='filter' className='filter__label'>
        Отфильтровать отлайканные:
      </label>
      <input
        name='filter'
        type='checkbox'
        className='filter__checkbox'
        onChange={handleChange}
        checked={filtered}
      />
    </div>
  );
};

export default Filter;
