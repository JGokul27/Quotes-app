import React from 'react';

const PostList = ({ posts }) => (
    <div className="post-list">
        <h2>Your Posts</h2>
        {posts.length > 0 ? (
            posts.map((post, index) => (
                <div key={index} className="post">
                    <p>{post}</p>
                </div>
            ))
        ) : (
            <p>No posts yet!</p>
        )}
    </div>
);

export default PostList;
