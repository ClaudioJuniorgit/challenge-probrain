import { useContext, useEffect, useState } from 'react';
import { SpellContext } from '../../Contexts/Context';
import { useLocation, useNavigate } from 'react-router-dom';
import style from './SpellDetails.module.scss';
import ButtonDefault from '../../Components/UI/ButtonDefault/ButtonDefault';
import CardDetails from '../CardDetails/CardDetails';
import useAxios from '../../Components/Hooks/useAxios';
import DetailsBottom from '../../assets/backgroundWPP.svg';
import BgDetails from '../../assets/backgroundDetail.svg';
import RangeIcon from '../../assets/RangeIcon.svg';
import ComponentsIcon from '../../assets/ComponentsIcon.svg';
import DurationIcon from '../../assets/DurationIcon.svg';
import CastingTimeIcon from '../../assets/CastingTimeIcon.svg';
import SchoolNameIcon from '../../assets/SchoolNameIcon.svg';
import ClassesNameIcon from '../../assets/ClassNameIcon.svg';
import SubClassesNameIcon from '../../assets/SubClassNameIcon.svg';
import BtnArrow from '../../assets/arrow.svg';
import MaterialIcon from '../../assets/MaterialIcon.svg';
import AttackTypeIcon from '../../assets/AttackTypeIcon.svg';

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
        console.log(storageInfo);
      });
  }, []);

  return (
    <>
      {storageInfo && (
        <div className={style.DetailsMain}>
          <img src={DetailsBottom} alt="Background Details" className={style.BgBottom} />
          <div className={style.DetailsBox}>
            <div className={style.BgDetails}>
              <h1 className={style.BgTitle}>{storageInfo.name}</h1>
              <img src={BgDetails} alt="Background Details" className={style.BgDetailsImg} />
            </div>
            <div className={style.CardDetailsBox}>
              <div className={style.CardDetails}>
                <CardDetails
                  classSoon={style.Range}
                  data={{ title: 'Range:', img: RangeIcon, textValue: storageInfo.range }}
                />

                <CardDetails
                  classSoon={style.Components}
                  data={{ title: 'Components:', img: ComponentsIcon, textValue: storageInfo.components.join(', ') }}
                />
                <CardDetails
                  classSoon={style.Material}
                  data={{ title: 'Material:', img: MaterialIcon, textValue: storageInfo.material || 'None' }}
                />
                <CardDetails
                  classSoon={style.Duration}
                  data={{ title: 'Duration:', img: DurationIcon, textValue: storageInfo.duration }}
                />
                <CardDetails
                  classSoon={style.CastingTime}
                  data={{ title: 'Casting Time:', img: CastingTimeIcon, textValue: storageInfo.casting_time }}
                />

                <CardDetails
                  classSoon={style.AttackType}
                  data={{ title: 'Attack Type', img: AttackTypeIcon, textValue: storageInfo.attack_type || 'None' }}
                />

                <CardDetails
                  classSoon={style.School}
                  data={{ title: 'School:', img: SchoolNameIcon, textValue: storageInfo.school.name }}
                />

                <CardDetails
                  classSoon={style.Class}
                  data={{
                    title: 'Class Name:',
                    img: ClassesNameIcon,
                    textValue: storageInfo.classes.map((cla) => cla.name).join(', '),
                  }}
                />
                <CardDetails
                  classSoon={style.SubClass}
                  data={{
                    title: 'Sub Class Name:',
                    img: SubClassesNameIcon,
                    textValue:
                      storageInfo.subclasses && storageInfo.subclasses.length > 0
                        ? storageInfo.subclasses.map((cla) => cla.name).join(', ')
                        : 'None',
                  }}
                />
                <CardDetails
                  classSoon={style.Description}
                  data={{
                    title: 'Description:',
                    textValue: storageInfo.desc,
                  }}
                />
              </div>
              <ButtonDefault
                name={'VOLTAR '}
                onClick={() => {
                  navigate('/');
                  localStorage.setItem('infoSpell', '');
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default SpellDetails;
