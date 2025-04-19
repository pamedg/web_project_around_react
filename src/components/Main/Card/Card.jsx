export default function Card(props) {
  const { name, link, isliked } = props.card;
  return (
    <>
      <template className="template-card">
        <div className="card">
          <img src="#" alt="" className="card__image" />
          <img
            src="../images/Trash.svg"
            alt="boton de eliminar"
            className="card__bottom-trash"
          />
          <div className="card__description">
            <h3 className="card__footer"></h3>
            <div alt="boton de like" className="card__bottom-like"></div>
          </div>
        </div>
      </template>
    </>
  );
}
