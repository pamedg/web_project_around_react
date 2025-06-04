import { useState, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
export default function NewCard({ onAddCard }) {
  const currentUser = useContext(CurrentUserContext);

  const [title, setTitle] = useState(currentUser.title);
  const [link, setLink] = useState(currentUser.link);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const link = form.link.value;

    onAddCard({ title, link });
    form.reset();

    setTitle(currentUser.title);
    setLink(currentUser.link);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <span className="form__error input-image-error"></span>
        </div>
        <button className="form__button" type="submit" id="addCard-form-button">
          Save
        </button>
      </form>
    </>
  );
}
