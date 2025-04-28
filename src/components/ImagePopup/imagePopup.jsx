export default function ImagePopup(props) {
  const { card, onClose, name, link } = props;
  /* if (!card) {
  // return null;
  // }*/

  return (
    <>
      <div className="popup popup__image">
        <div className="popup__container">
          <img src={link} alt={name} className="popup__image" />
          <h4 className="popup__title">{name}</h4>
          <button
            aria-label="Close modal"
            className="popup__close"
            type="button"
            onClick={onClose}
          />
        </div>
      </div>
    </>
  );
}
