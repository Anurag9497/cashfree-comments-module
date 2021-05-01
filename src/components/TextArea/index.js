import React from 'react';
import './index.css';

function TextArea({comment, setComment, userComments, setUserComments}) {
    const reset = () => {
        setComment({
            username : "",
            createdAt : "",
            comment : "",
            reply : []
        });
    };

    const handleTextArea = (event) => {
        let newComment = {
            ...comment,
            createdAt : new Date(),
            comment : event.target.value
        };
        setComment(newComment);
    };


    const handleComment = () => {
        if(comment.username!=="" && comment.comment!=="")
        {
            let newUserComment = [
                ...userComments,
                comment
            ];
            setUserComments(newUserComment);
            reset();
        }
        else
        {
            alert("Fields are empty!");
        }
    };
    return (
        <div className="textArea-div">
            <textarea value={comment.comment} id="comment" onChange={handleTextArea}></textarea>
            <button type="button" id="comment-btn" onClick={handleComment} >Comment</button>
        </div>
    );
}

export default TextArea;
