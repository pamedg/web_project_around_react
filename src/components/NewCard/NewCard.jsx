export default function NewCard({ onAddCard }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const link = form.link.value;

    onAddCard({ title, link });
    form.reset();
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
      </form>
    </>
  );
}
