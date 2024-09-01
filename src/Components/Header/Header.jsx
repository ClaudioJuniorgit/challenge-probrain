import { useContext } from 'react';
import searchImage from '../../assets/Vector.svg';
import imageHeader from '../../assets/dndLogo.svg';
import BgImage from '../../assets/backgroundWPP.svg';

import { SpellContext } from '../../Contexts/Context';
import style from './Header.module.scss';

const Header = () => {
  const { setInputText } = useContext(SpellContext);

  return (
    <div className={style.HeaderMain}>
      <img src={imageHeader} alt="Dungeons and Dragons Logo" className={style.HeaderLogo} />
      <div className={style.InputFilterMain}>
        <input
          className={style.InputFilter}
          type="text"
          placeholder="Pesquisar Magias..."
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <img src={searchImage} alt="" className={style.SearchImage} />
      </div>
    </div>
  );
};
export default Header;
