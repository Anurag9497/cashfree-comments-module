import React, { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Select from './components/Select';
import TextArea from './components/TextArea';

function App() {
  const [userComments, setUserComments] = useState([]);
  const [comment, setComment] = useState({
      username : "",
      createdAt : "",
      comment : "",
      reply : []
  });

  const updateReply = (reply, uid) => {
      let newArr = userComments.map(obj => {
        if(obj.username===uid)
        {
          return {
            ...obj,
            reply : [...obj.reply, reply]
          };
        }
        else
        {
          return obj;
        }
      });
      setUserComments(newArr);
  };

  return (
    <div className="App">
      <div>
        <Select comment={comment} setComment={setComment} styleObject={{marginBottom : '1em', justifyContent: 'center'}} />
        <TextArea 
          comment={comment} 
          setComment={setComment}
          userComments={userComments}
          setUserComments={setUserComments}
        />
      </div>
      <div id="userComments">
        {userComments.map((item, itemIndex) => {
          return(
            <Display key={itemIndex} item={item} updateReply={updateReply} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
