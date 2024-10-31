import React from 'react';
import useFetchQuote from '../hooks/useFetchQuote';

const QuoteFetcher = ({ onCopy }) => {
    const { quote, author, fetchQuote } = useFetchQuote();

    const handleCopy = () => {
        onCopy(quote, author);
    };

    return (
        <div className="quote-fetcher">
            <p>{quote}</p>
            <p><strong>- {author}</strong></p>
            <button onClick={fetchQuote}>New Quote</button>
            <button onClick={handleCopy}>Copy & Create Post</button>
        </div>
    );
};

export default QuoteFetcher;
