import { useContext } from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";

import ImagePopup from "../../ImagePopup/imagePopup";

export default function Card(props) {
  const { currentUser } = useContext(CurrentUserContext);

  if (!props.card) {
    return null;
  }
  const { onCardClick, onCardLike, onCardDelete } = props;
  const { name, link, isLiked } = props.card;
  const isOwn = props.card.owner === currentUser._id;

  const cardDeleteButtonClassName = `${isOwn ? "card__bottom-trash" : ""}`;

  const cardLikeButtonClassName = `card__bottom-like ${
    isLiked && "card__bottom-like_active"
  }`;

  function handleLike() {
    onCardLike(props.card);
  }

  function handleClickCard() {
    onCardClick({ children: <ImagePopup link={link} name={name} /> });
    /*onCardClick(imagePopup);*/
  }

  function handleCardDelete() {
    onCardDelete({ children: <ImagePopup link={link} name={name} /> });
    handleDeleteClick();
  }
  function handleDeleteClick() {
    onCardDelete(props.card);
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
        <div
          alt="boton de eliminar"
          className={cardDeleteButtonClassName}
          onClick={handleCardDelete}
        ></div>
        <div className="card__description">
          <h3 className="card__footer">{name}</h3>
          <div
            alt="boton de like"
            className={cardLikeButtonClassName}
            onClick={handleLike}
          ></div>
        </div>
      </div>
    </>
  );
}
