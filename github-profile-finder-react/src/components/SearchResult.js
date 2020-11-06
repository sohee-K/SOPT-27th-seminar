import React from 'react';

function SearchResult({ user }) {
    return (
        user && (
        <div>
            <img src={user.avatar_url} alt={user.name}></img>
            <p>ID: {user.login}</p>
            <p>name: {user.name}</p>
            <p>followers: {user.followers} following: {user.following}</p>
            <p>bio: {user.bio}</p>
            <p>location: {user.location}</p>
            <p>{user.public_repos} repositories</p>
        </div>
        )
    );
}

export default SearchResult;