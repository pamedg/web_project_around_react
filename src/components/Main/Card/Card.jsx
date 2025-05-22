import { useContext } from "react";
import { CurrentUserContext } from "../../../ contexts/CurrentUserContext";
import ImagePopup from "../../ImagePopup/imagePopup";
// import ImagePopup from "../../ImagePopup/imagePopup";
export default function Card(props) {
  if (!props.card) {
    return null;
  }
  const currentUser = useContext(CurrentUserContext);
  const [isLiked, setIsLiked] = useState(props.isLiked);
  const { onCardClick, onCardLike, onCardDelete } = props;
  const { name, link } = props.card;

  const imagePopup = {
    children: <ImagePopup link={link} name={name} />,
  };

  const cardLikeButtonClassName = `card__bottom-like ${
    isLiked ? "card__bottom-like_active" : ""
  }`;

  // const isLiked = card.likes.some((i) => i._id === currentUser._id);

  const cardDeleteButtonClassName = `${isOwn ? "card__bottom-trash" : ""}`;

  function handleCardLike() {
    isLiked ? setIsLiked(false) : setIsLiked(true);
    onCardLike(props.card);
    // onCardClick({ children: <ImagePopup link={link} name={name} /> });
  }

  function handleLikeClick() {
    onCardClick({ children: <ImagePopup link={link} name={name} /> });
  }

  function handleClickCard() {
    onCardClick({ children: <ImagePopup link={link} name={name} /> });
    /*onCardClick(imagePopup);*/
  }

  function handleCardDelete() {
    onCardDelete({ children: <ImagePopup link={link} name={name} /> });
    handleDeleteClick();
  }

  return (
    <>
      <div className="card">
        <img
          src={link}
          alt=""
          className="card__image"
          onClick={handleClickCard}
        />
        <div
          alt="boton de eliminar"
          className={cardDeleteButtonClassName}
        ></div>
        <div className="card__description">
          <h3 className="card__footer">{name}</h3>
          <div
            alt="boton de like"
            className={isLiked ? "card__bottom-like_active" : ""}
            onClick={handleCardLike}
          ></div>
        </div>
      </div>
    </>
  );
}
