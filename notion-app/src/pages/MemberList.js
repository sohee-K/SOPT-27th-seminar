import './MemberList.scss';
import Button from '../components/Button';
import Card from '../components/Card';
import Loading from '../components/Loading';
import { useEffect, useState } from 'react';

import { getMemberAPI } from '../lib/memberAPI';

function MemberList({ history, match }) {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            const result = await getMemberAPI();
            setMembers(result);
        })();
    }, []);
    const removeCard = (event) => {
        event.stopPropagation();
        console.log("REMOVE CARD!!");
    }

    switch(loading) {
        case true:
            return(
                <Loading />
            );
        case false:
            return(
                <div className="member-list">
                    <div className="member-list__title">파트원 소개</div>
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
                        {members.map((member, index) => 
                            <Card key={"card-" + index} route={{ history, match }} memberData={member} onRemoveCard={removeCard} />
                        )}
                    </div>
                </div>
            );
    }
}

export default MemberList;