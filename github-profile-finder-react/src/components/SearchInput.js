import { useState, useEffect, useRef } from 'react';
import '../App.scss';

function SearchInput({ getUser }) {
    const [input, setInput] = useState('');
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getUser(input);
        setInput("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className="search-input" type="text" placeholder="Search Github Profile" onChange={handleChange} ref={inputRef} value={input}/>
        </form>
    );
}

export default SearchInput;