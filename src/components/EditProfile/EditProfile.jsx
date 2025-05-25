import { useState, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.jsx";

export default function EditProfile(name, description) {
  const CurrentUserContext = useContext(CurrentUserContext);
  const { currentUser, handleUpdateUser } = useContext;

  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateUser({
      name,
      about: description,
    });
  };

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
          name="name"
          placeholder="Nombre"
          value={name}
          onChange={handleNameChange}
        />
        <span className="input-error input-name-error form__error"></span>
      </div>
      <div className="form__input-container">
        <input
          className="form__input"
          type="text"
          id="input-about"
          required
          minLength="2"
          maxLength="200"
          name="job"
          placeholder=" Acerca de mí"
          value={description}
          onChange={handleDescriptionChange}
        />
        <span className="input-error input-about-error form__error"></span>
      </div>
      <button className="form__button" type="submit" id="profile-form-button">
        Guardar
      </button>
    </>
  );
}
