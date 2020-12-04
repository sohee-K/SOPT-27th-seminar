import "./MemberList.scss";
import Button from "../components/Button";
import Card from "../components/Card";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";

import { getMembers } from "../lib/memberAPI";

function MemberList({ history, match }) {
  const [membersState, setMembersState] = useState({
    members: null,
    status: "idle",
  });

  useEffect(() => {
    (async () => {
      setMembersState({ members: null, status: "pending" });
      try {
        const result = await getMembers();
        setTimeout(() => {
          setMembersState({ members: result, status: "resolved" });
        }, 300);
      } catch (e) {
        setMembersState({ members: null, status: "rejected" });
        throw e;
      }
    })();
  }, []);

  const removeCard = (event) => {
    event.stopPropagation();
    console.log("REMOVE CARD!!");
  };

  switch (membersState.status) {
    case "pending":
      return <Loading />;
    case "rejected":
      return <div>데이터 로딩 실패</div>;
    case "resolved":
      return (
        <div className="member-list">
          <div className="member-list__title">⭐ 파트원 소개 *</div>
          <div className="member-list__header member-list-header">
            <div className="member-list-header__nav">Gallery View</div>
            <div className="member-list-header__empty"></div>
            <Button text="Properties" textColor="#777" />
            <Button text="Filter" textColor="#777" />
            <Button text="Sort" textColor="#777" />
            <Button text="Search" textColor="#777" />
            <Button text="..." textColor="#777" />
          </div>
          <hr />
          <div className="member-list-content-wrapper">
            {membersState.members.map((member, index) => (
              <Card
                key={"card-" + index}
                route={{ history, match }}
                memberData={member}
                onRemoveCard={removeCard}
              />
            ))}
            <div className="create-card">+ New</div>
          </div>
        </div>
      );
    case "idle":
    default:
      return <div></div>;
  }
}

export default MemberList;
