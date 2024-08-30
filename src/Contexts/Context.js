import { createContext, useCallback, useRef, useState } from 'react';
import { useEffect, useContext } from 'react';
import axios from 'axios';

export const SpellContext = createContext({});

const SpellProvider = ({ children }) => {
  const [resContext, setResContext] = useState();
  const [spellSelected, setSpellSelected] = useState(null);
  const [inputText, setInputText] = useState('');
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    axios
      .get('https://www.dnd5eapi.co/api/spells')
      .then((res) => {
        setResContext(res.data.results);
        setVisibleCards(res.data.results.slice(0, 1));
      })
      .catch((err) => [console.log(err)]);
  }, []);
  console.log(visibleCards);

  return (
    <SpellContext.Provider
      value={{
        resContext,
        setResContext,
        spellSelected,
        setSpellSelected,
        inputText,
        setInputText,
        visibleCards,
        setVisibleCards,
      }}
    >
      {children}
    </SpellContext.Provider>
  );
};

export default SpellProvider;
