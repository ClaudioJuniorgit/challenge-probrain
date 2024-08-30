import { createContext, useCallback, useRef, useState } from 'react';
import { useEffect, useContext } from 'react';
import axios from 'axios';
import useAxios from '../Components/Hooks/useAxios';

export const SpellContext = createContext({});

const SpellProvider = ({ children }) => {
  const [resContext, setResContext] = useState();
  const [spellSelected, setSpellSelected] = useState(null);
  const [inputText, setInputText] = useState('');
  const [visibleCards, setVisibleCards] = useState([]);
  const { response, loading, error, fetchData } = useAxios();

  useEffect(() => {
    fetchData('https://www.dnd5eapi.co/api/spells', (data) => {
      setResContext(data.results);
      setVisibleCards(data.results.slice(0, 1));
    });
  }, []);

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
