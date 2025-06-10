export default function ImagePopup(props) {
  const { name, link } = props;

  return (
    <>
      <img src={link} alt={name} className="popup__image" />
      <h4 className="popup__title">{name}</h4>
    </>
  );
}
