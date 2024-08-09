import { Heart, Trash } from 'lucide-react';
import './Card.css';
import { MouseEventHandler, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { likeCard, delCard } from './../../slices/cardSlice';
import { Link } from 'react-router-dom';

interface CardProps {
  card: any;
}

const Card = ({ card }: CardProps) => {
  const refLink = useRef<HTMLAnchorElement>(null);

  const dispatch = useDispatch();

  const handleLike: MouseEventHandler = (event) => {
    event.stopPropagation();
    dispatch(likeCard(card));
  };

  const handleDel: MouseEventHandler = (event) => {
    event.stopPropagation();
    dispatch(delCard(card));
  };

  return (
    <li
      className='card'
      onClick={() => {
        refLink.current?.click();
      }}
    >
      <Link
        ref={refLink}
        className='card__link'
        rel='noreferrer'
        to={`/card/${card.id}`}
      >
        <div className='card__header'>
          <div className='card__name' title={card.nameRU}>
            {card.nameRU}
          </div>
        </div>
        <img
          src={`https://api.nomoreparties.co${card.image.url}`}
          alt={`обложка фильма ${card.nameRU}`}
          className='card__cover'
        />
      </Link>

      <div className='card__buttons'>
        <button type='button' onClick={handleLike} className='card__btn'>
          <Heart color={`${card.like ? 'red' : 'white'}`} size={24} />
        </button>
        <button type='button' onClick={handleDel} className='card__btn'>
          <Trash color='green' size={24} />
        </button>
      </div>
    </li>
  );
};

export default Card;
