import React, {useState} from 'react';

function SearchInput({ getUser }) {
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getUser(input);
        setInput(" ");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search Github Profile" onChange={handleChange} value={input}/>
        </form>
    );
}

export default SearchInput;