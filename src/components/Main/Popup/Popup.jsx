import closeIcon from "../../../images/CloseIcon.svg";
export default function Popup(props) {
  const { onClose, title, children } = props;

  return (
    <div className="popup" id="popup-profile">
      <form className="form popup__form" id="form-profile" noValidate>
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
      </form>
    </div>
  );
}

/* CODIGO DE EJEMPLO PLATAFORMA
return (
    <div className="popup">
      <div
        className={`popup__content ${
          !title ? "popup__content_content_image" : ""
        }`}
      >
        <button
          aria-label="Close modal"
          className="popup__close"
          type="button"
          onClick={onClose}
        />
        
        {title && <h3 className="popup__title">{title}</h3>}

        {children}
      </div>
    </div>
  );
}*/
