import React,{ useState } from 'react';
import Select from '../Select';
import './index.css';

function Display({item, updateReply}) {
    const [flag, setFlag] = useState(false);
    const [reply, setReply] = useState({
        username : "",
        createdAt : "",
        reply : ""
    });

    const resetReply = () => {
        setReply({
            username : "",
            createdAt : "",
            reply : ""
        });
    };

    const handleReplyChange = (event) => {
        let newReply = {
            ...reply,
            createdAt : new Date(),
            reply : event.target.value
        };
        setReply(newReply);
    };

    const handleSubmitReply = (uid) => {
        if(reply.username!=="" && reply.reply!=="")
        {
            updateReply(reply, uid);
            resetReply();
            setFlag(false);
        }
        else
        {
            alert("Fields are empty!");
        }
    };

    return (
        <div id="display">
            <div id="display-comment">{item.username.toUpperCase()} Commented at {item.createdAt.toLocaleDateString('en-US',{hour12 : true})} {item.createdAt.toLocaleTimeString('en-US',{hour12 : true})} : {item.comment}</div>
            {item.reply.map((data, index) => {
                return(
                    <div 
                        key={index} 
                        className="reply"
                    >
                        {data.username.toUpperCase()} Replied at {data.createdAt.toLocaleDateString('en-US',{hour12 : true})} {data.createdAt.toLocaleTimeString('en-US',{hour12 : true})} : {data.reply}
                    </div>
                );
            })}
            {flag ? <div>
                        <Select comment={reply} setComment={setReply} styleObject={{marginBottom : '0em', marginTop: '1em'}}/>
                        <input type="text" className="reply-input" value={reply.reply} onChange={handleReplyChange}/>
                        <button type="button" id="reply-btn" onClick={() => handleSubmitReply(item.username)}>Reply</button>
                    </div> :
                    <button type="button" id="reply-btn-new" onClick={() => setFlag(true)}>Reply</button> 
            } 
        </div>
    );
}

export default Display;
