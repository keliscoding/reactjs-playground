import "./LikeContainer.css";

import { BsHeart, BsHeartFill } from "react-icons/bs";

const LikeContainer = ({ photo, user, handleLike }) => {
  return (
    <div className="like">
      {photo.likes && user && (
        <>
          {photo.likes.includes(user._id) ? (
            <BsHeartFill />
          ) : (
            <BsHeart onClick={() => handleLike(photo)} />
          )}
          {photo.likes.length === 1 ? (
            <p>{photo.likes.length} like</p>
          ) : (
            <p>{photo.likes.length} likes</p>
          )}
        </>
      )}
    </div>
  );
};

export default LikeContainer;
