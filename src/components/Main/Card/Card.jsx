export default function Card(props) {
  if (!props.card) {
    return null;
  }
  const { name, link, isliked } = props.card;

  return (
    <>
      <div className="card">
        <img src={link} alt="" className="card__image" />
        <div alt="boton de eliminar" className="card__bottom-trash"></div>
        <div className="card__description">
          <h3 className="card__footer">{name}</h3>c
          <div alt="boton de like" className="card__bottom-like"></div>
        </div>
      </div>
    </>
  );
}
