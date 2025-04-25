import { useState } from "react";
import avatar from "../../images/Avatar.png";
import pencil from "../../images/Pencil.svg";
import editButton from "../../images/EditButton.svg";
import addButton from "../../images/AddButton.svg";
import Popup from "./Popup/Popup";
import EditProfile from "../EditProfile/EditProfile.jsx";
import EditAvatar from "../EditAvatar/EditAvatar.jsx";
import NewCard from "../NewCard/NewCard.jsx";
import Card from "./Card/Card.jsx";
import ImagePopup from "../ImagePopup/imagePopup.jsx";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

console.log(cards);

export default function Main() {
  const [popup, setPopup] = useState(null);

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
          <Card key={card._id} card={card} onCardClick={handleOpenPopup} />
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
