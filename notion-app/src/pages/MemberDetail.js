import './MemberDetail.scss';

import { Input } from 'antd';
import { InstagramOutlined, AlignLeftOutlined, RadarChartOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';

import { getMemberAPI } from '../lib/memberAPI';
import Loading from '../components/Loading';
import Button from '../components/Button';

function MemberDetail({ match }) {
    const [memberState, setMemberState] = useState({
        status: 'idle',
        member: null
    });

    useEffect(() => {
        (async () => {
            try {
                setMemberState({ status: 'pending', member: null});
                const result = await getMemberAPI(match.params.id);
                setTimeout(() => setMemberState({ status: 'resolved', member: result }), 600);
            } catch(e) {
                setMemberState({ status: 'rejected', member: null });
                throw(e);
            }
        })();
    }, []);

    const onChangeInputs = (event) => {
        const { name, value } = event.target;
        setMemberState({
            status: 'resolved',
            member: {
                ...memberState.member,
                [name]: value
            }
        });
    };

    const memberElement = () => {
        return (
            <div className="member-detail">
                <div className="member-detail__buttons">
                    <Button text="Add icon" />
                    <Button text="Add cover" />
                </div>
                <div className="member-detail__content name">
                    {memberState.member.name}
                </div>
                <hr style={{ borderTop: "solid 1px #eee", marginBottom: "24px" }} />
                <div className="member-detail__content">
                    <div className="content-title"><InstagramOutlined />&nbsp; 인스타 아이디</div>
                    <Input className="content-input" bordered={false} name="instagram" value={memberState.member.instagram} onChange={onChangeInputs} />
                </div>
                <div className="member-detail__content">
                    <div className="content-title"><AlignLeftOutlined />&nbsp; 한 줄 소개</div>
                    <Input className="content-input" bordered={false} name="introduction" value={memberState.member.introduction} onChange={onChangeInputs} />
                </div>
                <div className="member-detail__content">
                    <div className="content-title"><RadarChartOutlined />&nbsp; MBTI</div>
                    <Input className="content-input" bordered={false} name="mbti" value={memberState.member.mbti} onChange={onChangeInputs} />
                </div>
            </div>
        );
    }

    switch(memberState.status) {
        case 'idle':
        case 'pending':
            return <Loading />;
        case 'resolved':
            return memberElement();
        case 'rejected':
            return <h1>해당 멤버가 없습니다</h1>;
        default:
            return <div></div>;
    }
}

export default MemberDetail;