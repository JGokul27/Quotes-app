import React, { useState } from 'react';

const CreatePost = ({ quote, author, onPost }) => {
    const [postText, setPostText] = useState(`${quote} - ${author}`);

    const handleSubmit = (e) => {
        e.preventDefault();
        onPost(postText);
        setPostText("");
    };

    return (
        <div className="create-post">
            <h2>Create a New Post</h2>
            <textarea
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                rows="4"
                placeholder="Write something..."
            />
            <button onClick={handleSubmit}>Post</button>
        </div>
    );
};

export default CreatePost;
