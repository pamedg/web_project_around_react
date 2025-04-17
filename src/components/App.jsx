import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

import logo from "../images/logo.svg";
import avatar from "../images/Avatar.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="page">
        <Header />
        <Main />
        <section className="profile">
          <div className="profile__edit">
            <img
              src={avatar}
              alt="imagen avantar"
              className="profile__avatar"
            />
            <img className="profile__edit-pencil" src="../images/Pencil.svg" />
          </div>
          <div className="profile__user">
            <div className="profile__info">
              <h1 className="profile__name"></h1>
              <img
                src="../images/EditButton.svg"
                alt="boton para editar"
                className="profile__bottom"
              />
            </div>
            <p className="profile__occupation"></p>
          </div>
          <img
            src="../images/AddButton.svg"
            alt="boton para añadir"
            className="profile__bottom-add"
          />
        </section>
        <section className="card-grid"></section>

        <Footer />

        <template className="template-card">
          <div className="card">
            <img src="#" alt="" className="card__image" />
            <img
              src="../images/Trash.svg"
              alt="boton de eliminar"
              className="card__bottom-trash"
            />
            <div className="card__description">
              <h3 className="card__footer"></h3>
              <div alt="boton de like" className="card__bottom-like"></div>
            </div>
          </div>
        </template>

        <div className="popup" id="popup-image">
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
        </div>
        <div className="popup" id="popup-profile">
          <form className="form popup__form" id="form-profile" noValidate>
            <img
              className="form__close-button"
              src="../images/CloseIcon.svg"
              alt="boton para cerrar"
              id="close-profile-form"
            />
            <h2 className="form__title">Editar Perfil</h2>
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
        </div>
        <div className="popup" id="popup-avatar">
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
        </div>
        <div className="popup" id="popup-add">
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
        </div>
        <div className="popup" id="popup-confirmation">
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
        </div>
      </div>
    </>
  );
}

export default App;
