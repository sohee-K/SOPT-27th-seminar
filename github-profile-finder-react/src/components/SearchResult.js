import React from 'react';
import '../App.scss';

function SearchResult({ userState }) {
    const { status, user } = userState;

    const UserCard = () => {
        return (
        <div className="user-card">
            <img className="user-avatar" src={user.avatar_url} alt={user.name}></img>
            <div className="user-info">
                <h2>{user.name} <span>({user.login})</span></h2>
                <p>bio: {user.bio}</p>
                <p>location: {user.location}</p>
                <ul className="user-info-list">
                    <li><strong>followers:</strong> {user.followers}</li>
                    <li><strong>following:</strong> {user.following}</li>
                    <li>{user.public_repos} <strong>repositories</strong></li>
                </ul>
            </div>
        </div>
        );
    };

    switch (status) {
        case "pending":
            console.log("pending");
            return <div style={{ color: "white", fontSize: "10rem" }}>Loading...</div>;

        case "resolved":
            console.log("resolved");
            return <UserCard />;

        case "rejected":
            console.log("rejected");
            return <div style={{ color: "white", fontSize: "2rem" }}>There's no such user.</div>;

        case "idle":
        default:
            return <div></div>;
    }
}

export default SearchResult;