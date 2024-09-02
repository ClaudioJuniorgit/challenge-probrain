import { useContext, useEffect, useState } from 'react';
import { SpellContext } from '../../Contexts/Context';
import { useLocation, useNavigate } from 'react-router-dom';
import style from './CardDetails.module.scss';

const CardDetails = ({ data, classSoon = null }) => {
  const navigate = useNavigate();
  const { spellSelected } = useContext(SpellContext);

  const [cardData, setCardData] = useState({ title: data.title, img: data.img, textValue: data.textValue });

  console.log(data);

  // Verifica se textValue é um array e junta os itens em uma única string
  let textContent = '';
  if (Array.isArray(cardData.textValue)) {
    textContent = cardData.textValue.join(' ');
  } else if (typeof cardData.textValue === 'string') {
    textContent = cardData.textValue;
  }

  // Verifica se textContent é uma string e conta o número de caracteres
  const textLength = typeof textContent === 'string' ? textContent.length : 0;

  // Define a classe com base no comprimento do texto
  // const textClass = textLength > 200 ? style.LongText : style.ShortText;
  // let textSize;
  // if (textLength > 50) {
  //   textSize = style.HighTextSize;
  // } else if (textLength > 15) {
  //   textSize = style.MediumTextSize;
  // } else textSize;

  return (
    <>
      <div className={`${style.CardDetails} ${classSoon} ${data.img ? '' : style.OnlyText}`}>
        <div className={style.CardBox}>
          {cardData.img && (
            <div className={style.CardImg}>
              <img src={cardData.img} alt={`${cardData.title}Icon`} />
            </div>
          )}
          <div className={style.CardText}>
            <span className={style.CardTitle}>{cardData.title}</span>
            <span>{textContent}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetails;
