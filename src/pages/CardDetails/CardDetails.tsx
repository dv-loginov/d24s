import './CardDetails.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IState } from '../../types/types';

const CardDetails = () => {
  const { id } = useParams();

  let navigate = useNavigate();
  
  const cards = useSelector((state:IState) => state.card.cards);
  
  const card = cards.filter((card) => card.id === Number(id))[0];
  
  return (
    <>
      <div className='card-details'>
        <h1 className='card-details__name'>{card.nameRU}</h1>
        <img
          className='card-details__img'
          src={`https://api.nomoreparties.co${card.image.url}`}
          alt={`обложка фильма ${card.nameRU}`}
        />
        <h2 className='card-details__director'>{card.director}</h2>
        <h3 className='card-details__country'>{card.country}</h3>
        <h4 className='card-details__description'>{card.description}</h4>
        <button className='card-details__btn' onClick={() => navigate(-2)}>
          Назад
        </button>
      </div>
    </>
  );
};

export default CardDetails;
