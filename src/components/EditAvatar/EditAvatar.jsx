export default function EditAvatar() {
  return (
    <>
      <div className="popup__container">
        <img
          className="form__close-button"
          src="../images/CloseIcon.svg"
          alt="boton para cerrar"
          id="close-profile-form-add"
        />
        <h2 className="form__title"></h2>
        <div>
          <input
            className="form__input"
            type="url"
            id="input-avatar"
            required
            minLength="2"
            maxLength="200"
            name="link"
            placeholder="URL de la imagen"
          />
          <span className="form__error input-avatar-error"></span>
        </div>
        <button className="form__button" type="submit" id="addcard-form-button">
          Guardar
        </button>
      </div>
    </>
  );
}
