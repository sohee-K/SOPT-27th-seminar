import React from 'react';
import '../App.scss';

function SearchResult({ user }) {
    return (
        user && (
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
        )
    );
}

export default SearchResult;