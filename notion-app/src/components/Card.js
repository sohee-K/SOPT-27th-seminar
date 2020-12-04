import "./Card.scss";
import { DeleteOutlined, FileImageOutlined } from "@ant-design/icons";
import { withRouter } from "react-router-dom";
import { deleteMember } from "../lib/memberAPI";

function Card({ memberData, history, onDeleteCard }) {
  const colors = [
    "lightpink",
    "lightyellow",
    "lightblue",
    "lavender",
    "lightgray",
  ];
  const num = Math.floor(Math.random() * 5);

  const onRemoveCard = async (event) => {
    event.stopPropagation();
    try {
      await deleteMember(memberData.id);
      onDeleteCard();
    } catch (e) {
      throw e;
    }
  };

  return (
    <div
      className="card"
      onClick={() => history.push(`/member/${memberData.id}`)}
      draggable
    >
      <div className="remove-button" onClick={onRemoveCard}>
        <DeleteOutlined style={{ fontSize: "16px" }} />
      </div>
      <div className="image-area">
        {memberData.profileUrl !== "" ? (
          <img src={memberData.profileUrl} alt="profile"></img>
        ) : (
          <FileImageOutlined style={{ fontSize: "40px" }} />
        )}
      </div>
      <div className="card__content card__text name">
        📃&nbsp;{memberData.name}
      </div>
      <div className="card__content card__text instagram">
        {memberData.instagram}
      </div>
      <div className="card__content card__text introduction">
        {memberData.introduction}
      </div>
      <div
        className="card__content card__text mbti"
        style={{ backgroundColor: colors[num] }}
      >
        {memberData.mbti}
      </div>
    </div>
  );
}

export default withRouter(Card);
