export default function Card(props) {
  if (!props.card) {
    return null;
  }

  const { onCardClick } = props;
  const { name, link, isliked } = props.card;

  const imagePopup = {
    children: <ImagePopup />,
  };

  function handleClickCard() {
    onCardClick(imagePopup);

    return (
      <>
        <div className="card">
          <img
            src={link}
            alt=""
            className="card__image"
            onClick={handleClickCard}
          />
          <div alt="boton de eliminar" className="card__bottom-trash"></div>
          <div className="card__description">
            <h3 className="card__footer">{name}</h3>
            <div alt="boton de like" className="card__bottom-like"></div>
          </div>
        </div>
      </>
    );
  }
}
