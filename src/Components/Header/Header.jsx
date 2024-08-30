import axios from 'axios';
import { useContext } from 'react';
import searchImage from '../../assets/Vector.svg';

import { SpellContext } from '../../Contexts/Context';
import style from './Header.module.scss';

const Header = () => {
  const { setInputText } = useContext(SpellContext);

  return (
    <div className={style.InputFilterMain}>
      <h1>imagem</h1>
      <div className={style.InputFilter}>
        <input
          type="text"
          placeholder="Pesquisar Magias..."
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <img src={searchImage} alt="" />
      </div>
    </div>
  );
};
export default Header;
