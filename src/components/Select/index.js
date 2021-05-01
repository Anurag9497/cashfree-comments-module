import React from 'react';
import './index.css';

function Select({comment, setComment, styleObject}) {
    const handleUser = (event) => {
        let newComment = {
            ...comment,
            username : event.target.value
        };
        setComment(newComment);
    };

    return (
        <div className="select-div" style={styleObject}>
            <select id="username" onChange={handleUser}>
                <option value="">Select User</option>
                <option value="user1">User 1</option>
                <option value="user2">User 2</option>
                <option value="user3">User 3</option>
            </select>
        </div>
    );
}

export default Select;
