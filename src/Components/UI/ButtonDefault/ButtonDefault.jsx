import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SpellContext } from '../../../Contexts/Context';
import style from './ButtonDefault.module.scss';

const ButtonDefault = ({ onClick, name }) => {
  const { setSpellSelected } = useContext(SpellContext);
  const navigate = useNavigate();

  return (
    <button className={style.BtnDetails} onClick={onClick}>
      {name}
    </button>
  );
};
export default ButtonDefault;
