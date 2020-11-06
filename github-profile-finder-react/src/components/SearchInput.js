import React, {useState} from 'react';

function SearchInput({ onSubmit }) {
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(input);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search Github Profile" onChange={handleChange} value={input}/>
        </form>
    );
}

export default SearchInput;