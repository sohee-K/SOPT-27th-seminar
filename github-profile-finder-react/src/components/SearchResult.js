import React from 'react';
import '../App.scss';
import UserCard from './UserCard';
import Loading from './Loading';
import NoUser from './NoUser';

function SearchResult({ userState }) {
    const { status, user } = userState;

    switch (status) {
        case "pending":
            console.log("pending");
            return <Loading />;

        case "resolved":
            console.log("resolved");
            return <UserCard user={user} />;

        case "rejected":
            console.log("rejected");
            return <NoUser />;

        case "idle":
        default:
            return <div></div>;
    }
}

export default SearchResult;