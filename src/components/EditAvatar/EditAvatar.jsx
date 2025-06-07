import React, { createRef } from "react";
import Popup from "../Main/Popup/Popup";
export default function EditAvatar() {
  const inputRef = createRef();
  onUpdateAvatar;
  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar(inputRef.current.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* ref={createRef} */}
        <div className="popup__container">
          <img
            className="form__close-button"
            src="../images/CloseIcon.svg"
            alt="boton para cerrar"
            id="close-profile-form-add"
          />
          <h2 className="form__title"></h2>
          <div className="form__input-container">
            <input
              className="form__input"
              type="url"
              id="input-avatar"
              required
              minLength="2"
              maxLength="200"
              name="link"
              placeholder="Nueva Foto de Perfil"
            />
            <span className="form__error input-avatar-error"></span>
          </div>
          <button
            className="form__button"
            type="submit"
            id="profile-form-button"
          >
            Guardar
          </button>
        </div>
      </form>
    </>
  );
}
