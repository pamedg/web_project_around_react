import { Children } from "react";
export default function NewCard() {
  const newCardPopup = { title: "New Place", children: <NewCard /> };

  return (
    <>
      <div className="form__input-container">
        <input
          className="form__input"
          type="text"
          id="input-name"
          required
          minLength="2"
          maxLength="40"
          name="title"
          placeholder="Titulo"
        />
        <span className="input-error input-name-error form__error"></span>
      </div>
      <div className="form__input-container">
        <input
          className="form__input"
          type="url"
          id="input-image"
          required
          minLength="2"
          maxLength="200"
          name="link"
          placeholder=" URL de la imagen"
        />
        <span className="form__error input-image-error"></span>
      </div>
      <button className="form__button" type="submit" id="addCard-form-button">
        Save
      </button>
    </>
  );
}
