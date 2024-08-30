import axios from 'axios';
import { useContext } from 'react';

import { SpellContext } from '../../Contexts/Context';
import style from './Header.module.scss';

const Header = () => {
  const { setInputText } = useContext(SpellContext);

  return (
    <div className={style.InputFilterMain}>
      <input
        className={style.InputFilter}
        type="text"
        placeholder="Pesquisar Magias..."
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
    </div>
  );
};
export default Header;
