import closeIcon from "../../../images/CloseIcon.svg";
export default function Popup(props) {
  const { title, children } = props;

  return (
    <div className="popup" id="popup-profile">
      <form className="form popup__form" id="form-profile" noValidate>
        <img
          className="form__close-button"
          src={closeIcon}
          alt="boton para cerrar"
          id="close-profile-form"
        />
        <h2 className="form__title">{title}</h2>
        {children}
      </form>
    </div>
  );
}
