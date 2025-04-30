import closeIcon from "../../../images/CloseIcon.svg";
export default function Popup(props) {
  const { onClose, title, children } = props;

  return (
    <div className="popup" id="popup-profile">
      <div
        className={`popup__container ${!title ? "popup__container_image" : ""}`}
      >
        {/*<form className="form popup__form" id="form-profile" noValidate>*/}
        <img
          /*aqui es boton preguntar si lo puedo cambiar a boton*/
          className="form__close-button"
          src={closeIcon}
          alt="boton para cerrar"
          id="close-profile-form"
          type="button"
          onClick={onClose}
        />
        {title && <h2 className="form__title">{title}</h2>}
        {children}
        {/*</form>*/}
      </div>
    </div>
  );
}
