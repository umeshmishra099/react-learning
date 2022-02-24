import React, {useState} from "react";

const AddComment = ({name, setArticleInfo}) => {
    const [userName, setUserName] = useState('');
    const [text, setText] = useState('');

    const addComment = async () => {
        console.log(name);
        let response = await fetch(`/api/article/${name}/add-comment`, {
            method: 'post',
            body: JSON.stringify({name: userName, text: text}),
            headers: {'content-Type': 'application/json'}
        });

        const body = await response.json();
        setArticleInfo(body);
        setUserName('');
        setText('');
    }

    return (
        <div id="add-comment-form">
            <h3>Add Comment</h3>
            <label>
                Name:
                <input type="text" value={userName} onChange={(event) => setUserName(event.target.value)}/>
            </label>
            <label>
                Comment:
                <textarea rows="4" cols="50" value={text} onChange={(event) => setText(event.target.value)}> </textarea>
            </label>
            <button onClick={() => addComment()}>Add comment</button>
        </div>
    );
}

export default AddComment;