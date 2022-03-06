import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./PersonDetail.css";

const src = process.env.PUBLIC_URL + "/imgs/avatar.jpg";

const PersonDetail = () => {
  const location = useLocation();
  const [isPhotoUploaded, setIsPhotoUploaded] = useState(true);
  const person = location.state;

  return (
    <div className="person__detail">
      <img
        src={isPhotoUploaded ? person.avatar : src}
        onError={() => setIsPhotoUploaded(false)}
        alt="avatar"
        className="person__detail__avatar"
      />
      <h2>{person.name}</h2>
      <p>{person.job}</p>
    </div>
  );
};

export default PersonDetail;
