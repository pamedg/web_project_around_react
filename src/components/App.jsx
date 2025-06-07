import { useState, useEffect } from "react";
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";
import { api } from "../utils/api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.jsx";
import EditProfile from "./EditProfile/EditProfile.jsx";
import EditAvatar from "./EditAvatar/EditAvatar.jsx";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  // const { currentUser } = useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function getUser() {
      const response = await api.getUserInformation();
      setCurrentUser(response);
    }
    getUser();
  }, []);

  useEffect(() => {
    async function getCards() {
      const response = await api.getInitialCards();
      setCards(response);
    }
    getCards();
  }, []);

  function handleUpdateUser(userData) {
    (async () => {
      await api
        .updateUserInformation(userData)
        .then((newUser) => {
          setCurrentUser(newUser);
          handleClosePopup();
        })
        .catch((error) => console.error(error));
    })();
  }

  function handleUpdateAvatar(link) {
    api.setUserAvatar(link).then((newUser) => {
      setCurrentUser(newUser);
    });
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
      const newCard = await api.changeLikeCardStatus(card._id, card.isLiked);
      setCards((state) =>
        state.map((currentCard) =>
          currentCard._id === card._id ? newCard : currentCard
        )
      );
    } catch (error) {
      console.log(error);
    }
  }

  function handleClosePopup() {
    const popup = document.querySelector(".popup_opened");
    if (popup) {
      popup.classList.remove("popup_opened");
    }
  }

  function handleAddPlaceSubmit(name, link) {
    api.createCard(name, link).then((card) => {
      setCards([card, ...cards]);
    });
  }

  return (
    <>
      <div className="page">
        <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser }}>
          <Header />
          <Main
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            onAddCard={handleAddPlaceSubmit}
          />
          <Footer />
          {/* <EditProfile
            isOpen={EditProfile}
            onClose={handleClosePopup}
            onUpdateUser={handleUpdateUser}
          /> */}
          {/* <EditAvatar
            isOpen={EditAvatar}
            onClose={handleClosePopup}
            onEditAvatar={handleUpdateAvatar}
          /> */}
          {/* <NewCard onAddCard={handleAddCard} /> */}
        </CurrentUserContext.Provider>

        {/*<div className="popup" id="popup-image">
          <div className="popup__container">
            <img src="#" alt="" className="popup__image" />
            <h4 className="popup__title">titulo de la carta</h4>
            <img
              className="popup__close"
              src="../images/CloseIcon.svg"
              alt="boton para cerrar"
              id="close-popup"
            />
          </div>
        </div>*/}
        {/*<div className="popup" id="popup-profile">
          <form className="form popup__form" id="form-profile" noValidate>
            <img
              className="form__close-button"
              src="../images/CloseIcon.svg"
              alt="boton para cerrar"
              id="close-profile-form"
            />
            <h2 className="form__title">Editar Perfil</h2>    <--- de aqui tome lo de popupjsx sin los divs y boton
            <div>
              <input
                className="form__input"
                type="text"
                id="input-name"
                required
                minLength="2"
                maxLength="40"
                name="name"
                placeholder="Nombre"
              />
              <span className="input-error input-name-error form__error"></span>
            </div>
            <div>
              <input
                className="form__input"
                type="text"
                id="input-about"
                required
                minLength="2"
                maxLength="200"
                name="job"
                placeholder=" Acerca de mí"
              />
              <span className="input-error input-about-error form__error"></span>
            </div>
            <button
              className="form__button"
              type="submit"
              id="profile-form-button"
            >
              Guardar
            </button>
          </form>
        </div>*/}
        {/*<div className="popup" id="popup-avatar">
          <form className="form popup__form" id="popup-avatar" noValidate>
            <img
              className="form__close-button"
              src="../images/CloseIcon.svg"
              alt="boton para cerrar"
              id="close-profile-form"
            />
            <h2 className="form__title">Cambiar foto de perfil</h2>
            <div>
              <input
                className="form__input"
                type="url"
                id="input-image"
                required
                minLength="2"
                maxLength="200"
                name="link"
                placeholder="Nueva foto de perfil"
              />
              <span className="input-error input-name-error form__error"></span>
            </div>
            <button
              className="form__button"
              type="submit"
              id="profile-form-button"
            >
              Guardar
            </button>
          </form>
        </div>*/}
        {/*<div className="popup" id="popup-add">
          <form className="form popup__form" id="form-add" noValidate>
            <img
              className="form__close-button"
              src="../images/CloseIcon.svg"
              alt="boton para cerrar"
              id="close-profile-form-add"
            />
            <h2 className="form__title">New Place</h2>
            <div>
              <input
                className="form__input"
                type="text"
                id="input-place"
                required
                minLength="2"
                maxLength="40"
                name="title"
                placeholder="Title"
              />
              <span className="form__error input-place-error"></span>
            </div>
            <div>
              <input
                className="form__input"
                type="url"
                id="input-image"
                required
                minLength="2"
                maxLength="200"
                name="link"
                placeholder=" Image URL"
              />
              <span className="form__error input-image-error"></span>
            </div>
            <button
              className="form__button"
              type="submit"
              id="addcard-form-button"
            >
              Save
            </button>
          </form>
        </div>*/}
        {/*<div className="popup" id="popup-confirmation">
          <form className="form popup__form" id="popup-confirmation" noValidate>
            <img
              className="form__close-button"
              src="../images/CloseIcon.svg"
              alt="boton para cerrar"
              id="close-profile-form-add"
            />
            <h2 className="form__title">¿Estas seguro?</h2>
            <div>
              <span className="form__error input-place-error"></span>
              <button
                className="form__button"
                type="submit"
                id="confirmation-form-button"
              >
                {" "}
                Si{" "}
              </button>
            </div>
          </form>
        </div>*/}
      </div>
    </>
  );
}

export default App;
