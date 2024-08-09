import './CardList.css';
import Card from '../Card/Card';
import {ThunkDispatch} from "@reduxjs/toolkit";

import { useSelector, useDispatch } from 'react-redux';
import { fetchCards } from '../../slices/cardSlice';
import { useEffect } from 'react';
import { IState, ICard } from '../../types/types';

const CardList = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const card = useSelector((state:IState) => state.card);
  const loaded = useSelector((state:IState) => state.card.loaded);

  const filtered = useSelector((state:IState) => state.filter.likeFilter);

  const filteredCards = card.cards.filter((c: ICard) => c.like === true);

  const ViewCards = filtered ? filteredCards : card.cards;

  useEffect(() => {
    if (!loaded) {
      dispatch(fetchCards());
    }
  }, []);

  return (
    <>
      {card.loading && <div className=''>Loading</div>}

      {!card.loading && card.error ? (
        <div className=''>{card.error}</div>
      ) : null}

      {!card.loading && card.cards.length ? (
        <div className='card-list'>
          <ul className='card-list__grid'>
            {ViewCards.map((card, index) => (
              <Card card={card} key={index} />
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default CardList;
