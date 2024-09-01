import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SpellContext } from '../../Contexts/Context';
import style from './Card.module.scss';
import dndLogo from '../../assets/dndLogo.svg';
import ButtonDefault from '../UI/ButtonDefault/ButtonDefault';

const Card = ({ res, index, lastCardRef }) => {
  const { setSpellSelected } = useContext(SpellContext);
  const navigate = useNavigate();

  return (
    <div className={style.CardMain} ref={lastCardRef} key={index}>
      <h3>DUNGEONS AND DRAGONS</h3>

      <div className={style.TextCard}>{res.name}</div>

      <ButtonDefault
        name={'VER DETALHES '}
        onClick={() => {
          navigate(`/listspell/details?magic=${res.index}`);
          setSpellSelected(res.url);
        }}
      />
    </div>
  );
};
export default Card;
