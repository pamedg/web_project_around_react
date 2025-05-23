import { useContext, useState } from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";
import ImagePopup from "../../ImagePopup/imagePopup";
import { api } from "../../../utils/api.js";

export default function Card(props) {
  if (!props.card) {
    return null;
  }

  const currentUser = useContext(CurrentUserContext);

  const { onCardClick, onCardLike, onCardDelete } = props;
  const { name, link, isLiked } = props.card;
  const isOwn = props.card.owner === currentUser._id;

  const imagePopup = {
    children: <ImagePopup link={link} name={name} />,
  };
  const cardDeleteButtonClassName = `${isOwn ? "card__bottom-trash" : ""}`;

  const cardLikeButtonClassName = `card__bottom-like ${
    isLiked && "card__bottom-like_active"
  }`;
  console.log(isLiked);

  async function handleCardLike(card) {
    const isLiked = props.card.isLiked;

    try {
      const newCard = await api.changeLikeCardStatus(props.card._id, isLiked);
      props.setCards((state) =>
        state.map((currentCard) =>
          currentCard._id === props.card._id ? newCard : currentCard
        )
      );
    } catch (error) {
      console.log(error);
    }
  }

  function handleLike() {
    onCardLike(props.card._id);
  }

  function handleClickCard() {
    onCardClick({ children: <ImagePopup link={link} name={name} /> });
    /*onCardClick(imagePopup);*/
  }

  function handleCardDelete() {
    onCardDelete({ children: <ImagePopup link={link} name={name} /> });
    handleDeleteClick();
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
        ></div>
        <div className="card__description">
          <h3 className="card__footer">{name}</h3>
          <div
            alt="boton de like"
            className={
              isLiked ? "card__bottom-like_active" : "card__bottom-like"
            }
            onClick={handleLike}
          ></div>
        </div>
      </div>
    </>
  );
}
