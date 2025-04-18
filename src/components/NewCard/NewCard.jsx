import { Children } from "react";

export default function Main() {
    const [popup, setPopup] = useState(null);
    const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
export default function NewCard() {
  return (
    <>
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
      <button className="form__button" type="submit" id="profile-form-button">
        Guardar
      </button>
    </>
  );
}
}
