import { useContext, useEffect, useState } from 'react';
import { SpellContext } from '../../Contexts/Context';
import { useLocation, useNavigate } from 'react-router-dom';
import style from './SpellDetails.module.scss';
import ButtonDefault from '../../Components/UI/ButtonDefault/ButtonDefault';
import useAxios from '../../Components/Hooks/useAxios';

const SpellDetails = () => {
  const navigate = useNavigate();
  const { spellSelected } = useContext(SpellContext);
  const [storageInfo, setStorageInfo] = useState();
  const { fetchData } = useAxios();
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  let query = useQuery();
  console.log(query.get('magic'));

  useEffect(() => {
    if (spellSelected || query.get('magic'))
      fetchData(`https://www.dnd5eapi.co${spellSelected || `/api/spells/${query.get('magic')}`}`, (data) => {
        localStorage.setItem('infoSpell', JSON.stringify(data));
        setStorageInfo(JSON.parse(localStorage.getItem('infoSpell')));
      });
  }, []);

  return (
    <>
      {storageInfo && (
        <div className={style.CardDetailsMain}>
          <div className={style.CardDetails}>
            <p>Name: {storageInfo.name}</p>
            {storageInfo.range && <p>Range: {storageInfo.range}</p>}
            <p>Components: {storageInfo.components.join(', ')}</p>
            {storageInfo.material && <p>Material: {storageInfo.material}</p>}
            <p>Duration: {storageInfo.duration}</p>
            <p>Casting Time: {storageInfo.casting_time}</p>
            {storageInfo.attack_type && <p>Attack Type: {storageInfo.attack_type}</p>}
            {storageInfo.school.name && <p>School Name: {storageInfo.school.name}</p>}
            {storageInfo.classes && <p>Class Name: {storageInfo.classes.map((cla) => cla.name).join(', ')}</p>}
            {storageInfo.subclasses && (
              <p>Sub Classes Name: {storageInfo.subclasses.map((cla) => cla.name).join(', ')}</p>
            )}
            <p>Description: {storageInfo.desc}</p>
            {storageInfo.higher_level && <p>Higher Level: {storageInfo.higher_level}</p>}
          </div>
          <ButtonDefault
            name={'Voltar'}
            onClick={() => {
              navigate('/');
              localStorage.setItem('infoSpell', '');
            }}
          />
        </div>
      )}
    </>
  );
};
export default SpellDetails;
