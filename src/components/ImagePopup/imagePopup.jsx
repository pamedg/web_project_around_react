export default function ImagePopup(props) {
  const { card, onClose, title } = props;
  if (!card) {
    return null;
  }

  return (
    <div className="popup popup__image">
      <div className="popup__content popup__content_content_image">
        <button
          aria-label="Close modal"
          className="popup__close"
          type="button"
          onClick={onClose}
        />
        <img src={link} alt={name} className="popup__image" />
        <h3 className="popup__title">{name}</h3>
      </div>
    </div>
  );
}
