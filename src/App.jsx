import React, { useState } from 'react';
import QuoteFetcher from './components/QuoteFetcher';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';

function App() {
    const [copiedQuote, setCopiedQuote] = useState({ quote: "", author: "" });
    const [posts, setPosts] = useState([]);

    const handleCopy = (quote, author) => {
        setCopiedQuote({ quote, author });
    };

    const handlePost = (postText) => {
        setPosts([...posts, postText]);
    };

    return (
        <div className="App">
            <h1>Random Quote Post Generator</h1>
            <QuoteFetcher onCopy={handleCopy} />
            {copiedQuote.quote && (
                <CreatePost quote={copiedQuote.quote} author={copiedQuote.author} onPost={handlePost} />
            )}
            <PostList posts={posts} />
        </div>
    );
}

export default App;
