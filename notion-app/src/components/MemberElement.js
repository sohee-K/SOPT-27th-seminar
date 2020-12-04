import "./MemberElement.scss";

import { Input } from "antd";
import {
  InstagramOutlined,
  AlignLeftOutlined,
  RadarChartOutlined,
} from "@ant-design/icons";

import Button from "../components/Button";

function MemberElement({ memberState, onChangeInputs }) {
  return (
    <div className="member-detail">
      <div className="member-detail__buttons">
        <Button text="Add icon" />
        <Button text="Add cover" />
      </div>
      <div className="member-detail__content">
        <Input
          className="content-name"
          bordered={false}
          name="name"
          value={memberState.member.name}
          onChange={onChangeInputs}
        />
      </div>
      <hr style={{ borderTop: "solid 1px #eee", marginBottom: "24px" }} />
      <div className="member-detail__content">
        <div className="content-title">
          <InstagramOutlined />
          &nbsp; 인스타 아이디
        </div>
        <Input
          className="content-input"
          bordered={false}
          name="instagram"
          value={memberState.member.instagram}
          onChange={onChangeInputs}
        />
      </div>
      <div className="member-detail__content">
        <div className="content-title">
          <AlignLeftOutlined />
          &nbsp; 한 줄 소개
        </div>
        <Input
          className="content-input"
          bordered={false}
          name="introduction"
          value={memberState.member.introduction}
          onChange={onChangeInputs}
        />
      </div>
      <div className="member-detail__content">
        <div className="content-title">
          <RadarChartOutlined />
          &nbsp; MBTI
        </div>
        <Input
          className="content-input"
          bordered={false}
          name="mbti"
          value={memberState.member.mbti}
          onChange={onChangeInputs}
        />
      </div>
      <div className="member-detail__content">
        {memberState.member.profileUrl !== "" ? (
          <img
            className="content-image"
            src={memberState.member.profileUrl}
            alt="profile url"
          ></img>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default MemberElement;
