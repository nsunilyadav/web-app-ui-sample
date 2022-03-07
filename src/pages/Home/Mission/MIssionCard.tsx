import React from "react";
import { Figure } from "react-bootstrap";
import { Link } from "react-router-dom";

interface MissionCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}
const MissionCard: React.FC<MissionCardProps> = ({
  image,
  title,
  description,
  link,
}) => {
  return (
    <div className="innner-box">
      <div className="image-box">
        <Figure>
          <Figure.Image src={image} />
        </Figure>
      </div>
      <div className="info-box">
        <h4>{title}</h4>
        <div className="text">{description}</div>
        <Link to={link} className="readmore-btn">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default MissionCard;
