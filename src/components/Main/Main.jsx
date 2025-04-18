import avatar from "../../images/Avatar.png";
import pencil from "../../images/Pencil.svg";
import editButton from "../../images/EditButton.svg";
import addButton from "../../images/AddButton.svg";
export default function Main() {
  return (
    <>
      <section className="profile">
        <div className="profile__edit">
          <img src={avatar} alt="imagen avantar" className="profile__avatar" />
          <img className="profile__edit-pencil" src={pencil} />
        </div>
        <div className="profile__user">
          <div className="profile__info">
            <h1 className="profile__name"></h1>
            <img
              src={editButton}
              alt="boton para editar"
              className="profile__bottom"
            />
          </div>
          <p className="profile__occupation"></p>
        </div>
        <img
          src={addButton}
          alt="boton para añadir"
          className="profile__bottom-add"
        />
      </section>
      <section className="card-grid"></section>
    </>
  );
}
