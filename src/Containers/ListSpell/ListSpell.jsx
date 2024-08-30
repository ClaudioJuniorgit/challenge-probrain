import { useEffect, useState, useContext, useRef, useCallback } from 'react';
import { SpellContext } from '../../Contexts/Context';
import Card from '../../Components/Card/Card';
import style from './ListSpell.module.scss';
import Header from '../../Components/Header/Header';

const ListSpell = () => {
  const { resContext, setInputText, inputText, visibleCards, setVisibleCards } = useContext(SpellContext);
  const [spellFiltered, setSpellFiltered] = useState('');
  const [showContent, setShowContent] = useState(resContext);
  const observer = useRef();

  useEffect(() => {
    setSpellFiltered(
      resContext && resContext.filter((res) => res.name.toLowerCase().includes(inputText.toLowerCase())),
    );
  }, [inputText, resContext]);

  const lastCardRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && visibleCards.length < resContext.length) {
          setVisibleCards((prevCards) => [...prevCards, ...resContext.slice(prevCards.length, prevCards.length + 1)]);
        }
      });
      if (node) observer.current.observe(node);
    },
    [visibleCards, resContext],
  );

  useEffect(() => {
    if (inputText.length > 0) {
      setShowContent(spellFiltered);
    } else {
      setShowContent(visibleCards);
    }
  }, [spellFiltered, visibleCards]);

  return (
    <div className={style.ListSpell}>
      <Header />
      <div className={style.Cards}>
        {showContent &&
          showContent.map((res, index) => {
            if (index === showContent.length - 1) {
              return <Card lastCardRef={lastCardRef} res={res} key={index} index={index} />;
            } else {
              return <Card res={res} key={index} index={index} />;
            }
          })}
      </div>
    </div>
  );
};
export default ListSpell;
