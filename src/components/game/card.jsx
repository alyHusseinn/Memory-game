const Card = (props) => {
  return <img src={props.imageSrc} onClick={props.onClick} />;
};

export default Card;
