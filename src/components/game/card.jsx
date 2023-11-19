import Tilt from "react-parallax-tilt";

const Card = ({imgSrc, handleHitCard, flipped}) => {
  return (
    <div className={flipped? 'card flipped' : 'card'} onClick={handleHitCard}>
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.6}
        glareColor="white"
        glarePosition="bottom"
        glareBorderRadius="20px"
        className="tilt"
      >
        <div
          className="card-face"
          style={{ backgroundImage: `url(${imgSrc})` }}
          
        ></div>
        <div className="card-back"></div> 
        
      </Tilt>
    </div>
  );
};

export default Card;
