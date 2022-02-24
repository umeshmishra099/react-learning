import React from "react";

const UpVotes = ({upVotes, name, setArticleInfo}) => {

    const addVotes = async () => {
        const result = await fetch(`/api/article/${name}/up-votes`, {method: 'post'});
        const body = await result.json();
        setArticleInfo(body);
    }

    return (
        <div id="upvotes-section">
            <button onClick={() => addVotes()}>Add votes</button>
            <p>This article has {upVotes} upVotes</p>
        </div>
    )
}

export default UpVotes;