import { useState, useEffect, useContext } from "react";
import avatar from "../../images/avatar.png";
import pencil from "../../images/Pencil.svg";
import editButton from "../../images/EditButton.svg";
import addButton from "../../images/AddButton.svg";
import Popup from "./Popup/Popup";
import EditProfile from "../EditProfile/EditProfile.jsx";
import EditAvatar from "../EditAvatar/EditAvatar.jsx";
import NewCard from "../NewCard/NewCard.jsx";
import Card from "./Card/Card.jsx";
import ImagePopup from "../ImagePopup/imagePopup.jsx";
import { api } from "../../utils/api.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.jsx";

export default function Main() {
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);
  const user = useContext(CurrentUserContext);

  useEffect(() => {
    async function getCards() {
      const response = await api.getInitialCards();
      setCards(response);
    }
    getCards();
  }, []);

  const newCardPopup = {
    title: "Nuevo lugar",
    children: <NewCard />,
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

  async function handleCardDelete(card) {
    await api
      .DeleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((error) => console.log(error));
  }

  async function handleCardLike(card) {
    try {
      const newCard = await api.changeLikeCardStatus(cards._id, card.isLiked);
      setCards((state) =>
        state.map((currentCard) =>
          currentCard._id === cards._id ? newCard : currentCard
        )
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <section className="profile">
        <div className="profile__edit">
          <img src={avatar} alt="imagen avantar" className="profile__avatar" />
          <img
            className="profile__edit-pencil"
            src={pencil}
            alt="icono de lapiz"
            onClick={() => handleOpenPopup(editAvatarPopup)}
          />
        </div>
        <div className="profile__user">
          <div className="profile__info">
            <h1 className="profile__name">Lara </h1>
            <img
              src={editButton}
              alt="boton para editar"
              className="profile__bottom"
              onClick={() => handleOpenPopup(editProfilePopup)}
            />
          </div>
          <p className="profile__occupation">Bailarina</p>
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
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={handleOpenPopup}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            setCards={setCards}
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
