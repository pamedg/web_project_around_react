import { useContext } from "react";
import { CurrentUserContextuseContext } from "../../ context/CurrentUserContext";
import ImagePopup from "../../ImagePopup/imagePopup";
export default function Card(props) {
  if (!props.card) {
    return null;
  }
  const currentUser = useContext(CurrentUserContext);
  const { onCardClick } = props;
  const { name, link, isLiked } = props.card;

  const imagePopup = {
    children: <ImagePopup link={link} name={name} />,
  };

  const cardLikeButtonClassName = `card__bottom-like ${
    isLiked ? "card__bottom-like_active" : ""
  }`;

  // const isLiked = card.likes.some((i) => i._id === currentUser._id);

  const cardDeleteButtonClassName = `${isOwn ? "card__bottom-trash" : ""}`;

  function handleClickCard() {
    onCardClick({ children: <ImagePopup link={link} name={name} /> });
    /*onCardClick(imagePopup);*/
  }
}

return (
  <>
    <div className="card">
      <img
        src={link}
        alt=""
        className="card__image"
        onClick={handleClickCard}
      />
      <div alt="boton de eliminar" className={cardDeleteButtonClassName}></div>
      <div className="card__description">
        <h3 className="card__footer">{name}</h3>
        <div alt="boton de like" className={cardLikeButtonClassName}></div>
      </div>
    </div>
  </>
);
