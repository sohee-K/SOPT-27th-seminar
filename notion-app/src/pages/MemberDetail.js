import { useEffect, useState } from "react";

import { getMember, updateMember } from "../lib/memberAPI";
import MemberElement from "../components/MemberElement";
import Loading from "../components/Loading";

function MemberDetail({ match }) {
  const [memberState, setMemberState] = useState({
    status: "idle",
    member: null,
  });

  useEffect(() => {
    (async () => {
      try {
        setMemberState({ status: "pending", member: null });
        const result = await getMember(match.params.id);
        setTimeout(
          () => setMemberState({ status: "resolved", member: result }),
          300
        );
      } catch (e) {
        setMemberState({ status: "rejected", member: null });
        throw e;
      }
    })();
  }, []);

  const onChangeInputs = async (event) => {
    const { name, value } = event.target;
    try {
      await updateMember(match.params.id, {
        ...memberState.member,
        [name]: value,
      });
      setMemberState({
        status: "resolved",
        member: {
          ...memberState.member,
          [name]: value,
        },
      });
    } catch (e) {
      throw e;
    }
  };

  switch (memberState.status) {
    case "idle":
    case "pending":
      return <Loading />;
    case "resolved":
      return (
        <MemberElement
          memberState={memberState}
          onChangeInputs={onChangeInputs}
        />
      );
    case "rejected":
      return <h1>해당 멤버가 없습니다</h1>;
    default:
      return <div></div>;
  }
}

export default MemberDetail;
