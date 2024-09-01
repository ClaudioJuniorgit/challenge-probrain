import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SpellContext } from '../../../Contexts/Context';
import style from './ButtonDefault.module.scss';
import BtnArrow from '../../../assets/arrow.svg';

const ButtonDefault = ({ onClick, name }) => {
  return (
    <div className={style.BtnMain}>
      <button className={style.BtnDetails} onClick={onClick}>
        {name}
        <img src={BtnArrow} alt="Arrow Button" />
      </button>
    </div>
  );
};
export default ButtonDefault;
