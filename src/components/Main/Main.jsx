import { useState, useContext } from "react";

import pencil from "../../images/Pencil.svg";
import editButton from "../../images/EditButton.svg";
import addButton from "../../images/AddButton.svg";
import Popup from "./Popup/Popup";
import EditProfile from "../EditProfile/EditProfile.jsx";
import EditAvatar from "../EditAvatar/EditAvatar.jsx";
import NewCard from "../NewCard/NewCard.jsx";
import Card from "./Card/Card.jsx";
import ImagePopup from "../ImagePopup/imagePopup.jsx";

import { CurrentUserContext } from "../../contexts/CurrentUserContext.jsx";

export default function Main(props) {
  const [popup, setPopup] = useState(null);

  const { currentUser } = useContext(CurrentUserContext);

  const newCardPopup = {
    title: "Nuevo lugar",
    children: <NewCard onAddCard={props.onAddCard} />,
  };

  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };
  const editAvatarPopup = {
    title: "Editar avatar",
    children: <EditAvatar />,
  };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <>
      <section className="profile">
        <div className="profile__edit">
          <img
            src={currentUser.avatar}
            alt="imagen avantar"
            className="profile__avatar"
          />
          <img
            className="profile__edit-pencil"
            src={pencil}
            alt="icono de lapiz"
            onClick={() => handleOpenPopup(editAvatarPopup)}
          />
        </div>
        <div className="profile__user">
          <div className="profile__info">
            <h1 className="profile__name">{currentUser.name}</h1>
            <img
              src={editButton}
              alt="boton para editar"
              className="profile__bottom"
              onClick={() => handleOpenPopup(editProfilePopup)}
            />
          </div>
          <p className="profile__occupation">{currentUser.about}</p>
        </div>
        <img
          src={addButton}
          alt="boton para añadir"
          className="profile__bottom-add"
          onClick={() =>
            handleOpenPopup(newCardPopup)
          } /*dudas con esto porque se supone es en button y lo tengo en imagen*/
        />
      </section>
      <section className="card-grid">
        {props.cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={handleOpenPopup}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
            // setCards={setCards}
          />
        ))}
      </section>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </>
  );
}
